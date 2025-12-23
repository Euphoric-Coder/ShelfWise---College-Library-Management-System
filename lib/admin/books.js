import { db } from "../dbConfig";
import { books } from "../schema";

export async function getAllBooks() {
  try {
    const result = await db.select().from(books);

    return {
      success: true,
      books: result,
    };
  } catch (error) {
    console.error("Error fetching books:", error);
    return {
      success: false,
      message: "Failed to retrieve books",
      error: error.message,
    };
  }
}

export async function getBookById(bookId) {
  try {
    const result = await db
      .select()
      .from(books)
      .where(eq(books.id, bookId))
      .limit(1);

    return result[0] || null;
  } catch (error) {
    console.error("Error fetching book by ID:", error);
    return null;
  }
}
