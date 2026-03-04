"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

const Layout = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [minLoadingDone, setMinLoadingDone] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  // Minimum 1.5 second loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinLoadingDone(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Redirect logic
  useEffect(() => {
    if (status === "loading") return;

    if (!session && minLoadingDone) {
      setRedirecting(true);
      router.replace("/sign-in");
    }
  }, [session, status, router, minLoadingDone]);

  // Show loader while checking session or during redirect
  if (status === "loading" || !minLoadingDone || redirecting) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0f172a]">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="w-14 h-14 rounded-full border-4 border-slate-700"></div>
            <div className="absolute inset-0 w-14 h-14 rounded-full border-4 border-blue-500 border-t-transparent animate-spin shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
          </div>

          <div className="text-center">
            <h2 className="text-lg font-semibold text-white tracking-wide">
              {!session ? "Redirecting..." : "Verifying Session"}
            </h2>
            <p className="text-sm text-slate-400 mt-1 animate-pulse">
              Please wait...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="root-container">
      <div className="mx-auto max-w-7xl md:w-full">
        <Header />
        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
