import { getBookById } from "@/lib/admin/books";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const book = await getBookById(params.id);

  if (!book) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }

  return NextResponse.json(book);
}
