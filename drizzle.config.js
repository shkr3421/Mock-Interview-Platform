export default {
  schema: "./utils/schema.js", // adjust if your schema path is different
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
  }
};
