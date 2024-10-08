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

export const SAVE_MEAL = gql`
 mutation saveMeal($userId: ID!, $savedMeal: String!) {
    saveMeal(userId: $userId, savedMeal: $savedMeal) {
        _id
        fullName
        email
        savedMeals
    }
}
`;

export const REMOVE_MEAL = gql`
    mutation removeMeal($userId: ID!, $savedMeal: String!) {
    removeMeal(userId: $userId, savedMeal: $savedMeal) {
            _id
            fullName
            email
            savedMeals
        }
    }
`;
