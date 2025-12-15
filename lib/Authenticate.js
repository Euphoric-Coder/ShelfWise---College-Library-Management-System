import { eq } from "drizzle-orm";
import { db } from "./dbConfig";
import { users } from "./schema";
import { hash } from "bcryptjs";
import { signIn } from "next-auth/react";
// import { headers } from "next/headers";
// import ratelimit from "@/lib/ratelimit";
// import { redirect } from "next/navigation";
// import { workflowClient } from "@/lib/workflow";
// import config from "@/lib/config";

export const signInWithCredentials = async (params) => {
  const { email, password } = params;

  //   const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  //   const { success } = await ratelimit.limit(ip);

  //   if (!success) return redirect("/too-fast");

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    console.log("Signin successful for:", email);

    return { success: true };
  } catch (error) {
    console.log(error, "Signin error");
    return { success: false, error: "Signin error" };
  }
};

export const signUp = async (params) => {
  const {
    fullName,
    email,
    universityId,
    password,
    universityCard,
    universityCardId,
  } = params;

  //   const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  //   const { success } = await ratelimit.limit(ip);

  //   if (!success) return redirect("/too-fast");

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, error: "User already exists" };
  }

  const hashedPassword = await hash(password, 10);

  try {
    await db.insert(users).values({
      fullName,
      email,
      universityId,
      password: hashedPassword,
      universityCard,
      universityCardId,
    });

    console.log("User created:", {
      fullName,
      email,
      universityId,
      password: hashedPassword,
      universityCard,
      universityCardId,
    });

    // await workflowClient.trigger({
    //   url: `${config.env.prodApiEndpoint}/api/workflows/onboarding`,
    //   body: {
    //     email,
    //     fullName,
    //   },
    // });

    await signInWithCredentials({ email, password });

    return { success: true };
  } catch (error) {
    console.log(error, "Signup error");
    return { success: false, error: "Signup error" };
  }
};
