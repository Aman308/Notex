import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import {useNavigate} from 'react-router-dom';


const Notes = (props) => {
    const context = useContext(noteContext);
  const {notes, getNotes ,editNote} = context;
  const ref = useRef(null)
  const refClose = useRef(null)
  let navigate = useNavigate();
  const [note, setNote] = useState({id :"" ,etitle:"", edescription:"" ,etag:""})
  useEffect(() => {
  
    if (localStorage.getItem('token')) {
      // console.log(localStorage.getItem('token'))
      getNotes()
    } else {
      navigate('/login')
      props.showAlert("Please Login First", "error")
      // console.log(localStorage.getItem('token'))
    }
    // eslint-disable-next-line 
  }, [])
  const updateNote = (currentNote) =>{
    ref.current.click();
    setNote({id: currentNote._id ,etitle: currentNote.title, edescription: currentNote.description , etag: currentNote.tag})
    console.log('clicked')
  }
  const handleclickupdate = (e)=>{
    editNote(note.id , note.etitle , note.edescription , note.etag)
    refClose.current.click();
    props.showAlert("Updated Sucessfully", "success");
   
}
const onChange = (e) =>{
    setNote({...note,[e.target.name]: e.target.value})
}
  return (
    <>
    <AddNote showAlert={props.showAlert} />
    <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content bg-black text-light">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" className="btn-close btn btn-primary bg-success" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
<div className="mb-3">
  <label htmlFor="etitle" className="form-label">Title</label>
  <input type="text" className="form-control bg-black text-light border border-success p-2 mb-2 border-opacity-75" id="etitle" name='etitle' aria-describedby="emailHelp" value={note.etitle} onChange={onChange} minLength={2} required/>
  
</div>
<div className="mb-3">
  <label htmlFor="edescription" className="form-label ">Description</label>
  <input type="text" className="form-control bg-black text-light border border-success p-2 mb-2 border-opacity-75" id="edescription" name='edescription' value={note.edescription} onChange={onChange} minLength={5} required/>
</div>
<div className="mb-3">
  <label htmlFor="etag" className="form-label">Tag</label>
  <input type="text" className="form-control bg-black text-light border border-success p-2 mb-2 border-opacity-75" id="etag" name='etag' value={note.etag} onChange={onChange}/>
</div>


</form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length <2 || note.edescription.length<5} onClick={handleclickupdate} type="button" className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>
    <div className="row my-4 mt-3">
      <h3 style={{marginTop: '34px'}}>Your Notes</h3>
      <div className="container">
      {notes.length===0 && 'Write A Note To Display'}
      </div>
      {notes.map((note)=>{
        return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note}/>
      })}
      </div>  
     
      </>  
  )
}

export default Notes
