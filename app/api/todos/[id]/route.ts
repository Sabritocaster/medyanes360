import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// PUT /api/todos/[id]
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();
  const { title, description, status } = body;

  const updated = await prisma.todo.update({
    where: { id },
    data: { title, description, status }, // ❌ id veya createdAt gönderme
  });

  return Response.json(updated);
}

// DELETE /api/todos/[id]
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await prisma.todo.delete({ where: { id } });

  // 200 + JSON: Next & fetch tarafı daha huzurlu çalışır
  return Response.json({ ok: true, id }, { status: 200 });
}