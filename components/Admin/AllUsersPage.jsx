"use client";

import React, { useState } from "react";
import { ExternalLink, Trash2, ChevronDown, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

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
  ]);

  const handleRoleChange = (userId, newRole) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
    );
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-dark-400">All Users</h1>
        <div className="flex items-center gap-2 text-sm text-light-500">
          <span>A-Z</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#f7f8ff] hover:bg-[#f7f8ff]">
              <TableHead className="text-left font-semibold text-gray-700 py-5">
                Name
              </TableHead>
              <TableHead className="text-center font-semibold text-gray-700 py-5">
                Date Joined
              </TableHead>
              <TableHead className="text-center font-semibold text-gray-700 py-5">
                Role
              </TableHead>
              <TableHead className="text-center font-semibold text-gray-700 py-5">
                Books Borrowed
              </TableHead>
              <TableHead className="text-center font-semibold text-gray-700 py-5">
                University ID No
              </TableHead>
              <TableHead className="text-center font-semibold text-gray-700 py-5">
                University ID Card
              </TableHead>
              <TableHead className="text-center font-semibold text-gray-700 py-5">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                className="bg-white hover:bg-gray-50 transition-colors"
              >
                {/* Name */}
                <TableCell className="text-left py-5">
                  <div className="flex items-center gap-4">
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
                </TableCell>

                {/* Date Joined */}
                <TableCell className="text-center py-5 text-dark-400 text-base">
                  {user.dateJoined}
                </TableCell>

                {/* Role Dropdown */}
                <TableCell className="flex justify-center text-center py-5">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
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
                        <span className="all-users-role-badge-dropdown role-user">
                          User
                        </span>
                        {user.role === "User" && (
                          <Check className="w-4 h-4 text-pink-600" />
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleRoleChange(user.id, "Admin")}
                        className="flex items-center justify-between"
                      >
                        <span className="all-users-role-badge-dropdown role-admin">
                          Admin
                        </span>
                        {user.role === "Admin" && (
                          <Check className="w-4 h-4 text-green-600" />
                        )}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>

                {/* Books Borrowed */}
                <TableCell className="text-center py-5 text-dark-400 text-base">
                  {user.booksBorrowed}
                </TableCell>

                {/* University ID */}
                <TableCell className="text-center py-5 text-dark-400 text-base">
                  {user.universityId}
                </TableCell>

                {/* ID Card */}
                <TableCell className="text-center py-5">
                  <button className="text-blue-600 hover:underline inline-flex items-center text-sm gap-1">
                    View ID Card
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </TableCell>

                {/* Delete Action */}
                <TableCell className="text-center py-5">
                  <button className="p-2 rounded-md hover:bg-red-50 transition-colors">
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-5 md:hidden">
        {users.map((user) => (
          <Card
            key={user.id}
            className="rounded-2xl shadow-sm border border-gray-200"
          >
            {/* Header */}
            <CardHeader className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm ${user.bgColor}`}
              >
                {user.initials}
              </div>
              <div>
                <CardTitle className="text-lg font-bold text-gray-800">
                  {user.name}
                </CardTitle>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </CardHeader>

            {/* Content */}
            <CardContent className="space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-semibold">Date Joined:</span>{" "}
                {user.dateJoined}
              </p>
              <p>
                <span className="font-semibold">Books Borrowed:</span>{" "}
                {user.booksBorrowed}
              </p>
              <p>
                <span className="font-semibold">University ID:</span>{" "}
                {user.universityId}
              </p>
              <p>
                <span className="font-semibold">ID Card:</span>{" "}
                <button className="text-blue-600 hover:underline inline-flex items-center">
                  View ID Card
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </p>
            </CardContent>

            {/* Footer */}
            <CardFooter className="flex justify-between items-center gap-2 bg-gray-50 px-4 py-3 border-t">
              {/* Role Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-1 border focus:outline-none focus:ring-0 ${
                      user.role === "Admin"
                        ? "bg-green-100 text-green-700 border-green-300"
                        : "bg-pink-100 text-pink-700 border-pink-300"
                    }`}
                  >
                    {user.role}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[140px]">
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

              {/* Delete */}
              <button className="p-2 rounded-md hover:bg-red-50 transition-colors">
                <Trash2 className="w-5 h-5 text-red-500" />
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllUsersPage;
