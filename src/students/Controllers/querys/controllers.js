import datos from '../../../database/Datos.json'

const {students} = datos

export const studentCountCont = async () => {
  const students = await models.students.count();
  return students;
}

export const allStudentsCont = async() => {
  const students = await models.students.findAll({
    attributes: {
        exclude: ['password'],
    },
});
return students
} 

export const findStudentCont = (name) => {
  const students = models.students.findOne({
    where: {name},
    attributes: {
      exclude: ['password'],
    },
  })
  return students
}


