import prisma from '@/lib/db';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

const validatePassword = (password) => {
    const minLength = 8;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    return password.length >= minLength && specialCharRegex.test(password);
};

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!validatePassword(password)) {
            return NextResponse.json({ message: "Password must be at least 8 characters long and include at least one special character" }).status(400);
        }

        const existingUserByEmail = await prisma.user.findUnique({
            where: { email: email }
        });
        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: "User with this email already exists" }).status(409);
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        });

        const { password: newUserPassword, ...rest } = newUser;

        return NextResponse.json({ user: rest, message: "User Created Successfully" });
    } catch (error) {
        return NextResponse.json({ error: error.message || "An unexpected error occurred" }).status(500);
    }
}


export async function GET( req ) {
    try {
        const body = req.json();
        const { email, password } = body;

        //! find user by email
        const user = await prisma.user.findUnique({
            where: { email: email }
        });

        //! checks if user exists
        if(!user) {
            return NextResponse.json({ message: "Email or Password are invalid"}, { status: 404 })
        }
        
        //! Compares provided password with the stored hashed password
        const isMatch = await compare(password, user.password);
        if(!isMatch) {
            return NextResponse.json({ message: "Email or Password are invalid"}, { status: 401 })
        }
        
        //! Removes password before returning data
        const { password: userPassword, ...rest } = user;

        return NextResponse.json({ user: rest, message: "Sign in successful"})
    } catch (error) {
        return NextResponse.json({ error: error.message || "An unexpected error occurred."})
    }
}