import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.SANITY_SANITY_PROJECT_ID,
  dataset: process.env.SANITY_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-10-27",
  token: process.env.SANITY_SECRET_TOKEN,
});
