import { request } from "graphql/client";
import { GET_PLACES, GET_PLACE_DETAILS } from "graphql/query";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { allPlacesProps } from "pages";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { PlaceTemplate } from "Templetes/Place";

export type placeProps = {
  slug: string;
  description: string;
  name: string;
  gallery: Array<{
    width: number;
    height: number;
    alt: string | null;
    url: string;
  }>;
};

export default function Places(place: placeProps) {
  const router = useRouter();
  if (router.isFallback) return null;
  return <PlaceTemplate place={place} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { allPlaces } = (await request({
    query: GET_PLACES,
    variables: { first: 3 }
  })) as allPlacesProps;

  const getAllPAths = allPlaces
    .filter((place) => place.slug)
    .map((path) => {
      const paths = {
        params: { slug: path.slug.toString() }
      };
      return paths;
    });

  return {
    paths: getAllPAths,
    fallback: true
  };
};

type PageDetailsType = {
  place: placeProps;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as ParsedUrlQuery;

  const { place } = (await request({
    query: GET_PLACE_DETAILS,
    variables: { slug }
  })) as PageDetailsType;

  if (!place) return { notFound: true };

  return {
    props: place
  };
};
