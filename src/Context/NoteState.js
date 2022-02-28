import React, { createContext, useState } from "react";
import { getNotes, addNotes, deleteNotes } from "./Fetch";

export const NoteContext = createContext();

const NoteState = (props) => {
  const [note, setnote] = useState([]);
  const [isUpdateOpen, setisUpdateOpen] = useState(false);
  const [isNotePadOpen, setisNotePadOpen] = useState(false);
  const [update, setupdate] = useState("");

  //fetching notes
  const fetchNotes = () => {
    getNotes().then((res) => setnote(res));
  };

  // ADDING NOTES
  const added = (addnote) => {
    let b = Math.random()
    setnote(
      note.concat({
        _id: b,
        title: addnote.title,
        description: addnote.description,
        tags: "Genral",
      })
    );
    addNotes(addnote.title, addnote.description, addnote.tag)
  };

  // DELETING NOTES
  const deleted = (id) => {
    let newNotes = note.filter((note) => {
      return note._id !== id;
    });
    setnote(newNotes);
    deleteNotes(id);
  };

  // UPDATING NOTES
  let newNote = note
  const getNoteForUpdate =(id)=>{
    note.forEach(element => {
      if(element._id === id){
        setupdate(element)
      }
    });
  }
  const updateUi=(id,title,description,tag)=>{

    for (let i = 0; i < newNote.length; i++) {
      const element = newNote[i];
      if(element._id === id){
        element.title = title
        element.description = description
        element.tag = tag
        setnote(newNote)
      }
    }
  }
 

  return (
    <NoteContext.Provider value={{ note, added, fetchNotes, deleted,isUpdateOpen ,setisUpdateOpen,getNoteForUpdate,update,setupdate,updateUi,isNotePadOpen, setisNotePadOpen}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
