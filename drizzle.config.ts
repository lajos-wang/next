import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    host: "ilovejie.com",
    port: 5432,
    user: "postgres",
    password: "hjwyqn0312.",
    database: "postgres",
    ssl: false,
  },
  verbose: true,
  strict: true,
});
