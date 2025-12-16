"use client";

import Auth from "@/components/Auth";
import { signUpSchema } from "@/lib/dataValidation";
import { signUp } from "@/lib/Authenticate";

const Page = () => (
  <Suspense fallback={<></>}>
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
      onSubmit={signUp}
    />
  </Suspense>
);

export default Page;
