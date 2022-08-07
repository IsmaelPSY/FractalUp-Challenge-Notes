const datos = require("../../../database/Datos.json")

const {notes} = datos

const allMyNotesCont = (params) => {
  const myNotes = notes.filter(note => note.student_id===params.id)
  console.log("MYS NOTAS")
  if(params.status) return myNotes
  const {status} = params
  switch (status){
    case "COMPLETED":
      return myNotes.filter(note => note.status === true)
    break;
    case "NOT_COMPLETED":
      return myNotes.filter(note => note.status === false)
    break;
    default:
      return myNotes
  }
}

module.exports = {
  allMyNotesCont
}