"use client";

import React from "react";
import { Home, Users, BookOpen, UserCheck, BookPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: "Home", path: "/admin" },
    { icon: Users, label: "All Users", path: "/admin/all-users" },
    { icon: BookOpen, label: "All Books", path: "/admin/all-books" },
    {
      icon: UserCheck,
      label: "Borrow Requests",
      path: "/admin/borrow-requests",
    },
    {
      icon: BookPlus,
      label: "Account Requests",
      path: "/admin/account-requests",
    },
  ];

  return (
    <div className="admin-sidebar w-68 flex flex-col justify-between">
      {/* Top section */}
      <div>
        <div className="logo flex items-center gap-3 p-4">
          <div className="size-8 bg-primary-admin rounded-lg flex items-center justify-center">
            <BookOpen className="size-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-dark-400">Shelf Wise</h1>
        </div>

        {/* Navigation */}
        <nav className="mt-10 space-y-2">
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.path ||
              (item.path !== "/admin" && pathname.startsWith(item.path));

            return (
              <Link
                key={index}
                href={item.path}
                className={`flex text-lg items-center gap-3 px-4 py-3 rounded-3xl transition-colors cursor-pointer ${
                  isActive
                    ? "bg-primary-admin text-white font-bold"
                    : "text-light-500 hover:bg-light-300"
                }`}
              >
                <item.icon className="size-5" />
                <p>{item.label}</p>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Section */}
      <div className="user flex items-center gap-3 p-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.ng" />
          <AvatarFallback className="bg-primary-admin text-white">
            CN
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-medium text-dark-400">Adrian Hajdin</p>
          <p className="text-sm text-light-500">adrian@jsmastery</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
