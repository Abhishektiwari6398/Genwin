import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from 'mongodb'; 

export async function GET(req, { params }) {
    const { pid } = params;

    if (!pid) {
        return NextResponse.json(
            { error: "Product ID is missing in the URL path." },
            { status: 400 }
        );
    }

    if (!ObjectId.isValid(pid)) {
        return NextResponse.json(
            { error: "Invalid Product ID format." },
            { status: 400 }
        );
    }

    try {
        const { db } = await connectToDatabase();

        const productsCollection = db.collection("products");
        const productObjectId = new ObjectId(pid);
        const product = await productsCollection.findOne({ _id: productObjectId });
        if (!product) {
            return NextResponse.json(
                { error: `Product with id ${pid} not found` },
                { status: 404 }
            );
        }
        return NextResponse.json(product, { status: 200 });

    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json(
            { error: "Failed to fetch product" },
            { status: 500 }
        );
    }
}