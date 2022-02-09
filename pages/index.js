import About from '../components/leading/about';
import Services from '../components/leading/services';
import HomeBanner from '../components/home-banner';
import Projects from '../components/leading/projects';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <Layout>
      <Head>
        <title>Augusto da Silva</title>
      </Head>
      <HomeBanner />
      <About />
      <Services />
      {/* <Projects /> */}
      {/* <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
