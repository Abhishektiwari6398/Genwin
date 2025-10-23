// app/api/admin/inquiries/route.js (example path)
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb"; // Import the MongoDB connection helper

// IMPORTANT: Add authentication/authorization middleware here in a real app
// to protect this endpoint. Ensure only authorized users can access inquiries.

export async function GET(req) {
  // Check authorization status here before proceeding (e.g., check user role from session/token)

  try {
    // --- Connect to Database ---
    const { db } = await connectToDatabase();

    // --- Fetch Inquiry Documents ---
    const inquiriesCollection = db.collection("inquiries"); // Target the 'inquiries' collection

    // Find all documents in the collection ({})
    // Sort by 'receivedAt' descending (-1) to get the newest inquiries first
    const allInquiries = await inquiriesCollection.find({})
      .sort({ receivedAt: -1 }) // Sort by received date, newest first
      .toArray();

    // --- Return Response ---
    // Return the array of inquiry documents
    return NextResponse.json(allInquiries, { status: 200 });

  } catch (error) {
    // Log the error server-side
    console.error("Fetch Inquiries API Error:", error);

    // Return a generic error response to the client
    return NextResponse.json(
      { error: "Failed to fetch inquiries." },
      { status: 500 }
    );
  }
}