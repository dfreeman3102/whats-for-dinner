import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      fullName
      email
      password
      savedMeals
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      fullName
      email
      password
      savedMeals
    }
  }
`;


export const GET_USER_MEALS = gql`
query GetUserMeals($userId: ID!) {
    user(id: $userId) {
        savedMeals
    }
}
`;

