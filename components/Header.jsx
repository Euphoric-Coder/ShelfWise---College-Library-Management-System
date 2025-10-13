"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full my-10 flex justify-between gap-5 items-center">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
        <p className="text-2xl font-bold text-light-100">Shelf Wise</p>
      </Link>

      {/* Nav Links */}
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base cursor-pointer capitalize transition-colors hover:text-light-200",
              pathname === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            Library
          </Link>
        </li>

        {/* Sign Out Button */}
        <li>
          <Button
            onClick={() => signOut({ redirect: true, callbackUrl: "/sign-in" })}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
          >
            Logout
          </Button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
