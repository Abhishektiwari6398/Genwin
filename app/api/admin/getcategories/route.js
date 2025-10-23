import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET(req) {
    try {
        const { db } = await connectToDatabase(); 
        const pipeline = [
            {
                $lookup: {
                    from: "subcategories",        
                    localField: "_id",             
                    foreignField: "categoryId",                                
                    as: "subDocs"                                                     
                }
            },
            {
                $project: {
                    _id: 0,                
                    id: "$_id",                
                    name: "$name",              
                    subcategories: {              
                        $map: {                    
                           input: "$subDocs",
                           as: "sub",            
                           in: "$$sub.name"        
                        }
                    }
                }
            },
            {
                $sort: { name: 1 }
            }
        ];
        
        const formattedData = await db.collection("categories").aggregate(pipeline).toArray();

        return NextResponse.json(formattedData, { status: 200 });

    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json(
            { error: "Failed to fetch categories and subcategories." },
            { status: 500 }
        );
    }
}