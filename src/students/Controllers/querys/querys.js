const { toPromise } = require('../../../utils/toPromise.js')
const {
  studentCountCont,
  allStudentsCont,
  findStudentCont
} = require('./controllers.js');

const studentCount = async() => {
  const students = studentCountCont()
  return students
} 

const allStudents = async(root,params) => {
  const students = allStudentsCont(params)
  return students 
}

const findStudent = async(root,params) => {
  const { name } = params
  const students = findStudentCont(name)
  return students 
}

module.exports = {
  studentCount,
  allStudents,
  findStudent
}

