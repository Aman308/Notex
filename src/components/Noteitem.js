import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import noteContext from "../context/notes/noteContext";
import "./style.css"


const NoteItem = (props) => {
  const context = useContext(noteContext)
   const {deleteNote} = context;
   const {note,updateNote} = props;
 
  return (
    <div className='col-md-3 my-3 '>
      <div className="card my-3 center  text-light  boxShadow" >
  <div className="card-body ">
    <div className="d-flex ">
    <h5 className="card-title ">{note.title}</h5>
    <DeleteIcon color="success" className='mx-2' onClick={()=>{deleteNote(note._id);props.showAlert("Deleted Sucessfully", "success");}}/>
    <EditNoteIcon color="success" sx={{ fontSize: 30 }} className='mx-2' onClick={()=>{updateNote(note);}}/>
    </div>
    <p className="card-text">  {note.description}</p>
    <p className="card-text">  {note.tag}</p>
 
   
  </div>
</div>
    </div>
  )
}

export default NoteItem
