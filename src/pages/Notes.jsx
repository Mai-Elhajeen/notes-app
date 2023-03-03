import React, { useState, useEffect } from 'react'
import { CiSearch } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import NoteItem from '../components/NoteItem';

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filteredNotes, setFilteredNote] = useState(notes);

  const handelSearch = () => {
    // eslint-disable-next-line array-callback-return
    setFilteredNote(notes.filter(note => {
      if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
        return note;
      }
    }))
  }
  useEffect(handelSearch, [notes, text])
  
  return (
    <section>
      <header className='notes-header'>
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && <input type='text' value={text} onChange={(e) => { setText(e.target.value); handelSearch() }} autoFocus placeholder='search...' />}
        <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>{showSearch ? <IoMdClose /> : <CiSearch />}</button>
      </header>
      <div className='notes-container'>
        {filteredNotes.length === 0 && <p className='empty-notes'>Notes Not Found</p>}
        {filteredNotes.map(note => <NoteItem key={note.id} note={note} />)}
      </div>
      <Link to='/create-note' className='btn add-btn'><BsPlusLg /></Link>
    </section>
  )
}

export default Notes