import { connectDB } from '@/lib/db';
import Contact from '@/models/contact';

export async function POST(request) {
  try {
    const body = await request.json();
    await connectDB();
    const contact = new Contact(body);
    await contact.save();
    return new Response(JSON.stringify({ message: 'Saved successfully' }), { status: 201 });
  } catch (error) {
    console.error('Error saving contact:', error);
    return new Response(JSON.stringify({ message: 'Error saving contact' }), { status: 500 });
  }
}
