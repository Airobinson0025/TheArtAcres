import prisma from '@/lib/db'
import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'

//! CREATES USER

export async function POST( request ) {
    try {
        const body = await request.json()
        const { name, email, username, password } = body
        
        //!check if email already exists
        const existingUserByEmail = await prisma.user.findUnique({
            where: { email: email }
        });
        if(existingUserByEmail) {
            return NextResponse.json({ user: null, message: 'User with this email already exists'}, { status: 409 })
        }
        //!check if username already exists
        const existingUserByUsername = await prisma.user.findUnique({
            where: { username: username }
        });
        if(existingUserByUsername) {
            return NextResponse.json({ user: null, message: 'Username already exists'}, { status: 409 })
        }

        const hashedPassword = await hash(password, 25)

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                username,
                password: hashedPassword,

            }
        });

        const { password: newUserPassword, ...rest } = newUser

        return NextResponse.json({ user: rest, message: 'User created successfully'})



    } catch (error) {
        
    }
}



