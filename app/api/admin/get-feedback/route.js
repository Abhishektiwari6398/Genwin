// app/api/admin/feedback/route.js (example path)
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb"; 
// IMPORTANT: Add authentication/authorization middleware here in a real app
// to protect this endpoint.

export async function GET(req) {
  // Check authorization status here before proceeding

  try {
    // --- Connect to Database ---
    const { db } = await connectToDatabase();

    // --- Fetch Feedback Documents ---
    const feedbackCollection = db.collection("feedback");

    // Find all documents in the collection ({})
    // Sort by 'submittedAt' descending (-1) to get newest feedback first
    const allFeedback = await feedbackCollection.find({})
      .sort({ submittedAt: -1 }) // Sort by submission date, newest first
      .toArray();

    // --- Return Response ---
    // Return the array of feedback documents
    return NextResponse.json(allFeedback, { status: 200 });

  } catch (error) {
    // Log the error server-side
    console.error("Fetch Feedback API Error:", error);

    // Return a generic error response to the client
    return NextResponse.json(
      { error: "Failed to fetch feedback." },
      { status: 500 }
    );
  }
}