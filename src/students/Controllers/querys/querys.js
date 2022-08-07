import { toPromise } from '../../../utils/toPromise.js'
import {
  studentCountCont,
  allStudentsCont,
  findStudentCont
} from './controllers.js'

export const studentCount = async() => {
  const [students,err] = await toPromise(studentCountCont())
  if (error || !students) {
    throw new Error("Something failed")
  };
  return students
} 

export const allStudents = async() => {
  const [students,err] = await toPromise(allStudentsCont())
  if (error || !students) {
    throw new Error("Something failed")
  };
  return students 
}

export const findStudent = async(root,params) => {
  const { name } = params
  const [students,err] = await toPromise(findStudentCont(name))
  if (error || !students) {
    throw new Error("Something failed")
  };
  return students 
}

