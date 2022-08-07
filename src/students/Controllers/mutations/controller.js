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

const deleteStudentCont = (id) => {
  const studentIndex = students.findIndex( student => student.id == id);
  if(studentIndex == -1) throw new Error("User not found");
  students.splice(studentIndex,1)
  return students
}

const editStudentDirCont = (params) => {
  const {id,city,street} = params
  const studentIndex = students.findIndex( student => student.id == id);
  if(studentIndex == -1) throw new Error("User not found");
  
  const student  = students[studentIndex]
  const updatedStudent = {...student,city:city,street:street}

  students[studentIndex] = updatedStudent

  return updatedStudent
}

module.exports = {
  deleteStudentCont,
  addStudentCont,
  editStudentDirCont
}
