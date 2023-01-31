
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/graphql/myschemas.ts",
  documents: "src/graphql/query.ts",
  generates: {
    "src/graphql/generated/graphql.ts": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
