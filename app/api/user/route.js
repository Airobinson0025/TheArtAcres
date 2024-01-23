import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/db'; 

const JWT_SECRET = process.env.JWT_SECRET; 


function validatePassword(password) {
    const minLength = 8;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return password.length >= minLength && specialCharRegex.test(password);
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!validatePassword(password)) {
            return new NextResponse(JSON.stringify({ message: "Password must be at least 8 characters long and include at least one special character" }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        const existingUserByEmail = await prisma.user.findUnique({
            where: { email: email }
        });
        if (existingUserByEmail) {
            return new NextResponse(JSON.stringify({ user: null, message: "User with this email already exists" }), {
                status: 409,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        });

        const { password: newUserPassword, ...userWithoutPassword } = newUser;

        const token = jwt.sign(
            { userId: userWithoutPassword.id, email: userWithoutPassword.email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        return new NextResponse(JSON.stringify({ user: userWithoutPassword, token, message: "User Created Successfully" }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: error.message || "An unexpected error occurred" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

