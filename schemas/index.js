const { gql } = require('apollo-server')

module.exports = gql`
type User {
  id: Int
  names: String
  lastnames: String
  username: String
  gender: Gender
  email: String
  roles: [Group]
}

type Group {
  id: Int!
  name: String!
  users: [User]
}

enum Gender{
  F
  M
}

type Mutation {
  register(names: String!, lastnames: String!): String
}

type Query {
  Users: [User]
  User(id: Int!): User
  Groups: [Group]
}
`