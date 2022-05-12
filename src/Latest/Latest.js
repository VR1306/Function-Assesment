import React from 'react'
import './Latest.css'
import Nike from './Assets/Nike.png'
import figma from './Assets/figma.png'
import kronos from './Assets/kronos.png'

function Latest() {
  return (
    <div>


       <div className='LATEST'>
         <label>LATEST NEWS</label>
       </div>


<div className='imgflex'>

      <div className='Nike'>
        
      <div>
        <img src={Nike} className='imgmar my-5  mx-4'></img>
      </div>

      <div>
        <div> <label className='Date'> 01 Jan, 2015</label></div>
        <div><label className='fas'>Fashion Industry</label></div>
        <div>
        <div>
                <div className='content12'>Lorem Ipsum is simply </div>
                <div className='content12'> dummy text of the</div>
                <div className='content12'>printing and typesetting</div>
                <div className='content12'>industry.</div>
            </div>
        </div>
      </div>
      
      </div>








      <div className='Nike'>
        
        <div> 
          <img src={figma} className='imgmar mt-5 mx-4'></img>
        </div>
  
        <div>
          <div> <label className='Date'> 01 Jan, 2015</label></div>
          <div><label className='fas'>Best Design Tools</label></div>
          <div>
          <div>
                  <div className='content12'>Lorem Ipsum is simply </div>
                  <div className='content12'> dummy text of the</div>
                  <div className='content12'>printing and typesetting</div>
                  <div className='content12'>industry.</div>
              </div>
          </div>
        </div>
        
        </div>



        <div className='Nike'>
        
        <div>
          <img src={kronos} className='imgmar mt-5 mx-4'></img>
        </div>
  
        <div>
          <div> <label className='Date'> 01 Jan, 2015</label></div>
          <div><label className='fas'>HR Community</label></div>
          <div>
          <div>
                  <div className='content12'>Lorem Ipsum is simply </div>
                  <div className='content12'> dummy text of the</div>
                  <div className='content12'>printing and typesetting</div>
                  <div className='content12'>industry.</div>
              </div>
          </div>
        </div>
        
        </div>




        </div>
      
    </div>
  )
}

export default Latest