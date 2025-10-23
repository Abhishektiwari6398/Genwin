
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from 'mongodb';
export async function POST(req) {
    try {
        const { id, name } = await req.json();

        if (!name || name.trim() === '') { 
            return NextResponse.json(
                { error: "Brand name is required." },
                { status: 400 }
            );
        }

        const { db } = await connectToDatabase();
        const brandsCollection = db.collection("brands"); 
        const currentDate = new Date();

        if (id) {
            
            if (!ObjectId.isValid(id)) {
                return NextResponse.json(
                    { error: "Invalid Brand ID format." },
                    { status: 400 }
                );
            }

            const objectId = new ObjectId(id); 
            const result = await brandsCollection.updateOne(
                { _id: objectId }, 
                {
                    $set: { 
                        name: name.trim(), 
                        updatedAt: currentDate 
                    }
                }
            );

           
            if (result.matchedCount === 0) {
                return NextResponse.json(
                    { error: "Brand not found." },
                    { status: 404 } 
                );
            }
            if (result.modifiedCount === 0 && result.matchedCount === 1) {
                
                return NextResponse.json({ message: "Brand details are already up to date." });
            }

            return NextResponse.json({ message: "Brand updated successfully." });

        } else {
          
            const existingBrand = await brandsCollection.findOne({ name: name.trim() });
            if (existingBrand) {
                return NextResponse.json(
                    { error: "Brand with this name already exists." },
                    { status: 409 }
                );
            }

            const newBrand = {
                name: name.trim(),
                createdAt: currentDate,
                updatedAt: currentDate
            };

    
            const result = await brandsCollection.insertOne(newBrand);

        
            if (!result.insertedId) {
                throw new Error("Failed to insert new brand."); 
            }

            return NextResponse.json(
                {
                    message: "Brand added successfully.",
                    brandId: result.insertedId 
                },
                { status: 201 } 
            );
        }
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Failed to process brand request." },
            { status: 500 }
        );
    }
}