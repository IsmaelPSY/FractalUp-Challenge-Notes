const datos = require("../../../database/Datos.json")

const {students} = datos

const studentCountCont = () => {
  return students.length;
}

const allStudentsCont = () => {
return students
} 

const findStudentCont = (name) => {
  return students.find(student => student.name === name)
}

module.exports = {
  allStudentsCont,
  findStudentCont,
  studentCountCont
}
