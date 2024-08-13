const { gql } = require("graphql-tag");

const typeDefs = gql`
  type User {
    _id: ID
    fullName: String
    email: String
    password: String
    savedMeals: [String!]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(fullName: String!, email: String!, password: String!): Auth
    saveMeal(userId: ID!, savedMeal: String!): User
    removeMeal(userId: ID!, savedMeal: String!): User
  }
`;

module.exports = typeDefs;
