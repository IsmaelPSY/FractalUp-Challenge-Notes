import datos from "../../../database/Datos.json" assert {type : "json"}

import {v4 as uuid} from 'uuid';

const {students,notes} = datos

export const addStudent = (root,params) => {
  const {name} = params
  if(students.find(student => student.name === name)){
    throw new Error("Name must be unique")
  }
  const student = {...params,id:uuid()}
  students.push(student)
  return student
}

export const deleteStudent = (root,params) => {
  const {name} = params
  const newList =  students.filter(student => {
    console.log(student)
    return student.name == name})
  console.log(newList)
  students = newList
  console.log(students)
  return `Student ${name} deleted sucsessfully`
}
