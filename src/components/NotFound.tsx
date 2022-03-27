import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';

function NotFound() {
  return (
    <div className='App-container'>Hittar inte det du söker.... Tryck <Link to={`/`}><button className='btn' >här!</button></Link>
     för att komma tillbaka</div>
  )
}

export default NotFound