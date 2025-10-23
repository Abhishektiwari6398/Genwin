import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb"; 
export async function GET(req) {
  try {
    const { db } = await connectToDatabase();
    const productsCollection = db.collection("products");
    const categoriesCollection = db.collection("categories");
    const industriesCollection = db.collection("industries");
    const brandsCollection = db.collection("brands");
    const pagesCollection = db.collection("pages"); 
    const sectionsCollection = db.collection("sections"); 
    const countPromises = [
      productsCollection.countDocuments({}),
      categoriesCollection.countDocuments({}),
      industriesCollection.countDocuments({}),
      brandsCollection.countDocuments({}),
      pagesCollection.countDocuments({}),
      sectionsCollection.countDocuments({})
    ];

    const [
      productCount,
      categoryCount,
      industryCount,
      brandCount,
      pageCount,
      sectionCount
    ] = await Promise.all(countPromises);
    const stats = {
      products: productCount,
      categories: categoryCount,
      industries: industryCount,
      brands: brandCount,
      pages: pageCount,
      sections: sectionCount,
    };

    return NextResponse.json(stats, { status: 200 });

  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}