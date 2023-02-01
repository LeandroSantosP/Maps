import { request } from "graphql/client";
import { GetStaticProps } from "next";
import HomeTemplate from "Templetes/Home";
import { GET_PLACES } from "graphql/query";

interface HomeProps {
  content: Array<{
    id: string;
    slug: string;
    name: string;
    description: string;
    location: {
      latitude: number;
      longitude: number;
    };
  }>;
}

export default function Home({ content }: HomeProps) {
  return <HomeTemplate places={content} />;
}

export interface allPlacesProps {
  allPlaces: {
    id: string;
    slug: string;
    name: string;
    location: {
      latitude: number;
      longitude: number;
    };
    description: string;
  }[];
}

export const getStaticProps: GetStaticProps = async () => {
  const { allPlaces } = (await request({
    query: GET_PLACES,
    variables: { first: 3 }
  })) as allPlacesProps;
  return {
    props: {
      content: allPlaces
    }
  };
};
