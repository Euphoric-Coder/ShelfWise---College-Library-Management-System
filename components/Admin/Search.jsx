import React, { useState } from "react";
import { User, BookOpen, Users, Book, Search } from "lucide-react";
import { usePathname } from "next/navigation";

const SearchResults = ({ query, results, onClearSearch }) => {
  const userResults = results.filter((result) => result.type === "user");
  const bookResults = results.filter((result) => result.type === "book");

  const pathname = usePathname();

  // if (pathname === "/admin/all-users") {
  //   setUsers(userResults);
  // }

  const groupBooksByAuthor = (books) => {
    const grouped = {};
    books.forEach((book) => {
      const author = book.author || "Unknown Author";
      if (!grouped[author]) {
        grouped[author] = [];
      }
      grouped[author].push(book);
    });
    return grouped;
  };

  const groupBooksByGenre = (books) => {
    const grouped = {};
    books.forEach((book) => {
      const genres = book.genre?.split(",").map((g) => g.trim()) || [
        "Unknown Genre",
      ];
      genres.forEach((genre) => {
        if (!grouped[genre]) {
          grouped[genre] = [];
        }
        if (!grouped[genre].find((b) => b.id === book.id)) {
          grouped[genre].push(book);
        }
      });
    });
    return grouped;
  };

  const booksByAuthor = groupBooksByAuthor(bookResults);
  const booksByGenre = groupBooksByGenre(bookResults);

  if (results.length === 0) {
    return (
      <div className="search-results-container">
        <div className="search-results-header">
          <h2 className="text-xl font-semibold text-dark-400">
            Search Results for "{query}"
          </h2>
          <button
            onClick={onClearSearch}
            className="text-primary-admin hover:text-primary-admin/80 font-medium transition-colors"
          >
            Clear Search
          </button>
        </div>

        <div className="search-no-results">
          <div className="search-no-results-icon">
            <div className="search-no-results-icon-bg">
              <Search className="size-8 text-light-500" />
            </div>
          </div>
          <h3 className="search-no-results-title">No results found</h3>
          <p className="search-no-results-description">
            Try searching for users by name or email, or books by title, author,
            or genre.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="search-results-container">
      <div className="search-results-header">
        <div className="flex items-center gap-3">
          <div className="search-results-icon">
            <Search className="size-5 text-primary-admin" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-dark-400">
              Search Results for "{query}"
            </h2>
            <p className="text-sm text-light-500 mt-1">
              Found {results.length} result{results.length !== 1 ? "s" : ""}{" "}
              across users and books
            </p>
          </div>
        </div>
        <button onClick={onClearSearch} className="search-clear-btn">
          Clear Search
        </button>
      </div>
      <div className="search-results-grid">
        {/* Users Section */}
        {userResults.length > 0 && (
          <div className="search-section">
            <div className="search-section-header">
              <div className="search-section-header-content">
                <div className="search-section-icon">
                  <Users className="size-4 text-primary-admin" />
                </div>
                <h3 className="search-section-title">Users</h3>
                <div className="search-section-count">{userResults.length}</div>
              </div>
            </div>
            <div className="search-users-grid">
              {userResults.map((user) => (
                <div key={user.id} className="search-user-card">
                  <div className={`search-user-avatar ${user.bgColor}`}>
                    {user.initials}
                  </div>
                  <div className="search-user-info">
                    <h4 className="search-user-name">{user.name}</h4>
                    <p className="search-user-email">{user.email}</p>
                  </div>
                  <div className="search-user-badge">User</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Books Section */}
        {bookResults.length > 0 && (
          <div className="search-section">
            <div className="search-section-header">
              <div className="search-section-header-content">
                <div className="search-section-icon">
                  <BookOpen className="size-4 text-primary-admin" />
                </div>
                <h3 className="search-section-title">All Books</h3>
                <div className="search-section-count">{bookResults.length}</div>
              </div>
            </div>
            <div className="search-books-grid">
              {bookResults.map((book) => (
                <div key={book.id} className="search-book-card">
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="search-book-cover"
                  />
                  <div className="search-book-info">
                    <h4 className="search-book-title">{book.title}</h4>
                    <p className="search-book-author">By {book.author}</p>
                    <div className="search-book-genres">
                      {book.genre?.split(",").map((genre, index) => (
                        <span key={index} className="search-book-genre-tag">
                          {genre.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Books by Author Section */}
        {Object.keys(booksByAuthor).length > 0 && (
          <div className="search-section">
            <div className="search-section-header">
              <div className="search-section-header-content">
                <div className="search-section-icon">
                  <User className="size-4 text-primary-admin" />
                </div>
                <h3 className="search-section-title">Books by Author</h3>
              </div>
            </div>
            <div className="search-section-content">
              {Object.entries(booksByAuthor).map(([author, books]) => (
                <div key={author} className="search-author-group">
                  <div className="search-author-header">
                    <h4 className="search-author-name">{author}</h4>
                    <div className="search-author-count">
                      {books.length} book{books.length !== 1 ? "s" : ""}
                    </div>
                  </div>
                  <div className="search-author-books">
                    {books.map((book) => (
                      <div key={book.id} className="search-book-card">
                        <img
                          src={book.coverUrl}
                          alt={book.title}
                          className="search-book-cover-small"
                        />
                        <div className="search-book-info-small">
                          <h5 className="search-book-title-small">
                            {book.title}
                          </h5>
                          <div className="search-book-genres-small">
                            {book.genre
                              ?.split(",")
                              .slice(0, 2)
                              .map((genre, index) => (
                                <span
                                  key={index}
                                  className="search-book-genre-tag-small"
                                >
                                  {genre.trim()}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Books by Genre Section */}
        {Object.keys(booksByGenre).length > 0 && (
          <div className="search-section">
            <div className="search-section-header">
              <div className="search-section-header-content">
                <div className="search-section-icon">
                  <Book className="size-4 text-primary-admin" />
                </div>
                <h3 className="search-section-title">Books by Genre</h3>
              </div>
            </div>
            <div className="search-section-content">
              {Object.entries(booksByGenre).map(([genre, books]) => (
                <div key={genre} className="search-genre-group">
                  <div className="search-genre-header">
                    <h4 className="search-genre-name">{genre}</h4>
                    <div className="search-genre-count">
                      {books.length} book{books.length !== 1 ? "s" : ""}
                    </div>
                  </div>
                  <div className="search-genre-books">
                    {books.map((book) => (
                      <div key={book.id} className="search-book-card-small">
                        <img
                          src={book.coverUrl}
                          alt={book.title}
                          className="search-book-cover-small"
                        />
                        <div className="search-book-info-small">
                          <h5 className="search-book-title-small">
                            {book.title}
                          </h5>
                          <p className="search-book-author-small">
                            By {book.author}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
