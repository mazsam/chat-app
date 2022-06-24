import { split, HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";

const wsLink = new WebSocketLink({
  uri: `wss://simple-chat-apps.herokuapp.com/v1/graphql`,
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: "https://simple-chat-apps.herokuapp.com/v1/graphql",
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;
