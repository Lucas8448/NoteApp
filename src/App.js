import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import NoteForm from './components/NoteForm';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    const newNotes = [...notes, { title: note.title, text: note.text, id: Date.now() }];
    setNotes(newNotes);
  };

  const removeNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <NoteForm addNote={addNote} />
      <div className="grid gap-4">
        {notes.map((note) => (
          <Note key={note.id} title={note.title} text={note.text} removeNote={() => removeNote(note.id)} />
        ))}
      </div>
    </div>
  );
};

export default App;