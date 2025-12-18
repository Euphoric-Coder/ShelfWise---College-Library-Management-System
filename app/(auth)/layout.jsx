"use client";

import RedirectPage from "@/components/Redirect";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Layout = ({ children }) => {
  const { data: session } = useSession();

  if (session?.user) {
    return <RedirectPage />;
  }

  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3">
            <Image src="/icons/logo.svg" alt="logo" width={37} height={37} />
            <h1 className="text-2xl font-semibold text-white">Shelf Wise</h1>
          </div>
          <div>{children}</div>
        </div>
      </section>

      <section className="auth-illustration">
        <Image
          src="/images/auth-illustration.png"
          alt="auth illustration"
          height={1000}
          width={1000}
          className="size-full object-cover"
          draggable={false}
        />
      </section>
    </main>
  );
};

export default Layout;
