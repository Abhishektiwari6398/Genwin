import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }
    const { db } = await connectToDatabase();
    const usersCollection = db.collection("users");
    const user = await usersCollection.findOne({ email: email });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials." },
        { status: 401 }
      );
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return NextResponse.json(
        { error: "Invalid credentials." },
        { status: 401 }
      );
    }

    const payload = {
      id: user._id.toString(),
      email: user.email,
    };

    if (!process.env.JWT_SECRET) {
        console.error("FATAL ERROR: JWT_SECRET environment variable is not set.");
        return NextResponse.json(
            { error: "Server configuration error." },
            { status: 500 }
        );
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const cookieName = "token";
    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',  
        maxAge: 60 * 60, 
        sameSite: 'lax' 
    };

    const response = NextResponse.json({
        message: "Login successful",
        user: { role: user.role || 'user' }
    }, { status: 200 });
    response.cookies.set(cookieName, token, cookieOptions);

    return response;

  } catch (error) {
    console.error("Login API Error:", error);
    return NextResponse.json(
      { error: "An internal server error occurred during login." },
      { status: 500 }
    );
  }
}