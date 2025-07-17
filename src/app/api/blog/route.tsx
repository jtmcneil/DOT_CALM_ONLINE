import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Fetch all blog posts
export async function GET() {
    try {
        const posts = await prisma.blog.findMany();
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch posts" },
            { status: 500 }
        );
    }
}

// PUT: Update a blog post by id
export async function PUT(req: NextRequest) {
    try {
        const { id, ...data } = await req.json();
        if (!id) {
            return NextResponse.json(
                { error: "Missing post id" },
                { status: 400 }
            );
        }
        const updated = await prisma.blog.update({
            where: { id },
            data,
        });
        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update post" },
            { status: 500 }
        );
    }
}

// DELETE: Delete a blog post by id
export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json();
        if (!id) {
            return NextResponse.json(
                { error: "Missing post id" },
                { status: 400 }
            );
        }
        await prisma.blogPost.delete({
            where: { id },
        });
        return NextResponse.json({ message: "Post deleted" });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete post" },
            { status: 500 }
        );
    }
}
