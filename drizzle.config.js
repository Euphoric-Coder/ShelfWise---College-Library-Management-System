import { defineConfig } from "drizzle-kit";
import config from "./lib/config";

export default defineConfig({
  dialect: "postgresql",
  schema: "./lib/schema.jsx",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
});
