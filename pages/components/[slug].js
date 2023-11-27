import { lazy } from "react";
import { PreviewSuspense } from "next-sanity/preview";
import { componentQuery, componentSlugsQuery } from "../../lib/queries"; // Update with your actual queries
import {
  getClient,
  overlayDrafts,
  sanityClient,
} from "../../lib/sanity.server";
import Component from "../../components/component"; // Update with your actual component file name

// const ComponentPreview = lazy(() => import('../../components/component-preview')); // Update with your actual component preview file name

export default function ComponentPage({ preview, data }) {
  //   if (preview) {
  //     return (
  //       <PreviewSuspense fallback="Loading...">
  //         <ComponentPreview data={data} />
  //       </PreviewSuspense>
  //     );
  //   }

  return <Component data={data} />;
}

export async function getStaticProps({ params, preview = false }) {
  const { component, moreComponents } = await getClient(preview).fetch(
    componentQuery,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      preview,
      data: {
        component,
        moreComponents: overlayDrafts(moreComponents),
      },
    },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(componentSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
