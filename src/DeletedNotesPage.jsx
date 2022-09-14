import React, { useContext } from 'react'
import DeletedNote from './DeletedNote'
import NoDeleted from './NoDeleted'
import NoteContext from './NoteContext'

function DeletedNotesPage() {
   const {deletedNotes} = useContext(NoteContext)

  return (
    <div className="notes">
     
      {deletedNotes.length === 0 ? <NoDeleted /> : deletedNotes.map(({newNote,id,datePosted}) => (
         <DeletedNote title={newNote} datePosted={datePosted} id={id} key={id}/>
      ))}

    </div>
  )
}

export default DeletedNotesPage