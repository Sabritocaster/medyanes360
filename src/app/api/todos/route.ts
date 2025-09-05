import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/todos
export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}

// POST /api/todos
export async function POST(req: Request) {
  const body = await req.json();
  const { title, description } = body;

  const newTodo = await prisma.todo.create({
    data: { title, description },
  });

  return NextResponse.json(newTodo, { status: 201 });
}