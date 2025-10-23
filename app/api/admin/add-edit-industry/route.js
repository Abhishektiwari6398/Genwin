import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from 'mongodb';
export async function POST(req) {
    try {
        const { id, name } = await req.json();

        
        if (!name || name.trim() === '') {
            return NextResponse.json(
                { error: "Industry name is required." },
                { status: 400 }
            );
        }

        const { db } = await connectToDatabase();
        const industriesCollection = db.collection("industries");
        const currentDate = new Date();

        if (id) {
            if (!ObjectId.isValid(id)) {
                return NextResponse.json(
                    { error: "Invalid Industry ID format." },
                    { status: 400 }
                );
            }

            const objectId = new ObjectId(id);
            const result = await industriesCollection.updateOne(
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
                    { error: "Industry not found." },
                    { status: 404 } 
                );
            }
            if (result.modifiedCount === 0 && result.matchedCount === 1) {
                 return NextResponse.json({ message: "Industry details are already up to date." });
            }

            return NextResponse.json({ message: "Industry updated successfully." });

        } else {
            const existingIndustry = await industriesCollection.findOne({ name: name.trim() });
            if (existingIndustry) {
                return NextResponse.json(
                    { error: "Industry with this name already exists." },
                    { status: 409 }
                );
            }

            const newIndustry = {
                name: name.trim(),
                createdAt: currentDate,
                updatedAt: currentDate
            };
            const result = await industriesCollection.insertOne(newIndustry);
            if (!result.insertedId) {
                throw new Error("Failed to insert new industry."); 
            }

            return NextResponse.json(
                {
                    message: "Industry added successfully.",
                    industryId: result.insertedId
                },
                { status: 201 }
            );
        }
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Failed to process industry request." },
            { status: 500 }
        );
    }
}