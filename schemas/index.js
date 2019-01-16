const { gql } = require('apollo-server')

module.exports = gql`
  type Query {
    users: [User]
    user(id: Int!): User
    groups: [Group]
  }

  type Mutation {
    login(username: String!, password: String!): Session
  }

  type Session {
    token: String!
  }

  type User {
    id: Int!
    name: String!
    lastName: String!
    gender: Gender!
    username: String!
    email: String!
    roles: [Group]!
  }

  type Group {
    id: Int!
    name: String!
    users: [User]
    permissions: [Action]
  }

  type Action {
    id: Int!
    name: String!
    text: String!
    menu: Menu!
  }

  type Menu {
    id: Int!
    text: String!
    route: String!
    actions: [Action]
  }

  type App {
    id: Int!
    name: String!
    appid: String!
    token: String
    origin: String
  }

  enum Gender {
    M
    F
  }
`