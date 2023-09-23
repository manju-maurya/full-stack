import React from 'react'
import './Quote.css'
import {useNavigate} from 'react-router-dom'

const Quote = ({item}) => {

  const navigate = useNavigate();  

  function clickHandler(){
    navigate(`/show/${item._id}`)
  }  

  return (
    <article onClick={clickHandler} className='quote-card'>
        <img src={item.photo} alt="" />
        <div className='quote-card-body'>
            <h2>❝</h2>
            <p>{item.text}</p>
            <h3>{item.author}</h3>
        </div>
    </article>
  )
}

export default Quote