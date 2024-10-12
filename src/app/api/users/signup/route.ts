import { connect } from "@/dbConfig/db";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

import { NextResponse, NextRequest } from "next/server";

connect()

export async function POST(req: NextRequest) {
    try {
        const { username, email, password } = await req.json();

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
