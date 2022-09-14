import React, { useContext } from 'react'
import AddNote from './AddNote'
import Note from './Note'
import NoteContext from './NoteContext'
import './Notes.css'

function Notes() {
   const {notes} = useContext(NoteContext)
   
  return (
    <div className="notes">
      {notes.map(({newNote,id,datePosted}) => (
         <Note title={newNote} datePosted={datePosted} id={id} key={id}/>
      ))}
      <AddNote />

    </div>
  )
}

export default Notes