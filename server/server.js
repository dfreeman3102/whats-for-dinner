const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Use the Apollo Server middleware
  app.use('/graphql', expressMiddleware(server));

  // Serve static files in production
  if (process.env.NODE_ENV === 'production') {
    // Serve static files from the React app
    app.use(express.static(path.join(__dirname, '../client/dist')));

    // Handle React routing, return all requests to the React app
    app.get('*', (req, res) => {
        const filePath = path.join(__dirname, '../client/dist', 'index.html');
        console.log(`Serving file: ${filePath}`);
        res.sendFile(filePath, (err) => {
          if (err) {
            console.error('Error serving file:', err);
            res.status(500).send(err);
          }
        });
      });
    }
      
  // Start the database and then the server
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
