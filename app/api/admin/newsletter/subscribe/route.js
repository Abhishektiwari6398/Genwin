import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb"; 

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
    let email; 

    try {
        try {
            const body = await req.json();
            email = body.email;
        } catch (parseError) {
            console.error("JSON Parsing Error:", parseError);
            return NextResponse.json(
                { error: "Invalid request body. Please send JSON with an 'email' field." },
                { status: 400 }
            );
        }


        if (!email || typeof email !== 'string' || email.trim() === '') {
            return NextResponse.json(
                { error: "Email is required and must be a non-empty string." },
                { status: 400 }
            );
        }

        const trimmedEmail = email.trim();

        if (!emailRegex.test(trimmedEmail)) {
             return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }
        const lowerCaseEmail = trimmedEmail.toLowerCase();
        const { db } = await connectToDatabase();
        const subscriptionsCollection = db.collection("newsletterSubscriptions");
        const existingSubscription = await subscriptionsCollection.findOne({ email: lowerCaseEmail });

        if (existingSubscription) {
            return NextResponse.json(
                { message: "You are already subscribed to our newsletter!" },
                { status: 200 } 
            );
        }

        const newSubscription = {
            email: lowerCaseEmail,
            subscribedAt: new Date()
        };

        const result = await subscriptionsCollection.insertOne(newSubscription);

    
        if (!result.insertedId) {
            throw new Error("Database insertion failed.");
        }
        return NextResponse.json(
            { message: "Thank you for subscribing to our newsletter!" },
            { status: 201 } 
        );

    } catch (error) {
        console.error("Newsletter Subscription API Error:", error);
        return NextResponse.json(
            { error: "An internal server error occurred. Please try again later." },
            { status: 500 }
        );
    }
}