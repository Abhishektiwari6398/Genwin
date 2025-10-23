import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

function escapeRegex(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const searchQuery = searchParams.get("query") || ""; 

    if (!searchQuery.trim()) {
       return NextResponse.json(
           { error: "Search query is required." },
           { status: 400 }
       );
    }

    const escapedQuery = escapeRegex(searchQuery.trim());

    const { db } = await connectToDatabase();
    const productsCollection = db.collection("products");

    const regex = new RegExp(escapedQuery, 'i'); 

    const filter = {
      $or: [
        { productName: { $regex: regex } },
        { description: { $regex: regex } },
      ]
    };

    const products = await productsCollection.find(filter).toArray();

    return NextResponse.json(products, { status: 200 });

  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products based on search query." },
      { status: 500 }
    );
  }
}