const {gql} = require('apollo-server');

const typeDefs = gql`

enum Place {
  LIMA
  PUERTO_MALDONADO
}

enum isDone {
  COMPLETED
  NOT_COMPLETED
}

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

type Note {
  course: String!
  message: String!
  status: Boolean!
  student_id: ID!
  id: ID!
}

type Query{
  
  studentCount: Int!
  allStudents(city: Place): [Student]!
  findStudent(name: String!): Student!

  allMyNotes(
    id:ID!
    status: isDone
  ): [Note]!
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
  
  deleteStudent(
    id: ID!
  ): String!

  editStudentDir(
    id: ID!
    city: String!
    street: String!
  ): Student!

  addNote(
    student_id: ID!
    course: String!
    message: String!
    status: Boolean!
  ): Note!

  deleteNote(
    id: ID!
  ): String!

  editNoteStatus(
    id: ID!,
    status: Boolean!
  ): Note!

}
`
module.exports = {
  typeDefs
}