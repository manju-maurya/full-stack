import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditQuote = () => {

//   const [quote, setQuote] = useState({});
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  
  const params = useParams();
  const navigate = useNavigate();

  async function getData(){
    const res = await axios.get(`http://localhost:5000/quotes/${params.id}`);
    setAuthor(res.data.author);
    setText(res.data.text);
  }
  
  async function submitHandler(e){
    e.preventDefault();
    console.log('inside submit')
    const res = await axios.patch(`http://localhost:5000/quotes/${params.id}/edit`, {text, author});
    navigate('/')
  }

  useEffect(()=>{
    getData();
  }, [])

  return (
    <div className='form-div'>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="author">Author:</label>
                <input type="text" id='author' placeholder="Author's Name" value={author} onChange={e => setAuthor(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="text">Quote:</label>
                <textarea id="text" cols="30" rows="5" placeholder='Write here...' value={text} onChange={e => setText(e.target.value)} ></textarea>
            </div>

            <button>Save</button>
        </form>
    </div>
  )
}

export default EditQuote