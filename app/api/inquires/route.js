import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
    let name, email, message; 

    try {
 
        try {
            const body = await req.json();
            name = body.name;
            email = body.email;
            message = body.message; 
        } catch (parseError) {
            console.error("JSON Parsing Error:", parseError);
            return NextResponse.json(
                { error: "Invalid request body. Please send JSON with 'name' and 'email' fields (message is optional)." },
                { status: 400 }
            );
        }


 
        if (!name || typeof name !== 'string' || name.trim() === '') {
            return NextResponse.json({ error: "Name is required." }, { status: 400 });
        }
        if (!email || typeof email !== 'string' || email.trim() === '') {
            return NextResponse.json({ error: "Email is required." }, { status: 400 });
        }

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();

        const trimmedMessage = (message && typeof message === 'string') ? message.trim() : '';

        if (!emailRegex.test(trimmedEmail)) {
             return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        const lowerCaseEmail = trimmedEmail.toLowerCase();

        const { db } = await connectToDatabase();
        const inquiriesCollection = db.collection("inquiries");

        const newInquiry = {
            name: trimmedName,
            email: lowerCaseEmail,
            message: trimmedMessage,
            receivedAt: new Date(),
            status: "new" 
        };

        const result = await inquiriesCollection.insertOne(newInquiry);

        if (!result.insertedId) {
            throw new Error("Database insertion failed for inquiry.");
        }

        return NextResponse.json(
            { message: "Your inquiry has been received successfully. We will contact you shortly." },
            { status: 201 } 
        );

    } catch (error) {
        console.error("Inquiry API Error:", error);
        return NextResponse.json(
            { error: "An internal server error occurred while processing your inquiry. Please try again." },
            { status: 500 }
        );
    }
}