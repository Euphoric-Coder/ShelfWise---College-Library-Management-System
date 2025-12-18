"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FIELD_NAMES, FIELD_TYPES } from "@/lib/data";
import FileUpload from "@/components/FileUpload";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { file } from "zod";
import { useEffect, useState } from "react";
import { signUp } from "@/lib/Authenticate";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertTriangle } from "lucide-react";

const Auth = ({ type, schema, defaultValues, onSubmit }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isSignIn = type === "SIGN_IN";

  const [fileId, setFileId] = useState(null);

  const [showAlert, setShowAlert] = useState(false);

  // Check for session expired query
  useEffect(() => {
    const expired = searchParams.get("expired");
    if (expired === "true") {
      setShowAlert(true);
    }
  }, [searchParams]);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit = async (data) => {
    console.log("Form Data:", { ...data, universityCardId: fileId });

    const result = await onSubmit({ ...data, universityCardId: fileId });

    if (result.success) {
      toast.success(
        `You have successfully ${isSignIn ? "signed in" : "signed up"}.`
      );

      router.push("/");
    } else {
      toast.error(result.error ?? "An error occurred.");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">
        {isSignIn
          ? "Welcome back to Shelf Wise"
          : "Create your library account"}
      </h1>
      <p className="text-light-100">
        {isSignIn
          ? "Access the vast collection of resources, and stay updated"
          : "Please complete all fields and upload a valid university ID to gain access to the library"}
      </p>

      {/* Session Expired Alert */}
      {showAlert && type === "SIGN_IN" && (
        // TODO: Light and Dark mode theme
        // <Alert className="mb-6 border-yellow-400 bg-yellow-50 text-yellow-900 dark:bg-yellow-950 dark:border-yellow-800 dark:text-yellow-100">
        //   <AlertTriangle className="h-5 w-5 text-yellow-500 dark:text-yellow-300" />
        //   <div>
        //     <AlertTitle>Session Expired</AlertTitle>
        //     <AlertDescription>
        //       Your session has expired. Please sign in again to continue.
        //     </AlertDescription>
        //   </div>
        // </Alert>

        <Alert className="mb-6 border-yellow-800 bg-yellow-950 text-yellow-100">
          <AlertTriangle className="h-5 w-5 !text-yellow-300" />
          <div>
            <AlertTitle>Session Expired</AlertTitle>
            <AlertDescription>
              Your session has expired. Please sign in again to continue.
            </AlertDescription>
          </div>
        </Alert>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full space-y-6"
        >
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    {FIELD_NAMES[field.name]}
                  </FormLabel>
                  <FormControl>
                    {field.name === "universityCard" ? (
                      <FileUpload
                        type="image"
                        accept="image/*"
                        placeholder="Upload your ID"
                        folder="ids"
                        variant="dark"
                        setFileId={setFileId}
                        onFileChange={field.onChange}
                      />
                    ) : (
                      <Input
                        required
                        type={FIELD_TYPES[field.name]}
                        {...field}
                        className="form-input rounded-3xl"
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit" className="form-btn">
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>

      <p className="text-center text-base font-medium">
        {isSignIn ? "New to Shelf Wise? " : "Already have an account? "}
        <Link
          href={isSignIn ? "/sign-up" : "/sign-in"}
          className="font-bold text-primary"
        >
          {isSignIn ? "Create an account" : "Sign in"}
        </Link>
      </p>
    </div>
  );
};

export default Auth;
