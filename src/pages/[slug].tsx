import { request } from "graphql/client";
import { getPagesQuery, GET_PAGE_BY_SLUG } from "graphql/query";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { PageTemplate } from "Templetes/Pages";
// import { AboutTemplate } from "Templetes/About";

//getStaticProps => server para gerar as urls em build time /about/anything
//getStaticProps => server para buscar dados da paginas (props) - build time - estático
//getServerSideProps => server para buscar dados da pagina (props) - runtime - toda requisição (bundle fica somente no server)
//getInitialProps  => server para buscar dados da pagina (props) - runtime - toda requisição (bundle também vem para o client) - not recommended;

type postData = {
  heading: string;
  body: string;
  id: string;
  slug: string;
};

export default function AboutPage({ body, heading }: postData) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <PageTemplate heading={heading} body={body} />;
    </>
  );
}

type getAllPages = {
  allPages: Array<{
    id: string;
    heading: string;
    slug: string;
    body: string;
  }>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { allPages } = (await request({
    query: getPagesQuery,
    variables: { first: 3 }
  })) as getAllPages;

  const paths = allPages.map(({ slug }) => {
    const res = slug;

    return {
      params: { slug: res.toString() }
    };
  });

  return {
    paths,
    fallback: true
  };
};

type pageProps = {
  page: {
    id: string;
    body: string;
    slug: string;
    heading: string;
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = (await request({
    query: GET_PAGE_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })) as pageProps;

  if (!page) return { notFound: true };

  return {
    props: {
      heading: page.heading,
      body: page.body,
      slug: page.slug,
      id: page.id
    },
    revalidate: 60 * 60
  };
};
