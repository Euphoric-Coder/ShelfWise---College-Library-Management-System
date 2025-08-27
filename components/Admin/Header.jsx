"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = ({ onSearch, searchQuery }) => {
  const [query, setQuery] = useState(searchQuery);
  const [isSearching, setIsSearching] = useState(false);
  const pathname = usePathname();

  const users = [
    {
      id: "1",
      name: "Darrell Steward",
      email: "darrellsteward@gmail.com",
      dateJoined: "Dec 19 2023",
      role: "User",
      booksBorrowed: 10,
      universityId: "90324423789",
      initials: "DS",
      bgColor: "bg-gray-600",
    },
    {
      id: "2",
      name: "Marc Atenson",
      email: "marcinee@mial.com",
      dateJoined: "Dec 19 2023",
      role: "Admin",
      booksBorrowed: 32,
      universityId: "90324423789",
      initials: "MA",
      bgColor: "bg-green-500",
    },
    {
      id: "3",
      name: "Susan Drake",
      email: "contact@susandrake.io",
      dateJoined: "Dec 19 2023",
      role: "User",
      booksBorrowed: 13,
      universityId: "90324423789",
      initials: "SD",
      bgColor: "bg-blue-400",
    },
  ];

  // Mock data for search
  const mockUsers = [
    {
      id: "1",
      name: "Darrell Steward",
      email: "darrellsteward@gmail.com",
      initials: "DS",
      bgColor: "bg-gray-600",
    },
    {
      id: "2",
      name: "Marc Atenson",
      email: "marcinee@mial.com",
      initials: "MA",
      bgColor: "bg-green-500",
    },
    {
      id: "3",
      name: "Susan Drake",
      email: "contact@susandrake.io",
      initials: "SD",
      bgColor: "bg-blue-400",
    },
    {
      id: "4",
      name: "Adrian Hajdin",
      email: "adrian@jsmastery.pro",
      initials: "AH",
      bgColor: "bg-purple-500",
    },
  ];

  const mockBooks = [
    {
      id: "1",
      title: "The Great Reclamation: A Novel",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      coverUrl:
        "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "2",
      title: "Inside Evil: Inside Evil Series, Book 1",
      author: "Rachel Heng",
      genre: "Strategic, Fantasy",
      coverUrl:
        "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "3",
      title: "Jayne Castle - People in Glass Houses",
      author: "Jayne Ann Krentz",
      genre: "Science Fiction, Romance",
      coverUrl:
        "https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "4",
      title: "The Midnight Library",
      author: "Matt Haig",
      genre: "Fiction, Philosophy",
      coverUrl:
        "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const performSearch = (searchQuery) => {
    if (!searchQuery.trim()) {
      onSearch("", []);
      return;
    }

    setIsSearching(true);

    // Simulate API delay
    setTimeout(() => {
      const results = [];
      const lowerQuery = searchQuery.toLowerCase();

      // When the route is "/admin"
      if (pathname === "/admin") {
        // Search users
        mockUsers.forEach((user) => {
          if (
            user.name.toLowerCase().includes(lowerQuery) ||
            user.email.toLowerCase().includes(lowerQuery)
          ) {
            results.push({
              type: "user",
              id: user.id,
              name: user.name,
              email: user.email,
              initials: user.initials,
              bgColor: user.bgColor,
            });
          }
        });

        // Search books
        mockBooks.forEach((book) => {
          if (
            book.title.toLowerCase().includes(lowerQuery) ||
            book.author.toLowerCase().includes(lowerQuery) ||
            book.genre.toLowerCase().includes(lowerQuery)
          ) {
            results.push({
              type: "book",
              id: book.id,
              title: book.title,
              author: book.author,
              genre: book.genre,
              coverUrl: book.coverUrl,
            });
          }
        });
      }
      if (pathname.includes("/admin/all-users")) {
        users.forEach((user) => {
          if (
            user.name.toLowerCase().includes(lowerQuery) ||
            user.email.toLowerCase().includes(lowerQuery)
          ) {
            results.push(user);
          }
        });
      }

      onSearch(searchQuery, results);
      setIsSearching(false);
    }, 100);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    performSearch(value);
  };

  const handleClearSearch = () => {
    setQuery("");
    onSearch("", []);
  };

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  return (
    <div className="admin-header">
      <div className="lg:ml-0 ml-16">
        <h1 className="text-2xl font-semibold text-dark-400 mb-2">
          Welcome, Adrian
        </h1>
        <p className="text-light-500 hidden sm:block">
          Monitor all of your projects and tasks here
        </p>
      </div>

      <div className="admin-search">
        <Search className="size-5 text-light-500" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search users, books by title, author, or genre..."
          className="admin-search_input"
        />
        {query && (
          <button
            onClick={handleClearSearch}
            className="text-light-500 hover:text-dark-400 transition-colors"
          >
            ×
          </button>
        )}
        {isSearching && (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-admin"></div>
        )}
      </div>
    </div>
  );
};

export default Header;
