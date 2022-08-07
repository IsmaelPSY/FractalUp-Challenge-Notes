const datos = require("../../../database/Datos.json")
const uuid = require('uuid');

const {notes} = datos

const addNoteCont = (params) => {
  const note = {
    ...params,
    id:uuid.v4(),
  }
  notes.push(note)
  return note
}

const deleteNoteCont = (id) => {
  const noteIndex = notes.findIndex( note => note.id == id);
  if(noteIndex == -1) throw new Error("Note not found");
  notes.splice(studentIndex,1)
  return "Note deleted sucessfully"
}

const editNoteStatusCont = (params) => {
  const {status,id} = params
  const studentIndex = notes.findIndex( note => note.id == id);
  if(noteIndex == -1) throw new Error("Note not found");
  
  const note = notes[studentIndex]
  const updatedNote = {...note,status:status}

  notes[statusIndex] = updatedNote

  return updatedStudent
}

module.exports = {
  addNoteCont,
  deleteNoteCont,
  editNoteStatusCont
}