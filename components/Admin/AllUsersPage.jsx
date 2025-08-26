"use client";

import React, { useState } from "react";
import { ExternalLink, Trash2, ChevronDown, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AllUsersPage = () => {
  const [users, setUsers] = useState([
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
      role: "User",
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
      role: "Admin",
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

  const handleRoleChange = (userId, newRole) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
    );
  };

  return (
    <div className="all-users-container">
      <div className="all-users-header">
        <h1 className="text-2xl font-semibold text-dark-400">All Users</h1>
        <div className="flex items-center gap-2 text-sm text-light-500">
          <span>A-Z</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      <div className="all-users-table mt-6">
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
              {/* Name */}
              <div className="all-users-table-cell">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm ${user.bgColor}`}
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

              {/* Date */}
              <div className="all-users-table-cell">
                <span className="text-dark-400 text-base">
                  {user.dateJoined}
                </span>
              </div>

              {/* Role with DropdownMenu */}
              <div className="all-users-table-cell">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="">
                    <button
                      className={`all-users-role-badge focus:outline-none focus:ring-0 focus-visible:ring-0 ${
                        user.role === "Admin"
                          ? "bg-green-100 text-green-700 border-green-700"
                          : "bg-pink-100 text-pink-700 border-pink-700"
                      }`}
                    >
                      {user.role}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-[120px]">
                    <DropdownMenuItem
                      onClick={() => handleRoleChange(user.id, "User")}
                      className="flex items-center justify-between"
                    >
                      <span className="text-pink-600 font-medium">User</span>
                      {user.role === "User" && (
                        <Check className="w-4 h-4 text-pink-600" />
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleRoleChange(user.id, "Admin")}
                      className="flex items-center justify-between"
                    >
                      <span className="text-green-600 font-medium">Admin</span>
                      {user.role === "Admin" && (
                        <Check className="w-4 h-4 text-green-600" />
                      )}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Books Borrowed */}
              <div className="all-users-table-cell">
                <span className="text-dark-400 text-base">
                  {user.booksBorrowed}
                </span>
              </div>

              {/* University ID */}
              <div className="all-users-table-cell">
                <span className="text-dark-400 text-base">
                  {user.universityId}
                </span>
              </div>

              {/* ID Card */}
              <div className="all-users-table-cell">
                <button className="text-blue-600 hover:underline flex items-center text-sm gap-1">
                  View ID Card
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Action */}
              <div className="all-users-table-cell">
                <button className="p-2 rounded-md hover:bg-red-50">
                  <Trash2 className="w-4 h-4 text-red-500" />
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
