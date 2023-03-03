import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io'
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import useCreateDate from '../components/useCreateDate';

const CreateNote = ({setNotes}) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const date = useCreateDate();
  const navigate = useNavigate()

  const handelSubmit = (e)=>{
    e.preventDefault();
    if(title && details){
      const note = {id: uuid(), title, details, date};
      setNotes(prevNotes => [note, ...prevNotes])
      console.log(note);
      navigate('/');
    }
  }

  return (
    <section>
      <header className='create-note-header'>
        <Link to='/' className='btn'><IoIosArrowBack /></Link>
        <button className='btn lg primary' onClick={handelSubmit}>Save</button>
      </header>
      <form className='create-note-form' onSubmit={handelSubmit}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)} autoFocus />
        <textarea rows={28} placeholder='Note details...' value={details} onChange={(e)=> setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default CreateNote