import { GraphQLClient } from "graphql-request";

const baseUrl = "https://graphql.datocms.com";

type headersProps = {
  authorization: string;
  "X-Include-Drafts"?: string;
  "X-Exclude-Invalid"?: string;
};

type requestProps = {
  query: string;
  variables?: any;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
};

export function request({ query, variables, includeDrafts, excludeInvalid }: requestProps) {
  const headers: headersProps = {
    authorization: `Bearer ${process.env.NEXT_API_DATO_TOKEN_AUTH}`
  };

  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }

  const client = new GraphQLClient(baseUrl, { headers });
  const res = client.request(query, variables);

  console.log(res);

  return res;
}
