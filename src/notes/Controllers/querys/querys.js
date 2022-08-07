const {
  allMyNotesCont
} = require('./controller.js')

const allMyNotes = (root,params) => {
  const notes = allMyNotesCont(params)
  return notes
}

module.exports = {
  allMyNotes
}