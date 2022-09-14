import React, { useContext, useState } from "react";
import "./Note.css";
import { MdDelete } from "react-icons/md";
import NoteContext from "./NoteContext";

function Note({ title, datePosted, id }) {
   
  const { setNotes, notes, setDeletedNotes } =
    useContext(NoteContext);

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    const deletedNote = notes.find((note) => note.id == id);
    setNotes(newNotes);
    setDeletedNotes(state => [...state, deletedNote]);
  };

  return (
    <div className="note">
      <p>{title}</p>
      <div className="note__footer">
        <h5>{datePosted}</h5>
        <MdDelete
          style={{ fontSize: "1.5em" }}
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
}

export default Note;
