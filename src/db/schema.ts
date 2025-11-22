import { pgTable, serial, varchar, integer, boolean, text, numeric, timestamp, foreignKey } from 'drizzle-orm/pg-core';

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  description: text('description'),
  icon: varchar('icon', { length: 255 }),
});

export const tools = pgTable('tools', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  tagline: varchar('tagline', { length: 255 }),
  description: text('description'),
  logo: varchar('logo', { length: 255 }),
  categoryId: integer('category_id').references(() => categories.id),
  pricingModel: varchar('pricing_model', { length: 50 }),
  rating: numeric('rating', { precision: 2, scale: 1 }).default('0'),
  reviewCount: integer('review_count').default(0),
  affiliateLink: varchar('affiliate_link', { length: 255 }),
  popular: boolean('popular').default(false),
  new: boolean('new').default(false),
});

export const pricingTiers = pgTable('pricing_tiers', {
  id: serial('id').primaryKey(),
  toolId: integer('tool_id').references(() => tools.id),
  name: varchar('name', { length: 255 }).notNull(),
  price: numeric('price', { precision: 10, scale: 2 }),
  period: varchar('period', { length: 50 }),
  features: text('features'), // JSON stringified array
  popular: boolean('popular').default(false),
});

export const updates = pgTable('updates', {
  id: serial('id').primaryKey(),
  type: varchar('type', { length: 50 }).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  toolId: integer('tool_id').references(() => tools.id),
  date: timestamp('date').defaultNow(),
  link: varchar('link', { length: 255 }),
});

export const reviews = pgTable('reviews', {
  id: serial('id').primaryKey(),
  toolId: integer('tool_id').references(() => tools.id),
  author: varchar('author', { length: 255 }),
  rating: integer('rating').default(0),
  content: text('content'),
  date: timestamp('date').defaultNow(),
  helpful: integer('helpful').default(0),
});

export const features = pgTable('features', {
  id: serial('id').primaryKey(),
  toolId: integer('tool_id').references(() => tools.id),
  name: varchar('name', { length: 255 }).notNull(),
});
