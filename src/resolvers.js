// --> Controllers for students <--
//Querys
const {
  studentCount,
  allStudents,
  findStudent
} = require('./students/Controllers/querys/querys.js');

// Mutations
 const {
   addStudent
  //  deleteStudent
 } = require('./students/Controllers/mutations/mutations.js');


// --> Controllers for Notes <--
//Querys
 const {
  allMyNotes
 } = require('./notes/Controllers/querys/querys.js');
//Mutations
// import {

// } from './notes/Controllers/querys/controller.js'

const resolvers = {
  Query:{
    studentCount: studentCount,
    allStudents: allStudents,
    findStudent: findStudent,

    allMyNotes: allMyNotes
  },

  Mutation:{
    addStudent: addStudent,
    // deleteStudent: deleteStudent
  },

  Student : {
    info: (root )=> `Hola mi nombre es ${root.name} tengo ${root.age} años de edad, vivo en ${root.street}, ${root.city}, y estudio en la ${root.uni}`,
    address : (root) => {
      return {
        "city" : root.city,
        "street" : root.street
      }
    }
  }
};

module.exports = {
  resolvers
}
