import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb"; 

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



export async function POST(req) {
    let name, email, phone, subject, message;

    try {
        try {
            const body = await req.json();
            name = body.name;
            email = body.email;
            phone = body.phone;
            subject = body.subject;
            message = body.message;
        } catch (parseError) {
            console.error("JSON Parsing Error:", parseError);
            return NextResponse.json(
                { error: "Invalid request body. Please send JSON." },
                { status: 400 }
            );
        }


        if (!name || typeof name !== 'string' || name.trim() === '') {
            return NextResponse.json({ error: "Name is required." }, { status: 400 });
        }
        if (!email || typeof email !== 'string' || email.trim() === '') {
            return NextResponse.json({ error: "Email is required." }, { status: 400 });
        }
        if (!subject || typeof subject !== 'string' || subject.trim() === '') {
            return NextResponse.json({ error: "Subject is required." }, { status: 400 });
        }
        if (!message || typeof message !== 'string' || message.trim() === '') {
            return NextResponse.json({ error: "Message is required." }, { status: 400 });
        }

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedSubject = subject.trim();
        const trimmedMessage = message.trim();

        const trimmedPhone = (phone && typeof phone === 'string') ? phone.trim() : null;

        if (!emailRegex.test(trimmedEmail)) {
             return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        const lowerCaseEmail = trimmedEmail.toLowerCase();

        const { db } = await connectToDatabase();
        const feedbackCollection = db.collection("feedback"); 

        const newFeedback = {
            name: trimmedName,
            email: lowerCaseEmail,
            phone: trimmedPhone, 
            subject: trimmedSubject,
            message: trimmedMessage,
            submittedAt: new Date(), 
            status: "new" 
        };


        const result = await feedbackCollection.insertOne(newFeedback);


        if (!result.insertedId) {
            throw new Error("Database insertion failed for feedback.");
        }

        return NextResponse.json(
            { message: "Thank you for your feedback! We have received it successfully." },
            { status: 201 } 
        );

    } catch (error) {
        console.error("Feedback API Error:", error);
        return NextResponse.json(
            { error: "An internal server error occurred while submitting your feedback. Please try again." },
            { status: 500 }
        );
    }
}