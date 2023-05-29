import React from 'react';

const Note = ({ title, text, removeNote }) => {
  return (
    <div className="p-5 border rounded">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <pre className="whitespace-pre-wrap break-words">{text}</pre>
      <button onClick={removeNote} className="bg-red-500 text-white rounded p-2 mt-2">
        Remove Note
      </button>
    </div>
  );
};

export default Note;