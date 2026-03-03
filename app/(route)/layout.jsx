"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

const Layout = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [minLoadingDone, setMinLoadingDone] = useState(false);

  // Minimum 1.5 second loader timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinLoadingDone(true);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "loading") return;
    if (!session && minLoadingDone) {
      router.replace("/sign-in");
    }
  }, [session, status, router, minLoadingDone]);

  // Show loading screen while verifying session or during minimum load time
  if (status === "loading" || !minLoadingDone) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0f172a]">
        <div className="flex flex-col items-center space-y-6">
          {/* Spinner */}
          <div className="relative">
            <div className="w-14 h-14 rounded-full border-4 border-slate-700"></div>
            <div className="absolute inset-0 w-14 h-14 rounded-full border-4 border-blue-500 border-t-transparent animate-spin shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
          </div>

          {/* Text */}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-white tracking-wide">
              Verifying Session
            </h2>
            <p className="text-sm text-slate-400 mt-1 animate-pulse">
              Securely logging you in...
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Prevent rendering protected content if not logged in
  if (!session) return null;

  return (
    <main className="root-container bg-[#0f172a] min-h-screen text-white">
      <div className="mx-auto max-w-7xl md:w-full">
        <Header />
        <div className="mt-20 pb-20 px-4">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
