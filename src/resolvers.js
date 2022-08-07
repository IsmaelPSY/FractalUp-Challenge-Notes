// --> Controllers for students <--
//Querys
import {
  studentCount,
  allStudents,
  findStudent
} from './students/Controllers/querys/querys.js';

// Mutations
//  import {
//    addStudent,
//    deleteStudent
//  } from './students/Controllers/mutations/controller.js';


// --> Controllers for Notes <--
//Querys
// import {

// } from './notes/Controllers/querys/controller.js'
//Mutations
// import {

// } from './notes/Controllers/querys/controller.js'

export const resolvers = {
  Query:{
    studentCount: studentCount,
    allStudents: allStudents,
    findStudent: findStudent
  },

  // Mutation:{
  //   addStudent: addStudent,
  //   removeStudent : deleteStudent
  // },

  Student : {
    info: (root )=> `Hola mi nombre es ${root.name} tengo ${root.age} 
                    años de edad, vivo en ${root.street}, ${root.city},
                    y estudio en la ${root.uni}
                    `,
    address : (root) => {
      return {
        "city" : root.city,
        "street" : root.street
      }
    }
  }
};
