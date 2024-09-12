import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const queryClient = postgres(
  "postgres://postgres:hjwyqn0312.@ilovejie.com:5432/postgres"
);
export const db = drizzle(queryClient, { schema });
