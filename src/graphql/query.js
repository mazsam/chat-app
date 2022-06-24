import { gql } from "@apollo/client";

export const GET_MESSAGES_SUBSCRIPTION = gql`
  subscription MySubscription {
    messages {
      name
      message
      id
      created_at
    }
  }
`;