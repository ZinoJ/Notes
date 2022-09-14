import React, { useContext, useState } from "react";
import "./SearchNotes.css";
import { AiOutlineSearch } from "react-icons/ai";
import NoteContext from "./NoteContext";

function SearchNotes() {
   const {notes, setNotes} = useContext(NoteContext)
   const [search, setSearch] = useState('')

   const filterNotes = (searchValue)=> {
      setSearch(searchValue)
      const filtered = notes.filter((note) => note.Title.toLowerCase().includes(search.toLowerCase()))
      console.log(filtered);
      setNotes(filtered)
   }
   
  return (
    <div className="searchNotes">
      <AiOutlineSearch style={{ fontSize: "1.5em" }} />
      <input type="text" placeholder="Search notes" value={search} onChange={e => filterNotes(e.target.value)}/>
    </div>
  );
}

export default SearchNotes;
