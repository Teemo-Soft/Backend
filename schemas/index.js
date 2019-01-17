const { gql } = require('apollo-server')

module.exports = gql`
type User {
  id: Int
  name: String
  lastname: String
}

type Mutation {
  insert(name: String!, lastname: String!): String
}

type Query {
  Users: [User]
  User(id: Int!): User
}
`