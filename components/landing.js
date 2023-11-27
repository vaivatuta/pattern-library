import Layout from "./layout";
import Head from "next/head";
import Container from "./container";
import Intro from "./intro";
import MoreStories from "./more-stories";
import SectionSeparator from "./section-separator";
import PostPlug from "./post-plug";

export default function Landing({ allPosts, preview }) {
  const [...morePosts] = allPosts || [];
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Vaiva's Pattern Library</title>
        </Head>
        <Container>
          <Intro />
          <SectionSeparator mini />

          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
            {morePosts.map((post) => (
              <PostPlug
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.description}
              />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}
