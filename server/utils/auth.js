// Import necessary modules
const { GraphQLError } = require("graphql"); // For custom GraphQL errors
const jwt = require("jsonwebtoken"); // For handling JSON Web Tokens (JWT)

// Define constants for JWT secret and expiration time
const secret = "mysecret"; // Secret key for signing tokens
const expiration = "2h"; // Token expiration time (2 hours)

module.exports = {
  // Custom error for authentication issues
  AuthenticationError: new GraphQLError("Authentication Error", {
    extensions: {
      code: "UNAUTHENTICATED", // Error code for unauthenticated access
    },
  }),

  // Function to sign a JWT with user information
  signToken: function ({ fullName, email, _id }) {
    const payload = { fullName, email, _id }; // Create payload with user details
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration }); // Sign the token
  },

  // Middleware function for authenticating users via JWT
  authMiddleware: function ({ req }) {
    // Extract token from request body, query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // If token is found in headers, remove the "Bearer " prefix
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    // If no token is found, return the request object unmodified
    if (!token) {
      return req;
    }

    // Try to verify the token
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration }); // Verify the token and extract payload
      req.user = data; // Attach user data to request object
    } catch {
      console.log("Invalid token"); // Log error if token is invalid
    }

    return req; // Return the modified request object
  },

  // Function to verify a token directly
  verifyToken: function (token) {
    return jwt.verify(token, secret, { maxAge: expiration }); // Verify token and return payload
  },
};
