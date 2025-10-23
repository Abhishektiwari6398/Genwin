import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from 'mongodb'; 

export async function POST(req) {
    try {
        const { id, name } = await req.json();

        if (!name || name.trim() === '') { 
            return NextResponse.json(
                { error: "Category name is required." },
                { status: 400 }
            );
        }

       
        const { db } = await connectToDatabase();
        const categoriesCollection = db.collection("categories");
        const currentDate = new Date();

        if (id) {
            if (!ObjectId.isValid(id)) {
                return NextResponse.json(
                    { error: "Invalid Category ID format." },
                    { status: 400 }
                );
            }

            const objectId = new ObjectId(id); 
            const result = await categoriesCollection.updateOne(
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
                    { error: "Category not found." },
                    { status: 404 } 
                );
            }
             if (result.modifiedCount === 0 && result.matchedCount === 1) {
                 return NextResponse.json({ message: "Category details are already up to date." });
            }

            return NextResponse.json({ message: "Category updated successfully." });

        } else {
            const existingCategory = await categoriesCollection.findOne({ name: name.trim() });
            if (existingCategory) {
                return NextResponse.json(
                    { error: "Category with this name already exists." },
                    { status: 409 } 
                );
            }

            const newCategory = {
                name: name.trim(),
                createdAt: currentDate,
                updatedAt: currentDate
            };

            const result = await categoriesCollection.insertOne(newCategory);

            if (!result.insertedId) {
                throw new Error("Failed to insert new category."); 
            }

            return NextResponse.json(
                {
                    message: "Category added successfully.",
                    categoryId: result.insertedId 
                },
                { status: 201 } 
            );
        }
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Failed to process category request." },
            { status: 500 }
        );
    }
}