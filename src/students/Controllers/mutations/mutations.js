const { toPromise } = require('../../../utils/toPromise.js')
const {
  addStudentCont,
  // deleteStudentCont
} = require('./controller.js');

const addStudent = async (root,params) => {
  const [students,err] = await toPromise(addStudentCont(params))
  if (err || !students) {
    throw new Error("Something failed")
  };
  return students
}

module.exports = {
  addStudent
}