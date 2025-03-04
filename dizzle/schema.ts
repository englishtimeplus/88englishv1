
import { serial, integer, pgTable, varchar, text, timestamp, boolean, numeric } from "drizzle-orm/pg-core";

export const users = pgTable(
    "users",
    {
        id: serial('id').primaryKey(),
        email: varchar('email', { length: 320 }),
        emailVerified: boolean("email_verified").default(false).notNull(),
        password: varchar('password', { length: 60 }).notNull(),
        phone: varchar('phone', { length: 20 }),
        phone2: varchar('phone2', { length: 20 }),
        role: varchar('role', { length: 20 }).notNull().default('STUDENT'),
        googleId: varchar('google_id', { length: 255 }), // Google OAuth ID
        facebookId: varchar('facebook_id', { length: 255 }), // Facebook OAuth ID
        kakoId: varchar('kakao_id', { length: 255 }), // Kakao OAuth ID
        naverId: varchar('naver_id', { length: 255 }), // Naver OAuth ID
        appleId: varchar('apple_id', { length: 255 }), // Apple OAuth ID
        avatar: varchar('avatar', { length: 256 }),
        // rating: numeric('rating', { precision: 3, scale: 2 }).default('0'),
        allowEmail: boolean('allowEmail').default(false),
        allowSMS: boolean('allowSMS').default(false),
        createdAt: timestamp('created_at').notNull().defaultNow(),
        updatedAt: timestamp('updated_at'),
        deletedAt: timestamp('deleted_at'),
    }
);