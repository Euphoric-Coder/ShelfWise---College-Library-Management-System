// app/api/admin/books/route.js
import { NextResponse } from "next/server";
import { getAllBooks } from "@/lib/admin/books";

export async function GET() {
  const { books } = await getAllBooks();
  return NextResponse.json(books);
}
