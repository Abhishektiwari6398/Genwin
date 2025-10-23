import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb"; 

export async function GET(req) {
  try {
    const { db } = await connectToDatabase();
    const industriesCollection = db.collection("industries");
    const industries = await industriesCollection.find({}).sort({ name: 1 }).toArray();
    return NextResponse.json(industries, { status: 200 });

  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch Industries" },
      { status: 500 }
    );
  }
}