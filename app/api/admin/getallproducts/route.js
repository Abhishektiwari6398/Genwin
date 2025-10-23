import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb"; 

export async function GET(req) {
  try {
    const { db } = await connectToDatabase();
    const productsCollection = db.collection("products");
    const products = await productsCollection.find({})
      .sort({ _id: -1 })
      .toArray();
    return NextResponse.json(products, { status: 200 });

  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}