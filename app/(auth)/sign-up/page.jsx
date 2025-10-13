"use client";

import Auth from "@/components/Auth";
import { signUpSchema } from "@/lib/dataValidation";
import { signUp } from "@/lib/signUp";

const Page = () => (
  <Auth
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
  />
);

export default Page;
