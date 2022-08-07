const datos = require("../../../database/Datos.json")

const {students} = datos

const studentCountCont = () => {
  return students.length;
}

const allStudentsCont = (params) => {
  if(!params.city) return students
  const {city} = params
  switch (city){
    case "PUERTO_MALDONADO":
      return students.filter(student => student.city === 'Puerto Maldonado')
    break;
    case "LIMA":
      return students.filter(student => student.city === 'Lima')
    break;
    default:
      return students
  }

} 

const findStudentCont = (name) => {
  return students.find(student => student.name === name)
}

module.exports = {
  allStudentsCont,
  findStudentCont,
  studentCountCont
}
