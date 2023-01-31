import { gql } from "graphql-request";

const types = gql`
  query getPages($first: IntType) {
    allPages(first: $first) {
      id
      heading
      slug
      body
    }
  }

  query getPageBySlug($slug: [String]) {
    page(filter: { slug: { in: $slug } }) {
      id
      slug
      heading
    }
  }
`;

module.exports = types;
