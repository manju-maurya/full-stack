import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Show = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [quote, setQuote] = useState({});
  
  async function getQuote(){
    const res = await axios.get(`http://localhost:5000/quotes/${params.id}`)
    console.log(res);
    setQuote(res.data);
  }

  async function deleteHandler(id){
    await axios.delete(`http://localhost:5000/quotes/${id}`)
    navigate('/')
  }

  async function editHandler(id){
    navigate(`/${id}/edit`)
  }

  useEffect(()=>{
    getQuote();
  }, [])

  return (
    <article className='quote-card'>
        <img src={quote.photo} alt="" />
        <div className='quote-card-body'>
            <h2 style={{display:'flex', justifyContent:'space-between'}}>
              <span>❝</span> 
              <span>
                <span onClick={()=>{editHandler(quote._id)}} style={{fontSize:'2rem', cursor:'pointer', marginRight:'10px'}}>ed</span>
                <span onClick={()=>deleteHandler(quote._id)} style={{fontSize:'2rem', cursor:'pointer'}}>x</span>
              </span>
            </h2>
            <p>{quote.text}</p>
            <h3>{quote.author}</h3>
        </div>
    </article>
  )
}

export default Show