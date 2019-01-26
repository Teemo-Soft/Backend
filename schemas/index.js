const { gql } = require('apollo-server')

module.exports = gql`

type Query {
  Users: [User]
  User(id: Int!): User
  Groups: [Group]
}

type Mutation {
  login(username: String!, password: String!): Session
  loginGoogle(tokenG: String!): Session
  registerPublic(names: String!, lastnames: String!, identification: String!,gender: String!, username: String!, password: String!, email: String!): User
}

type User {
  id: Int
  names: String
  lastnames: String
  identification: String
  username: String
  gender: Gender
  email: String
  roles: [Group]
}

type Permission {
  id: Int
  groupId: Int
  actionId: Int
}

type Group {
  id: Int!
  name: String!
  users: [User]
  permissions: [Permission]
}

enum Gender{
  F
  M
}

type Session{
  token: String!
}
`