"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SessionWatcher() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // 1. Save expiry to localStorage
  useEffect(() => {
    if (session?.realExpiry) {
      localStorage.setItem("shelfwiseExpiry", session.realExpiry);
    }
  }, [session?.realExpiry]);

  // 2. Hard check on page load
  useEffect(() => {
    const expiry = localStorage.getItem("shelfwiseExpiry");
    if (expiry) {
      const expiryTime = new Date(expiry).getTime();
      if (Date.now() > expiryTime) {
        localStorage.removeItem("shelfwiseExpiry");
        localStorage.setItem("shelfwiseExpired", "true");
        router.replace("/sign-in?expired=true");
      }
    }
  }, []);

  // 3. Auto sign-out when expiry hits
  useEffect(() => {
    if (!session?.realExpiry) return;

    const expiryTime = new Date(session.realExpiry).getTime();
    const remaining = expiryTime - Date.now();

    const handleLogout = () => {
      console.warn("ShelfWise session expired — redirecting...");
      localStorage.removeItem("shelfwiseExpiry");
      localStorage.setItem("shelfwiseExpired", "true");
      signOut({ redirect: true, callbackUrl: "/sign-in?expired=true" });
    };

    if (remaining > 0) {
      const timer = setTimeout(handleLogout, remaining);
      return () => clearTimeout(timer);
    } else {
      handleLogout();
    }
  }, [session?.realExpiry]);

  // 4. Handle expired user with no session
  useEffect(() => {
    if (status === "unauthenticated") {
      const expired = localStorage.getItem("shelfwiseExpired");
      if (expired === "true") {
        localStorage.removeItem("shelfwiseExpired");
        router.replace("/sign-in?expired=true");
      }
    }
  }, [status]);

  return null;
}
