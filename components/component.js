// import { urlForImage } from "../lib/sanity";
import ErrorPage from "next/error";
import Layout from "./layout";
import Container from "./container";
import Header from "./header";
import Head from "next/head";
// import { CMS_NAME } from "../lib/constants";
import PostHeader from "./post-header";
import PostTitle from "./post-title";
import ComponentBody from "./component-body"; // Create this component
// import SectionSeparator from "./section-separator";
// import MoreComponents from "./more-components"; // Create this component
import { useRouter } from "next/router";

export default function Component({ data = {}, preview = false }) {
  const { component, moreComponents } = data;
  const router = useRouter();

  if (!component) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{`${component.title} | Your Pattern Library`}</title>
                {/* Add any meta tags specific to components here */}
              </Head>
              <PostHeader title={component.title} />
              <ComponentBody content={component.description} />
              <ComponentBody content={component.code} code />
            </article>
            {/* <SectionSeparator />
            {moreComponents.length > 0 && (
              <MoreComponents components={moreComponents} />
            )} */}
          </>
        )}
      </Container>
    </Layout>
  );
}
