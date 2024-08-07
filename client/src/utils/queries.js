import {gql} from '@apollo/client';

const GET_MEALS = gql`
    query getMeals {
        meals {
            _id
            mealName
        }
    }
`;

const GET_ME = gql`
    query me {
        me {
            _id
            fullName
            email
            savedMeals {
                _id
                mealName
            }
        }
    }
`;
