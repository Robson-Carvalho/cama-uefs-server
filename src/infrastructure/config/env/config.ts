import dotenv from "dotenv";

import path from "path";

const envPath =
  process.env.NODE_ENV === "production"
    ? path.resolve(__dirname, "../../.env.production")
    : process.env.NODE_ENV === "test"
    ? path.resolve(__dirname, "../../.env.test")
    : path.resolve(__dirname, "../../.env.development");

dotenv.config({ path: envPath });

if (!process.env.PORT) {
  console.warn(
    "Warning: PORT is not defined in the environment variables. Using default port 3030."
  );
}
