import { createContext, useEffect, useState } from "react";

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([])

  return (
    <NoteContext.Provider value={{ notes, setNotes, deletedNotes, setDeletedNotes }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
