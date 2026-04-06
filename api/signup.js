import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await resend.emails.send({
      from: 'noreply@meeska.us',
      to: 'michelle.martinkov@meeska.us',
      subject: 'New Meeska Signup',
      html: `<p>New email signup from the Meeska website:</p><p><strong>${email.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</strong></p>`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
