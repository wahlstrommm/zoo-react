import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';

function NotFound() {
  return (<div className='Nofound'>
    <div className='App-container'>Hittar inte det du söker.... Tryck <Link to={`/main`}><button className='btn' >här!</button></Link>
     för att komma tillbaka</div>
  </div>
  )
}

export default NotFound