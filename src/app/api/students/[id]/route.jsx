import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const { id } = await params;
  const student = await prisma.ppStudent.findUnique({
    where: {
      id: +id,
    },
  });
  return NextResponse.json({
    status: 200,
    message: `get user id ${id} successfull`,
    payload: student,
  });
}

export async function DELETE(_, { params }) {
  const { id } = await params;
  const student = await prisma.ppStudent.delete({
    where: {
      id: +id,
    },
  });
  return NextResponse.json({
    status: 200,
    message: `delete user id ${id} successfull`,
  });
}
