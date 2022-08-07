const {
  allMyNotesCont
} = require('./controller.js')

const allMyNotes = (root,params) => {
  const {id} = params
  const notes = (allMyNotesCont(id))
  return notes
}

module.exports = {
  allMyNotes
}