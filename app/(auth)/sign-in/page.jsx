"use client";

import React, { Suspense } from "react";
import Auth from "@/components/Auth";
import { signInSchema } from "@/lib/dataValidation";
import { signInWithCredentials } from "@/lib/Authenticate";

const Page = () => (
  <Suspense fallback={<></>}>
    <Auth
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={signInWithCredentials}
    />
  </Suspense>
);

export default Page;
