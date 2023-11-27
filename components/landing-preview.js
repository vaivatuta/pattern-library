// import { usePreview } from "../lib/sanity";
// import { indexQuery } from "../lib/queries";
// import Landing from "./landing";

// export default function LandingPreview({ allPosts }) {
//   const previewAllPosts = usePreview(null, indexQuery);
//   return <Landing data={previewAllPosts ?? allPosts} preview />;
// }

import { usePreview } from "../lib/sanity";
import { componentQuery } from "../lib/queries"; // Update with your actual queries
import Landing from "./landing";

export default function LandingPreview({ allComponents }) {
  const previewAllComponents = usePreview(null, componentQuery); // Update the query if needed
  return <Landing data={previewAllComponents ?? allComponents} preview />;
}
