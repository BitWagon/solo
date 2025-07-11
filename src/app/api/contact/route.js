// app/api/contact/route.js

import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
      });
    }

    const client = await clientPromise;
    const db = client.db("auto_service");
    const collection = db.collection("contacts");

    const result = await collection.insertOne({
      name,
      email,
      phone,
      service,
      message,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ message: "Message sent successfully", id: result.insertedId }),
      { status: 201 }
    );
  } catch (err) {
    console.error("Error saving contact:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
