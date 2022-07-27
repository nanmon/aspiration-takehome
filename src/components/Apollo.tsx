import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const ghToken = process.env.REACT_APP_GH_TOKEN;
if (!ghToken) {
  throw new Error('GitHub token not found, make sure to include it in the .env file');
}

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${ghToken}`,
  },
  cache: new InMemoryCache(),
});

interface Props {
  children: React.ReactNode;
}

export default function Apollo({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
