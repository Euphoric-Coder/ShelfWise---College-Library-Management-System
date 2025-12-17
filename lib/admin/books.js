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
