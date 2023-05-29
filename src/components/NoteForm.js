import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !text) return;
    addNote({ title, text });
    setTitle('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 bg-gray-100 rounded">
      <input
        type="text"
        value={title}
        placeholder="Note title..."
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        value={text}
        placeholder="Note content..."
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;