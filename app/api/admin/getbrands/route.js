import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb"; 

export async function GET(req) {
  try {
    const { db } = await connectToDatabase();
    const brandsCollection = db.collection("brands");
    const brands = await brandsCollection.find({})
      .sort({ name: 1 })
      .toArray();
    return NextResponse.json(brands, { status: 200 });

  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch Brands" },
      { status: 500 }
    );
  }
}