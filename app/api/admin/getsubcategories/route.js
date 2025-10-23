import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET(req) {
    try {
        const { db } = await connectToDatabase();
        const pipeline = [
            {
                $lookup: {
                    from: "categories",      
                    localField: "categoryId", 
                    foreignField: "_id",   
                    as: "parentCategoryInfo" 
                }
            },
            {
                $unwind: {
                    path: "$parentCategoryInfo",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    _id: 0, 
                    id: "$_id", 
                    subcategory_name: "$name",
                    parent_category: "$parentCategoryInfo.name",
                    cid: "$parentCategoryInfo._id" 
                }
            },
            {
                 $sort: {
                    parent_category: 1,
                    subcategory_name: 1
                 }
            }
        ];
        const subcategories = await db.collection("subcategories").aggregate(pipeline).toArray();
        return NextResponse.json(subcategories, { status: 200 });

    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json(
            { error: "Failed to fetch subcategories" },
            { status: 500 }
        );
    }
}