// app/api/contact-request/route.js
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb"; // Import the MongoDB connection helper

// Basic email format validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
    let name, email, phone; // Define outside try block

    try {
        // --- Extract Input ---
        try {
            const body = await req.json();
            // console.log("Received Body:", body); // Keep for debugging if needed
            name = body.name;
            email = body.email;
            phone = body.phone; // Optional field
        } catch (parseError) {
            console.error("JSON Parsing Error:", parseError);
            return NextResponse.json(
                { error: "Invalid request body. Please send JSON with 'name' and 'email' (and optionally 'phone')." },
                { status: 400 }
            );
        }

        // --- Validate REQUIRED Fields ---
        if (!name || typeof name !== 'string' || name.trim() === '') {
            return NextResponse.json({ error: "Name is required." }, { status: 400 });
        }
        if (!email || typeof email !== 'string' || email.trim() === '') {
            return NextResponse.json({ error: "Email is required." }, { status: 400 });
        }

        // --- Process and Validate Input ---
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedPhone = (phone && typeof phone === 'string') ? phone.trim() : null; // Handle optional phone

        // Validate email format
        if (!emailRegex.test(trimmedEmail)) {
             return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        // Convert email to lowercase for consistency
        const lowerCaseEmail = trimmedEmail.toLowerCase();

        // Optional: Add validation for phone number format if needed
        // if (trimmedPhone && !isValidPhoneNumber(trimmedPhone)) { ... }

        // --- Connect to Database ---
        const { db } = await connectToDatabase();
        const contactRequestsCollection = db.collection("contactRequests"); // Target the collection

        // --- Prepare Document for Insertion ---
        const newContactRequest = {
            name: trimmedName,
            email: lowerCaseEmail, // Store lowercase email
            phone: trimmedPhone, // Store trimmed phone or null
            receivedAt: new Date(), // Timestamp when the request was received
            status: "new" // Optional: Add a status field (e.g., 'new', 'contacted')
        };

        const result = await contactRequestsCollection.insertOne(newContactRequest);


        if (!result.insertedId) {

            console.error("Database insertion failed for contact request:", newContactRequest);
            throw new Error("Failed to save contact request to the database.");
        }

        console.log(`Saved contact request: ID=${result.insertedId}, Name=${trimmedName}, Email=${lowerCaseEmail}`);


        return NextResponse.json(
            { message: "Thank you for your request! We have received your details and will be in touch soon." },
            { status: 200 } 
        );

    } catch (error) {
        console.error("Contact Request API Error:", error);
        // Avoid leaking detailed error information to the client
        return NextResponse.json(
            { error: "An internal server error occurred. Please try again later." },
            { status: 500 }
        );
    }
}