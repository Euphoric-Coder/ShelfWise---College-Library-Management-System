"use client";

import React from "react";
import { signInSchema } from "@/lib/signInSchema";
import Auth from "@/components/Auth";
// import { signInWithCredentials } from "@/lib/actions/auth";

const Page = () => (
  <Auth
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    // onSubmit={signInWithCredentials}
  />
);

export default Page;
