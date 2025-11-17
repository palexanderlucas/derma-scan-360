import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
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

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: CorporateContactRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "DermaScan360 <onboarding@resend.dev>",
      to: ["info@dermascan360.de"],
      subject: `Neue Unternehmensanfrage von ${data.firstName} ${data.lastName}`,
      html: `
        <h2>Neue Unternehmensanfrage</h2>
        
        <h3>Kontaktdaten</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>E-Mail:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        
        <h3>Unternehmensdaten</h3>
        <p><strong>Unternehmen:</strong> ${data.company}</p>
        <p><strong>Mitarbeiteranzahl:</strong> ${data.employeeCount}</p>
        
        <h3>Nachricht</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });

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
