const datos = require("../../../database/Datos.json")
const { hashPassword } = require("../../../utils/crypto");
const uuid = require('uuid');

const {students,notes} = datos

const addStudentCont = (params) => {
  if(students.find(student => student.name === params.name)){
    throw new Error("Name must be unique")
  }
  const hashedPassword = hashPassword(params.password); 
  const student = {
    ...params,
    id:uuid.v4(),
    password: hashedPassword
  }
  students.push(student)
  return student
}

const deleteStudentCont = (params) => {
  const newList =  students.filter(student => {
    return student.name == params.name})
  students = newList
  return `Student deleted sucsessfully`
}

module.exports = {
  deleteStudentCont,
  addStudentCont
}
