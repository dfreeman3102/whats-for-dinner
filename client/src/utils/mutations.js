import {gql} from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($fullName: String!, $email: String!, $password: String!) {
        addUser(fullName: $fullName, email: $email, password: $password) {
            token
            user {
                _id
                fullName
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                fullName
            }
        }
    }
`;

export const ADD_MEAL = gql`
    mutation addMeal($mealText: String!) {
        addMeal(mealText: $mealText) {
            _id
            mealText
        }
    }
`;

export const REMOVE_MEAL = gql`
    mutation removeMeal($mealId: ID!) {
        removeMeal(mealId: $mealId) {
            _id
            mealText
        }
    }
`;
