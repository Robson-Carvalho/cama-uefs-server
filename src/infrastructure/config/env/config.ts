import dotenv from "dotenv";
import path from "path";

const envPath =
  process.env.NODE_ENV === "production"
    ? path.resolve(__dirname, "../../../../.env.production")
    : process.env.NODE_ENV === "development"
    ? path.resolve(__dirname, "../../../../.env.development")
    : path.resolve(__dirname, "../../../../.env.test");

dotenv.config({ path: envPath });

if (!process.env.MONGODB_URL) {
  console.warn(
    "Warning: MONGODB_URL is not defined in the environment variables."
  );
}
