import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import NoteContext from "./NoteContext";

function DeletedNote({ title, datePosted, id }) {
  const { setDeletedNotes, deletedNotes } = useContext(NoteContext);

  const deletePermanently = () => {
    const newNotes = deletedNotes.filter((note) => note.id !== id);
    setDeletedNotes(newNotes);
  };

  return (
    <div className="note">
      <p>{title}</p>
      <div className="note__footer">
        <h5>{datePosted}</h5>
        <MdDelete
          style={{ fontSize: "1.5em" }}
          onClick={() => deletePermanently(id)}
        />
      </div>
    </div>
  );
}

export default DeletedNote;
