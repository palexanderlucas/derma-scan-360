import type { VercelRequest, VercelResponse } from '@vercel/node';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

interface CorporateContactRequest {
  email: string;
  phone: string;
  company: string;
  employeeCount: string;
  name: string;
  message: string;
}

function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', 'https://dermascan360.de');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { email, phone, company, employeeCount, name, message }: CorporateContactRequest = req.body;

    // Validate required fields
    if (!email || !company || !name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Sanitize all inputs
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || '');
    const safeCompany = escapeHtml(company);
    const safeEmployeeCount = escapeHtml(employeeCount || '');
    const safeName = escapeHtml(name);
    const safeMessage = escapeHtml(message || '');

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'DermaScan360 Anfrage <onboarding@resend.dev>',
        to: ['info@dermascan360.de'],
        subject: `Neue Unternehmensanfrage von ${safeCompany}`,
        html: `
          <h1>Neue Unternehmensanfrage</h1>
          <h2>Kontaktdaten</h2>
          <ul>
            <li><strong>Name:</strong> ${safeName}</li>
            <li><strong>E-Mail:</strong> ${safeEmail}</li>
            <li><strong>Telefon:</strong> ${safePhone || 'Nicht angegeben'}</li>
          </ul>
          <h2>Unternehmensdaten</h2>
          <ul>
            <li><strong>Unternehmen:</strong> ${safeCompany}</li>
            <li><strong>Mitarbeiteranzahl:</strong> ${safeEmployeeCount || 'Nicht angegeben'}</li>
          </ul>
          <h2>Nachricht</h2>
          <p>${safeMessage || 'Keine Nachricht'}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error('Resend API error:', errorData);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    const result = await emailResponse.json();
    console.log('Email sent successfully:', result);

    return res.status(200).json({ success: true, id: result.id });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
