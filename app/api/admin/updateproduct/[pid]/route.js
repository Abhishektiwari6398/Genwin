import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function PUT(request, { params }) {
  const { pid } = await params;

  if (!pid || !ObjectId.isValid(pid)) {
    return NextResponse.json(
      { error: "Invalid Product ID format." },
      { status: 400 }
    );
  }

  try {
    const body = await request.json();
    const {
      productName,
      price,
      mobile,
      description,
      images,
      specifications,
      properties,
      category,
      subCategory, 
    } = body;

    if (!productName || price === undefined || !mobile || !category || !subCategory) {
      return NextResponse.json(
        { error: 'Product Name, Price, Mobile, Category ID, and Subcategory ID are required' },
        { status: 400 }
      );
    }

    if (!ObjectId.isValid(category)) {
        return NextResponse.json({ error: 'Invalid Category ID format.' }, { status: 400 });
    }
   

    const { db } = await connectToDatabase();
    const productsCollection = db.collection("products");
    const currentDate = new Date();

    const productObjectId = new ObjectId(pid);
    const categoryObjectId = new ObjectId(category);

    const specificationsObj = specifications?.reduce((acc, spec) => {
        if (spec.name && spec.value) acc[spec.name] = spec.value;
        return acc;
    }, {}) || {}; 

    const propertiesObj = properties?.reduce((acc, prop) => {
        if (prop.name && prop.value) acc[prop.name] = prop.value;
        return acc;
    }, {}) || {}; 

    const updateDocument = {
      $set: {
        productName: productName.trim(),
        price: Number(price),
        mobile: mobile, 
        description: description || '',
        images: images || [], 
        specifications: specificationsObj,
        properties: propertiesObj,
        categoryId: categoryObjectId,
        subCategoryName: subCategory , 
        updatedAt: currentDate         
      }
    };

    const result = await productsCollection.updateOne(
      { _id: productObjectId },
      updateDocument            
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: `Product with id ${pid} not found.` },
        { status: 404 } 
      );
    }


    return NextResponse.json(
      { message: 'Product updated successfully.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API Error (Update Product):', error);
    return NextResponse.json(
      { error: 'An internal server error occurred while updating the product.' },
      { status: 500 }
    );
  }
}