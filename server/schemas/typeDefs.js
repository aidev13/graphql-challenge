const typeDefs = `

type Query {
  me: [User]
  mine(meId: ID): User

}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(bookInput: BookInput!): User
  removeBook(bookId: ID!): User
}

type User {
  _id: ID
  username: String!
  email: String!
  password: String!
  savedBooks: [Book]
}

type Book {
  bookId: ID
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}

type Auth {
  token: ID
  user: User
}

input BookInput {
  authors: [String]
  description: String
  title: String
  bookId: ID
  image: String
  link: String
}

`

module.exports = typeDefs;