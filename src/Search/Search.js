import React from 'react'
import './Search.css'

function Search() {
  return (
    <div className='mt-5 p-5 OVERALL'>
        <input type='text' placeholder='Search query...' className='textbocs'></input>
        <button className='btnw'>Search</button>
    </div>
  )
}

export default Search