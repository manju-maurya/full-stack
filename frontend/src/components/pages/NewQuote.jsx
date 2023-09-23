import React, { useRef } from 'react'
import './NewQuote.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const NewQuote = () => {

  const navigate = useNavigate();
  const textRef = useRef();
  const authorRef = useRef();

  async function submitHandler(e){
    e.preventDefault();
    const text = textRef.current.value;
    const author = authorRef.current.value;

    await axios.post('http://localhost:5000/quotes', {text, author});
    navigate('/');
  }


  return (
    <div className='form-div'>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="author">Author:</label>
                <input type="text" id='author' ref={authorRef} placeholder="Author's Name" />
            </div>

            <div>
                <label htmlFor="text">Quote:</label>
                <textarea id="text" cols="30" rows="5" ref={textRef} placeholder='Write here...'></textarea>
            </div>

            <button>Add</button>
        </form>
    </div>
  )
}

export default NewQuote