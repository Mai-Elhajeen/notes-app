import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io'
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';
import useCreateDate from '../components/useCreateDate';


const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handelForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date};

      const newNotes = notes.map(item => {
        if (item.id === id) {
          item = newNote;
        }
        return item
      })
      setNotes(newNotes)
    }
    navigate('/')
  }
  return (
    <section>
      <header className='create-note-header'>
        <Link to='/' className='btn'><IoIosArrowBack /></Link>
        <button className='btn lg primary' onClick={handelForm}>Save</button>
        <button className='btn danger'><MdDelete /></button>
      </header>
      <form className='create-note-form' onSubmit={handelForm}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)} autoFocus />
        <textarea rows={28} placeholder='Note details...' value={details} onChange={(e)=> setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default EditNote