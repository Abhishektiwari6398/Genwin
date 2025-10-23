import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from 'mongodb';

export async function GET(req) {
    try {
        const { db } = await connectToDatabase();
        const categoriesCollection = db.collection("categories");

        const categories = await categoriesCollection.find(
            {},
            { projection: { name: 1 } } 
        ).sort({ name: 1 }).toArray();

        const formattedCategories = categories.map(cat => ({
            id: cat._id.toString(),
            name: cat.name
        }));

        return NextResponse.json(formattedCategories, { status: 200 });

    } catch (error) {
        console.error("API Error (GET categories):", error);
        return NextResponse.json(
            { error: "Failed to fetch categories" },
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        const { name, categoryId } = await req.json();
        const currentDate = new Date();
        if (!name || name.trim() === '' || !categoryId) {
            return NextResponse.json(
                { error: "Subcategory name and category ID are required." },
                { status: 400 }
            );
        }
        if (!ObjectId.isValid(categoryId)) {
             return NextResponse.json(
                { error: "Invalid Category ID format." },
                { status: 400 }
            );
        }

        const { db } = await connectToDatabase();
        const subcategoriesCollection = db.collection("subcategories");

        const parentCategory = await db.collection("categories").findOne({ _id: new ObjectId(categoryId) });
        if (!parentCategory) {
             return NextResponse.json(
                { error: "Parent category not found." },
                { status: 404 }
            );
        }

        const existingSubcategory = await subcategoriesCollection.findOne({
            name: name.trim(),
            categoryId: new ObjectId(categoryId)
        });
        if (existingSubcategory) {
            return NextResponse.json(
                { error: "Subcategory with this name already exists in this category." },
                { status: 409 } 
            );
        }

        const newSubcategory = {
            name: name.trim(),
            categoryId: new ObjectId(categoryId),
            createdAt: currentDate,
            updatedAt: currentDate
        };

        const result = await subcategoriesCollection.insertOne(newSubcategory);

        if (!result.insertedId) {
            throw new Error("Failed to insert new subcategory.");
        }

        return NextResponse.json(
            {
                message: "Subcategory added successfully.",
                subcategoryId: result.insertedId
            },
            { status: 201 }
        );

    } catch (error) {
        console.error("API Error (POST subcategory):", error);
        return NextResponse.json(
            { error: "Failed to add subcategory." },
            { status: 500 }
        );
    }
}

export async function PUT(req) {
    try {
        const { id, name, categoryId } = await req.json();
        const currentDate = new Date();
        if (!id || !name || name.trim() === '' || !categoryId) {
            return NextResponse.json(
                { error: "Subcategory ID, name, and category ID are required." },
                { status: 400 }
            );
        }
        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                { error: "Invalid Subcategory ID format." },
                { status: 400 }
            );
        }
        if (!ObjectId.isValid(categoryId)) {
             return NextResponse.json(
                { error: "Invalid Category ID format." },
                { status: 400 }
            );
        }

        const { db } = await connectToDatabase();
        const subcategoriesCollection = db.collection("subcategories");

        const subcategoryObjectId = new ObjectId(id);
        const parentCategoryObjectId = new ObjectId(categoryId);

        const parentCategory = await db.collection("categories").findOne({ _id: parentCategoryObjectId });
        if (!parentCategory) {
             return NextResponse.json(
                { error: "Parent category not found." },
                { status: 404 }
            );
        }
        const conflictingSubcategory = await subcategoriesCollection.findOne({
            _id: { $ne: subcategoryObjectId }, 
            name: name.trim(),
            categoryId: parentCategoryObjectId
        });
        if (conflictingSubcategory) {
            return NextResponse.json(
                { error: "Another subcategory with this name already exists in the target category." },
                { status: 409 }
            );
        }


        const result = await subcategoriesCollection.updateOne(
            { _id: subcategoryObjectId },
            {
                $set: {
                    name: name.trim(),
                    categoryId: parentCategoryObjectId,
                    updatedAt: currentDate
                }
            }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json(
                { error: "Subcategory not found." },
                { status: 404 }
            );
        }
        if (result.modifiedCount === 0 && result.matchedCount === 1) {
           return NextResponse.json({ message: "Subcategory details are already up to date." });
        }

        return NextResponse.json({ message: "Subcategory updated successfully." }, { status: 200 });

    } catch (error) {
        console.error("API Error (PUT subcategory):", error);
        return NextResponse.json(
            { error: "Failed to update subcategory." },
            { status: 500 }
        );
    }
}