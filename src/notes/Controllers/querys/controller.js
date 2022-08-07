const datos = require("../../../database/Datos.json")

const {notes} = datos

const allMyNotesCont = (id) => {
  return notes.filter(note => note.student_id===id)
}

module.exports = {
  allMyNotesCont
}