import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from 'mongodb'; 

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const cid = searchParams.get('cid'); 

  if (!cid) {
      return NextResponse.json(
          { error: "Category ID (cid) is missing in query parameters." },
          { status: 400 }
      );
  }

  if (!ObjectId.isValid(cid)) {
      return NextResponse.json(
          { error: "Invalid Category ID format." },
          { status: 400 }
      );
  }

  try {
    const { db } = await connectToDatabase();
    const subcategoriesCollection = db.collection("subcategories");
    const categoryObjectId = new ObjectId(cid);
    const subcategories = await subcategoriesCollection.find(
        { categoryId: categoryObjectId }
    ).sort({ name: 1 }).toArray();

    if (subcategories.length === 0) {
        return NextResponse.json(
            [], 
            { status: 200 } 
        );
    }

    return NextResponse.json(subcategories, { status: 200 });

  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch subcategories for the specified category." },
      { status: 500 }
    );
  }
}