import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.SANITY_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: process.env.NODE_ENV === "production",
});
