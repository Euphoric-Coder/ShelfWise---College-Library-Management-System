import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { eq } from "drizzle-orm";
import { db } from "@/lib/dbConfig";
import { users } from "@/lib/schema";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
    updateAge: 0, // disable silent refresh
  },

  jwt: {
    maxAge: 24 * 60 * 60,
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const result = await db
          .select()
          .from(users)
          .where(eq(users.email, credentials.email))
          .limit(1);

        if (result.length === 0) return null;

        const valid = await compare(credentials.password, result[0].password);
        if (!valid) return null;

        return {
          id: result[0].id.toString(),
          email: result[0].email,
          name: result[0].fullName,
        };
      },
    }),
  ],

  pages: {
    signIn: "/sign-in",
  },

  callbacks: {
    async jwt({ token, user }) {
      // First login → attach expiry & user info
      if (user) {
        const exp = Math.floor(Date.now() / 1000) + 24 * 60 * 60;

        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.realExp = exp;
      }

      // Hard-expire JWT
      if (token.realExp && Date.now() / 1000 > token.realExp) {
        console.warn("ShelfWise JWT expired — session cleared");
        return null;
      }

      return token;
    },

    async session({ session, token }) {
      if (token?.id) {
        session.user = {
          id: token.id,
          name: token.name,
          email: token.email,
        };

        session.realExpiry = new Date(token.realExp * 1000).toISOString();
      } else {
        session = null; // Expired → no session
      }

      return session;
    },
  },

  cookies: {
    sessionToken: {
      name: "shelfwise.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      },
    },
    csrfToken: {
      name: "shelfwise.csrf-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      },
    },
  },

  secret: process.env.NEXTAUTH_SECRET || "shelfwise-dev-secret",
});

export { handler as GET, handler as POST };
