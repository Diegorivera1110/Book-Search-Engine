const express = require('express');
// importing ApolloSerrver
const { ApolloServer } = require('apollo-server-express');

// importing typeDefs and resolvers
const { typeDefs, resolvers } = require('./Schemas');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;
// creating new Apollo server passed in to our schema
const server = new ApolloServer({
  typeDefs,
  resolvers
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// creating new instance of Apollo server with GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate our Apollo server with the Express app as middleware
  server.applyMiddleware({ app });


// if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
  console.log(`🌍 Now listening on localhost:${PORT}`);
  // log where we can test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  })
});

// app.get('*', (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, './public/404.html'));
// })

// call the async function to start the server
startApolloServer(typeDefs, resolvers);