// importing the gql template
const { gql } = require('apollo-server-express');

// typeDefs creation
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    
  }
`;

// exporting typeDefs
module.exports = typeDefs;