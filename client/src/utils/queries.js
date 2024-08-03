import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      fullName
      email
      meals {
        _id
        mealText
      }
    }
  }
`;

export const QUERY_MEALS = gql`
    query meals {
        meals {
        _id
        mealText
        }
    }
    `;

export const QUERY_MEAL = gql`
    query meal($mealId: ID!) {
        meal(mealId: $mealId) {
        _id
        mealText
        }
    }
    `;


