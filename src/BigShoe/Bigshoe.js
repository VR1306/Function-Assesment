import React from 'react'
import BigShoes from './Assets/BigShoes.png'
import './BigShoe.css'

function BigS() {
  return (
      <div>
          
    
    <div className='padblue row'>
        <div className='col-5'>
        <div className='Adidas'>
       
            <label>Adidas Men Running </label><br></br>
            <label>Sneakers</label>
        </div>
        
        <div className='design'>
        <label>Performance and design. Taken right to the edge. </label><br></br>
        </div>

        <div className='Shop'>
            <label> Shop Now</label>
            <div className='underline'></div>
        </div>
    </div>

    <div  className='col-6'><img src={BigShoes} className='Shoe'></img></div>

    </div>
    </div>
  )
}

export default BigS