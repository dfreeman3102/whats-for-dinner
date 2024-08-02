const {gql} = require('graphql-tag');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedMeals: [Meal]
    }

    type Meal {
        _id: ID
        mealName: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveMeal(mealName: String!): User
        removeMeal(mealName: String!): User
    }
`;

module.exports = typeDefs;