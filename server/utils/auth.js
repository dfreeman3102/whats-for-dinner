const {GraphQLError} = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'my secret key';
const expiration = '2h';

module.exports = {
    AuthenticationError: new GraphQLError('Could Not authenticate user',   {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
     }),
    signToken: function({fullName, email, _id}) {
        const payload = {fullName, email, _id};
        return jwt.sign({data: payload}, secret, {expiresIn: expiration});
    }
};