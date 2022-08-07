const { toPromise } = require('../../../utils/toPromise.js')
const {
  addStudentCont,
  deleteStudentCont,
  editStudentDirCont
} = require('./controller.js');

const addStudent = async (root,params) => {
  const students = addStudentCont(params)
  return students
}

const deleteStudent = (root,params) => {
  const {id} = params
  const students = deleteStudentCont(id)
  return students
}

const editStudentDir = async(root, params) => {
  const student = editStudentDirCont(params)
  return student
}

module.exports = {
  addStudent,
  deleteStudent,
  editStudentDir
}