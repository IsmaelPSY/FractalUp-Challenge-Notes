const {
  addNoteCont,
  deleteNoteCont,
  editNoteStatusCont
} = require('./controller')

const addNote = (root,params) => {
  const note = addNoteCont(params)
  return note
}

const deleteNote = (root,params) => {
  const {id} = params
  const message = deleteNoteCont(id)
  return message
}

const editNoteStatus = (root,params) => {
  const note = editNoteStatusCont(params)
  return note
}

module.exports = {
  addNote,
  deleteNote,
  editNoteStatus
}