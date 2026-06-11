import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://dermascan360.de",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface CorporateContactRequest {
  email: string;
  phone: string;
  company: string;
  employeeCount: string;
  firstName: string;
  lastName: string;
  message: string;
}

// HTML-Escape-Funktion zur Vermeidung von XSS/HTML-Injection
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char]);
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: CorporateContactRequest = await req.json();

    // Escape all user inputs before using in HTML
    const safeFirstName = escapeHtml(data.firstName);
    const safeLastName = escapeHtml(data.lastName);
    const safeEmail = escapeHtml(data.email);
    const safePhone = escapeHtml(data.phone);
    const safeCompany = escapeHtml(data.company);
    const safeEmployeeCount = escapeHtml(data.employeeCount);
    const safeMessage = escapeHtml(data.message);

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "DermaScan360 <onboarding@resend.dev>",
        to: ["info@dermascan360.de"],
        subject: `Neue Unternehmensanfrage von ${safeFirstName} ${safeLastName}`,
        html: `
          <h2>Neue Unternehmensanfrage</h2>
          
          <h3>Kontaktdaten</h3>
          <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
          <p><strong>E-Mail:</strong> ${safeEmail}</p>
          <p><strong>Telefon:</strong> ${safePhone}</p>
          
          <h3>Unternehmensdaten</h3>
          <p><strong>Unternehmen:</strong> ${safeCompany}</p>
          <p><strong>Mitarbeiteranzahl:</strong> ${safeEmployeeCount}</p>
          
          <h3>Nachricht</h3>
          <p>${safeMessage.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    const emailResponse = await res.json();

    if (!res.ok) {
      throw new Error(emailResponse.message || 'Failed to send email');
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-corporate-contact function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
