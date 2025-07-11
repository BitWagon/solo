import { connectDB } from '@/lib/db';
import Contact from '@/lib/models/Contact';

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();

    const newContact = await Contact.create(data);
    return Response.json({ success: true, message: 'Message sent successfully', contact: newContact });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return new Response(JSON.stringify({ success: false, message: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
