import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
        <h2>Quote App</h2>
        <ul>
            <li><Link to="/">All Quotes</Link></li>
            <li><Link to="/new">New Quote</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation