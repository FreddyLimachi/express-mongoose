const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}

notesCtrl.getNote = async (req, res) => {
    const { id } = req.params;
    const note = await Note.findById(id)
    res.json(note)
}

notesCtrl.createNote = async (req, res) => {
    const { title, content, author} = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        author: author,
    })
    await newNote.save()
    res.json({msg: 'Note saved'})
}   

notesCtrl.updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content, author} = req.body;
    await Note.findOneAndUpdate(id, {
        title, author, content
    })
    res.json({msg: 'Note updated'})
}

notesCtrl.deleteNote = async (req, res) => {
    const { id } = req.params;
    await Note.findOneAndDelete(id)
    res.json({msg: 'Note deleted'})
}

module.exports = notesCtrl;