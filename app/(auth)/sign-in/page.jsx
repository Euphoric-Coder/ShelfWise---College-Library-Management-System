"use client";

import React from "react";
import Auth from "@/components/Auth";
import { signInSchema } from "@/lib/dataValidation";
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
