import React from "react";
import BookCard from "@/components/BookCard";

const BookList = ({ title, books, containerClassName }) => {
  if (books.length < 2) return;

  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

      <ul className="book-list">
        {books.map((book) => (
          <BookCard
            key={book.title}
            id={book.id}
            title={book.title}
            genre={book.genre}
            coverColor={book.coverColor}
            coverUrl={book.coverUrl}
          />
        ))}
      </ul>
    </section>
  );
};
export default BookList;
