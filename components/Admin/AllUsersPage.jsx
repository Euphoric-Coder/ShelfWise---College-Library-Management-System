"use client";

import React, { useState } from "react";
import { ExternalLink, Trash2, ChevronDown, Check } from "lucide-react";

const AllUsersPage = () => {
  const [users] = useState([
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
    {
      id: "4",
      name: "Darrell Steward",
      email: "darrellsteward@gmail.com",
      dateJoined: "Dec 19 2023",
      role: "Admin",
      booksBorrowed: 10,
      universityId: "90324423789",
      initials: "DS",
      bgColor: "bg-gray-600",
    },
    {
      id: "5",
      name: "Marc Atenson",
      email: "marcinee@mial.com",
      dateJoined: "Dec 19 2023",
      role: "User",
      booksBorrowed: 32,
      universityId: "90324423789",
      initials: "MA",
      bgColor: "bg-green-500",
    },
    {
      id: "6",
      name: "Susan Drake",
      email: "contact@susandrake.io",
      dateJoined: "Dec 19 2023",
      role: "User",
      booksBorrowed: 13,
      universityId: "90324423789",
      initials: "SD",
      bgColor: "bg-blue-400",
    },
  ]);

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (userId) => {
    setDropdownOpen(dropdownOpen === userId ? null : userId);
  };

  const handleRoleChange = (userId, newRole) => {
    // Handle role change logic here
    setDropdownOpen(null);
  };

  return (
    <div className="all-users-container">
      <div className="all-users-header">
        <h1 className="text-2xl font-semibold text-dark-400">All Users</h1>
        <div className="flex items-center gap-2 text-sm text-light-500">
          <span>A-Z</span>
          <ChevronDown className="size-4" />
        </div>
      </div>

      <div className="all-users-table">
        <div className="all-users-table-header">
          <div className="all-users-table-row">
            <div className="all-users-table-cell font-medium text-light-500">
              Name
            </div>
            <div className="all-users-table-cell font-medium text-light-500">
              Date Joined
            </div>
            <div className="all-users-table-cell font-medium text-light-500">
              Role
            </div>
            <div className="all-users-table-cell font-medium text-light-500">
              Books Borrowed
            </div>
            <div className="all-users-table-cell font-medium text-light-500">
              University ID No
            </div>
            <div className="all-users-table-cell font-medium text-light-500">
              University ID Card
            </div>
            <div className="all-users-table-cell font-medium text-light-500">
              Action
            </div>
          </div>
        </div>

        <div className="all-users-table-body">
          {users.map((user) => (
            <div key={user.id} className="all-users-table-row">
              <div className="all-users-table-cell">
                <div className="flex items-center gap-3">
                  <div
                    className={`size-12 rounded-full flex items-center justify-center text-white font-semibold text-sm ${user.bgColor}`}
                  >
                    {user.initials}
                  </div>
                  <div>
                    <p className="font-medium text-dark-400 text-base">
                      {user.name}
                    </p>
                    <p className="text-sm text-light-500">{user.email}</p>
                  </div>
                </div>
              </div>

              <div className="all-users-table-cell">
                <span className="text-dark-400 text-base">
                  {user.dateJoined}
                </span>
              </div>

              <div className="all-users-table-cell">
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(user.id)}
                    className={`all-users-role-badge ${
                      user.role === "Admin" ? "role-admin" : "role-user"
                    }`}
                  >
                    {user.role}
                    <ChevronDown className="size-3 ml-1" />
                  </button>

                  {dropdownOpen === user.id && (
                    <div className="all-users-role-dropdown">
                      <button
                        onClick={() => handleRoleChange(user.id, "User")}
                        className="all-users-role-dropdown-item"
                      >
                        <span className="text-pink-600 font-medium">User</span>
                        {user.role === "User" && (
                          <Check className="size-4 text-pink-600" />
                        )}
                      </button>
                      <button
                        onClick={() => handleRoleChange(user.id, "Admin")}
                        className="all-users-role-dropdown-item"
                      >
                        <span className="text-green-600 font-medium">
                          Admin
                        </span>
                        {user.role === "Admin" && (
                          <Check className="size-4 text-green-600" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="all-users-table-cell">
                <span className="text-dark-400 text-base">
                  {user.booksBorrowed}
                </span>
              </div>

              <div className="all-users-table-cell">
                <span className="text-dark-400 text-base">
                  {user.universityId}
                </span>
              </div>

              <div className="all-users-table-cell">
                <button className="all-users-view-id-btn">
                  <span>View ID Card</span>
                  <ExternalLink className="size-4" />
                </button>
              </div>

              <div className="all-users-table-cell">
                <button className="all-users-action-btn">
                  <Trash2 className="size-4 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUsersPage;
