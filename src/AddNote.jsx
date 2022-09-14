import React, { useState, useContext } from "react";
import "./AddNote.css";
import { v4 as uuidv4 } from "uuid";
import NoteContext from "./NoteContext";

function AddNote() {
  const { setNotes } = useContext(NoteContext);
  const [newNote, setNewNote] = useState("");
  let datePosted = new Date().toLocaleDateString();
  const characterLimit = 200;

  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      newNote,
      datePosted,
      id: uuidv4(),
    };
    if (newNote.trim().length > 0) {
      setNotes((prevNotes) => [...prevNotes, noteObject]);
    }
    setNewNote("");
  };

  

  return (
    <div className="addNote">
      <textarea
        name=""
        id=""
        cols="30"
        rows="8"
        placeholder="Enter your note"
        value={newNote}
        maxLength={characterLimit}
        onChange={(e) => setNewNote(e.target.value)}
      />

      <div className="note__footer">
        <small>{characterLimit - newNote.length} remaining</small>
        <button type="submit" onClick={addNote}>
          Add Note
        </button>
      </div>
    </div>
  );
}

export default AddNote;
