"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Home, Users, BookOpen, UserCheck, BookPlus } from "lucide-react";

const MobileNavbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
    <div className="lg:hidden p-4 w-full flex flex-row items-center justify-between bg-white shadow-sm">
      {/* Hamburger menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200">
            <Menu className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="flex items-center gap-2">
              <div className="size-8 bg-primary-admin rounded-lg flex items-center justify-center">
                <BookOpen className="size-5 text-white" />
              </div>
              <span className="font-bold text-lg text-dark-400">BookWise</span>
            </SheetTitle>
          </SheetHeader>

          {/* Nav items */}
          <nav className="mt-6 flex flex-col gap-1">
            {navItems.map((item, index) => {
              const isActive =
                pathname === item.path ||
                (item.path !== "/admin" && pathname.startsWith(item.path));

              return (
                <Link
                  key={index}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base transition-colors ${
                    isActive
                      ? "bg-primary-admin text-white font-semibold"
                      : "text-light-500 hover:bg-light-300"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Section */}
          <div className="mt-auto p-4 border-t flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-primary-admin text-white">
                CN
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-dark-400">Adrian Hajdin</p>
              <p className="text-sm text-light-500">adrian@jsmastery</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      {/* Logo */}
      <Link href="/admin" className="flex items-center gap-2">
        <div className="size-8 bg-primary-admin rounded-lg flex items-center justify-center">
          <BookOpen className="size-5 text-white" />
        </div>
        <span className="font-bold text-lg text-dark-400">Shelf Wise</span>
      </Link>
      <div className="w-10"></div>
    </div>
  );
};

export default MobileNavbar;
