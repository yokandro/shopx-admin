import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: ["schema.graphql", "scalar Upload"],
  documents: ["./src/gql/**/*.{js,ts}", "!./src/gql/generated.graphql.tsx"],
  generates: {
    "src/gql/generated.graphql.tsx": {
      config: {
        useIndexSignature: true,
        withMutationFn: true,
      },
      plugins: [
        "typescript",
        "typescript-resolvers",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};
export default config;
