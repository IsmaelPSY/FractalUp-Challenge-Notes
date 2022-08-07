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
  notes.splice(noteIndex,1)
  return "Note deleted sucessfully"
}

const editNoteStatusCont = (params) => {
  const {status,id} = params
  const noteIndex = notes.findIndex( note => note.id == id);
  if(noteIndex == -1) throw new Error("Note not found");
  
  const note = notes[noteIndex]
  const updatedNote = {...note,status:status}

  notes[noteIndex] = updatedNote

  return updatedNote
}

module.exports = {
  addNoteCont,
  deleteNoteCont,
  editNoteStatusCont
}