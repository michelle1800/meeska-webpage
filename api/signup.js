import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_AUDIENCE_ID;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const results = await Promise.allSettled([
      resend.contacts.create({
        audienceId,
        email,
        unsubscribed: false,
      }),
      resend.emails.send({
        from: 'noreply@meeska.us',
        to: 'michelle.martinkov@meeska.us',
        subject: 'New Meeska Signup',
        html: `<p>New email signup from the Meeska website:</p><p><strong>${email.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</strong></p>`,
      }),
    ]);

    const contactResult = results[0];
    if (contactResult.status === 'rejected') {
      console.error('Failed to add contact:', contactResult.reason);
    }

    const emailResult = results[1];
    if (emailResult.status === 'rejected') {
      console.error('Failed to send notification:', emailResult.reason);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ error: 'Failed to process signup' });
  }
}
