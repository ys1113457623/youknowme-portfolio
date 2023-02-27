import { createClient } from "next-sanity";

import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};


export const sanityClient = createClient(config);

export const urlFor = (source: any) => {
  return createImageUrlBuilder(config).image(source);
};


export default urlFor;


// const builder = imageUrlBuilder(client)

// function urlFor(source: any) {
//   return builder.image(source)
// }

// export default urlFor