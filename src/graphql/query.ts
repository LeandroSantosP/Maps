import { gql } from "graphql-request";

export const getPagesQuery = gql`
  query getPages($first: IntType) {
    allPages(first: $first) {
      id
      heading
      slug
      body
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: [String]) {
    page(filter: { slug: { in: $slug } }) {
      id
      body
      slug
      heading
    }
  }
`;

export const GET_PLACES = gql`
  query getPlaces($first: IntType) {
    allPlaces(first: $first) {
      id
      slug
      name
      description
      location {
        latitude
        longitude
      }
      gallery {
        alt
        url
        width
        height
      }
    }
  }
`;

export const GET_PLACE_DETAILS = gql`
  query getPlace($slug: [String]) {
    place(filter: { slug: { in: $slug } }) {
      slug
      description
      name
      gallery {
        width
        height
        alt
        url
      }
    }
  }
`;
