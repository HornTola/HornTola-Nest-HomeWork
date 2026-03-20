import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const studentList = await prisma.ppStudent.findMany();
  return NextResponse.json({
    status: 200,
    message: "get all student successfully",
    payload: studentList,
  });
}

export async function POST(request) {
  const { name, gender, email } = await request.json();
  const student = await prisma.ppStudent.create({
    data: { name, gender, email },
  });
  return NextResponse.json({
    status: 201,
    message: "Add new student successfully",
    payload: student,
    createAt: new Date(),
  });
}