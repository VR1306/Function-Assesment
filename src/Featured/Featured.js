import React from 'react'
import './Featured.css'
import blue from './Assets/blue.png'
import {AiFillStar}from "react-icons/ai";

function Featured() {
  return (
    <div>
        <div className='feat'> 
            <label >FEATURED PRODUCTS</label>
        </div>



        <div className='d-flex mt-5 dock'>

        <div className='imgalign'>

          <div>
           <img src={blue}></img>
            </div>

            <div>
    
                <label className='blue  mx-3'>Blue Swade Nike</label><br></br>
                <label className='blue mx-3'>Sneakers</label>

                <div className='mt-3  mx-3'>
                <AiFillStar color='#FFC600'className='ms-2'/>
                <AiFillStar color='#FFC600'className='ms-2'/>
                <AiFillStar color='#FFC600'className='ms-2'/>
                <AiFillStar color='#FFC600'className='ms-2'/>
                <AiFillStar color='#C1C8CE'className='ms-2'/>
                </div>

                <div className='mt-2  mx-4'>
                    <label className='red'>$499</label>
                    <label className='grey'>$599</label>
                </div>
             </div>   

         

           
        </div>




        <div className='imgalign1'>

          <div>
           <img src={blue}></img>
            </div>

            <div>
    
                <label className='blue  mx-3'>Blue Swade Nike</label><br></br>
                <label className='blue  mx-3'>Sneakers</label>

                <div className='mt-3  mx-3'>
                <AiFillStar color='#FFC600'className='ms-2'/>
                <AiFillStar color='#FFC600'className='ms-2'/>
                <AiFillStar color='#FFC600'className='ms-2'/>
                <AiFillStar color='#FFC600'className='ms-2'/>
                <AiFillStar color='#C1C8CE'className='ms-2'/>
                </div>

                <div className='mt-2  mx-4'>
                    <label className='red'>$499</label>
                    <label className='grey'>$599</label>
                </div>
             </div>   

         

           
        </div>



        <div className='imgalign2'>

<div>
 <img src={blue}></img>
  </div>

  <div>

      <label className='blue  mx-3'>Blue Swade Nike</label><br></br>
      <label className='blue  mx-3'>Sneakers</label>

      <div className='mt-3  mx-3'>
      <AiFillStar color='#FFC600'className='ms-2'/>
      <AiFillStar color='#FFC600'className='ms-2'/>
      <AiFillStar color='#FFC600'className='ms-2'/>
      <AiFillStar color='#FFC600'className='ms-2'/>
      <AiFillStar color='#C1C8CE'className='ms-2'/>
      </div>

      <div className='mx-4 mt-2'>
          <label className='red'>$499</label>
          <label className='grey'>$599</label>
      </div>
   </div>   



 
</div>

        </div>
    </div>
  )
}

export default Featured