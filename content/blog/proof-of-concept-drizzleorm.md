---
external: false
title: ORM Presentation Report - Drizzle ORM
description: "An in-depth analysis of Drizzle ORM, covering documentation, community support, database compatibility, development process, performance benchmarks, and overall conclusions."
date: 2023-10-28
---

> **📝 Author's Note:** *This document was prepared as part of a university software development course. It presents a comparative analysis of the Drizzle ORM for academic purposes.*

## 📚 Documentation

**Drizzle's documentation is effective**, being both **simple and comprehensive**. It provides the necessary guidelines for proper Drizzle implementation.

## 👥 Community

**Drizzle's community is very dynamic** and, according to current trends, **is likely to become one of the most popular ORMs in the TypeScript ecosystem**. Although it has fewer GitHub stars compared to Prisma, *it's important to note that Drizzle is a more recent project*.

![Repository Stars](/images/star-history-20231026.webp)


## 🗄️ Database Support

Drizzle supports **the main databases used in the market**, such as **PostgreSQL, MySQL, and SQLite**. 

> **🌟 Key Differentiator:** What sets Drizzle apart from other solutions is its ability to provide specific libraries, which they refer to as **"dialects," for each of these databases**. This allows Drizzle to offer *features tailored to the particularities of each database management system*, rather than using generic libraries.

## 🛠️ Development Process

### Data Format

**Drizzle uses TypeScript to define the data structure (schema).**

```typescript
export const customer = pgTable("customer", {
  id: uuid("id").defaultRandom().primaryKey(),
});

export const customerRelations = relations(customer, ({ many }) => ({
  order: many(order),
}));

export const order = pgTable("order", {
  id: uuid("id").defaultRandom().primaryKey(),
  customer_id: uuid("customer_id")
    .notNull()
    .references(() => customer.id),
});
```

In this case, **a foreign key is established** in the "order" entity that references the customer making the order, creating **a relationship between the "customer" and "order" entities**.

**Drizzle provides flexibility** - we can use a single `.ts` file for data schemas or multiple files to organize structures.

> **💡 Our Assessment:** Drizzle *might sacrifice some readability* by using TypeScript for data relationships. While TypeScript users may not find this problematic, **Prisma's approach to this task is more readable** in our view.

### 🔄 Migrations

**Once a modification is made to the data schema**, simply executing a command applies changes to the database. This process is *very similar to Prisma's workflow*.

> **🔧 Key Feature:** Drizzle includes **smart column renaming protection** - preventing accidental column deletion when renaming columns.

![Migration Menu](/images/image.png)

### ⚡ Generate the Client

**Since Drizzle uses TypeScript** for data schema definition, it **leverages type inference directly**. No additional migration is needed to benefit from this inference once schema changes are made.

### 📝 Syntax and Queries

**Drizzle provides SQL-like operators** for queries, maintaining **SQL-like syntax with a more styled appearance**. 

**Key Advantage:** *Full TypeScript inference support* in queries.

**Consideration:** Drizzle's SQL-based approach can be **both an advantage and disadvantage**, depending on the user's SQL familiarity.

> **🆚 vs Prisma:** Prisma uses *more beginner-friendly operators* for those unfamiliar with SQL.

![Table Structure](/images/image-4.png)

**Example Data Structure:**
```typescript
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
});

export const postsRelations = relations(posts, ({ many }) => ({
  comments: many(comments),
}));

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  postId: integer("post_id").references(() => posts.id),
});
```

**Example Query:**
```typescript
await db.query.posts.findMany({
  where: (posts, { eq }) => eq(posts.id, 1),
  with: {
    comments: {
      where: (comments, { lt }) => lt(comments.createdAt, new Date()),
    },
  },
});
```

**In this example:**
- **`eq` operator** handles equality (finding post with id = 1)
- **`lt` operator** means "less than" (comments before current date)


## 🚀 Performance

### Core Performance Advantage

**Drizzle stands out for its speed** as it consists of a **thin abstraction layer in TypeScript over SQL**. 

> **🎯 Key Difference:** Drizzle performs *only one query per statement* vs. multiple queries in other ORMs.

### 🆚 Drizzle vs Prisma Performance

**Prisma's Approach:**
- Uses *Rust engine* originally designed for multiple languages
- Currently focuses *only on TypeScript/JavaScript*
- Performs *multiple queries for join operations*
- **Brings data to Rust engine** for joins instead of using database joins

**Drizzle's Advantage:**
- **Translates syntax to single SQL statement**
- **Leverages database-native join capabilities**
- *Significantly more efficient* for complex operations

### 🔧 Prepared Statements

**Extremely useful feature** that optimizes query performance:

```typescript
const p1 = db
  .select()
  .from(customers)
  .where(eq(customers.id, sql.placeholder("id")))
  .prepare("p1");

await p1.execute({ id: 10 });
await p1.execute({ id: 12 });
```

**Benefits:**
- ✅ **Build query once**, reuse multiple times
- ✅ **Avoids repeated SQL translation**
- ✅ **Significant performance improvement**

### **📊 Benchmarks**

> **🔍 Important Note:** *These benchmarks are prepared by Drizzle's team*. While from internal sources, they provide valuable comparative insights.

**Benchmark Results - Select All:**
![Benchmark Select](/images/image-2.webp)

**Even in simple "select all" queries**, there's a *marked difference* between using prepared statements and not using them.

**Benchmark Results - Complex Join:**
![Benchmark Join](/images/image-3.webp)

**For complex queries** (select + where + left join), the performance difference is *even more dramatic*.


## ✅ Conclusion

### Strengths:
- ✅ **Excellent flexibility and simplicity**
- ✅ **Superior performance** compared to most popular ORMs
- ✅ **Excellent prepared statements implementation**
- ✅ **Single query per statement** architecture
- ✅ **Straightforward migration management**
- ✅ **Simple data schema definition**

### Considerations:
- ⚠️ **Manual left join management** required
- ⚠️ **Not completely SQL-free** - some SQL knowledge beneficial

### 🎯 Final Recommendation

**Drizzle is an ideal choice for developers who:**
- Value **performance and speed**
- Want **simple migration and schema management**
- Are comfortable with **some SQL concepts**
- Need **TypeScript-first solution**

> **🏆 Bottom Line:** When using prepared statements and considering its efficient single-query approach, **Drizzle stands as one of the most solid ORM choices** in the TypeScript ecosystem.
```

Key formatting improvements made:
- **Bold** for key points and advantages
- *Italics* for emphasis and comparisons
- `>` blockquotes for important notes and differentiators
- **🎯** Emojis for visual section markers
- **✅/⚠️** Clear strength/consideration indicators
- Better section organization with clear visual hierarchy
- Technical terms highlighted consistently
- Improved readability while maintaining professional tone