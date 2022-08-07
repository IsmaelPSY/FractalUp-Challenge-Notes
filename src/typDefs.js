const {gql} = require('apollo-server');

const typeDefs = gql`
type Address {
  city: String!
  street: String
}

type Student {
  email: String!
  password: String!
  name: String!
  age: Int
  uni: String!
  address : Address!
  info : String!
  id: ID!
}

type Notes {
  course: String!
  message: String!
  done: Boolean
  student_id: ID!
  id: ID!
}

type Query{
  
  studentCount: Int!
  allStudents: [Student]!
  findStudent(name: String!): Student!

  allMyNotes(id:ID!): [Notes]!
}

type Mutation{
  addStudent(
    email: String!
    password: String!
    name: String!
    age: Int
    city: String!
    street: String
    uni: String!
    ): Student!
  removeStudent(
    name: String
  ): String
}
`
module.exports = {
  typeDefs
}