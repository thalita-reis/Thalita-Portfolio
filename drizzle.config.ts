import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

// Carregar variáveis do arquivo .env
config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL não encontrada! Verifique seu arquivo .env");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts", 
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});