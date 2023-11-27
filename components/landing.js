// import Layout from "./layout";
// import Head from "next/head";
// import { CMS_NAME } from "../lib/constants";
// import Container from "./container";
// import Intro from "./intro";
// import HeroPost from "./hero-post";
// import MoreStories from "./more-stories";

// export default function Landing({ allPosts, preview }) {
//   const [heroPost, ...morePosts] = allPosts || [];
//   return (
//     <>
//       <Layout preview={preview}>
//         <Head>
//           <title>Vaiva's Pattern Library</title>
//         </Head>
//         <Container>
//           <Intro />
//           {heroPost && (
//             <HeroPost
//               title={heroPost.title}
//               coverImage={heroPost.coverImage}
//               date={heroPost.date}
//               author={heroPost.author}
//               slug={heroPost.slug}
//               excerpt={heroPost.excerpt}
//             />
//           )}
//           {morePosts.length > 0 && <MoreStories posts={morePosts} />}
//         </Container>
//       </Layout>
//     </>
//   );
// }

import Layout from "./layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Container from "./container";
import Intro from "./intro";
import HeroPost from "./hero-post";
import MoreStories from "./more-stories";
import { componentQuery, componentSlugsQuery } from "../lib/queries"; // Update with your actual queries
import { getClient, overlayDrafts } from "../lib/sanity.server";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";

// const Component = lazy(() => import("./component")); // Update with your actual component file name
// const ComponentPreview = lazy(() => import("./component-preview")); // Update with your actual component preview file name

export default function Landing({ allComponents, preview }) {
  const [heroComponent, ...moreComponents] = allComponents || [];
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Your Pattern Library</title>
        </Head>
        <Container>
          <Intro />
          {heroComponent && (
            <PreviewSuspense fallback="Loading...">
              <ComponentPreview data={heroComponent} />
            </PreviewSuspense>
          )}
          {moreComponents.length > 0 && (
            <MoreComponents components={moreComponents} />
          )}
        </Container>
      </Layout>
    </>
  );
}
