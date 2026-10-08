import { defineConfig } from 'drizzle-kit';
// import * as schema from './src/shared/infrastructure/database/postgres/schema/index.js';
export default defineConfig({
  schema: './src/shared/infrastructure/database/postgres/schema',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_DATABASE_URL as string,
  },
});
