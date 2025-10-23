import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb"; 
import { ObjectId } from 'mongodb'; 

export async function POST(req) {
    const {
        productName,
        price,
        mobile,
        images,
        specifications, 
        properties, 
        description,
        category,
        subCategory 
    } = await req.json();

    if (!productName || !price || !mobile || !images || images.length === 0) {
        return NextResponse.json(
        { error: "Product Name, Price, Mobile, and at least one Image are required." },
        { status: 400 }
        );
    }

    const specificationsObj = specifications.reduce((acc, spec) => {
        if (spec.name && spec.value) acc[spec.name] = spec.value;
        return acc;
    }, {});

    const propertiesObj = properties.reduce((acc, prop) => {
        if (prop.name && prop.value) acc[prop.name] = prop.value;
        return acc;
    }, {});

    const currentDate = new Date();

    const productDocument = {
        productName,
        price: Number(price), 
        mobile,
        images,
        specifications: specificationsObj,
        properties: propertiesObj, 
        description: description || '',
        categoryName: category || null,
        subCategoryName: subCategory || null,
        createdAt: currentDate,
        updatedAt: currentDate,
    };

    try {
        const { db } = await connectToDatabase(); 

        const result = await db.collection("products").insertOne(productDocument);

        if (!result.insertedId) {
             throw new Error("Failed to insert product document.");
        }

        return NextResponse.json({
            message: "Product added successfully.",
            productId: result.insertedId 
        });

    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json(
            { error: "An error occurred while adding the product." },
            { status: 500 }
        );
    }
}