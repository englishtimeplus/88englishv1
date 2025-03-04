import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: 'postgresql',
    out: './migrations',
    schema: [
        './dizzle/schema.ts',
    ],
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    // tablesFilter: [`${DATABASE_PREFIX}_*`],
    // verbose: true,
    // strict: true,
});