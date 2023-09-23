import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Quote from '../Quote/Quote';

const AllQuotes = () => {

  const [quotes, setQuotes] = useState([]);

  async function getData(){
    const res = await axios.get('http://localhost:5000/quotes');
    setQuotes(res.data);
  }

  useEffect(()=>{
    getData();
  }, [])

  return (
    <div style={{display:'flex', gap:'10px', flexWrap:'wrap', justifyContent:'center', marginTop:'10px'}}>
        {quotes.map(item => {
          return <Quote key={item._id} item={item} />
        })}
    </div>
  )
}

export default AllQuotes