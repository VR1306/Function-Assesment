import React from 'react'
import './FreeShipping.css'
import truck from './Assets/truck.jpg'
import Dollar from './Assets/Dollar.jpg'
import Customer from './Assets/Customer.jpg'

function Freeship() {
  return (
    <div>

        <div >
            <div className='Ship'>
            <div className='image'><img src={truck}></img></div>
            <div className='image'><img src={Dollar}></img></div>
            <div className='image'><img src={Customer}></img></div>
           
        </div>
        </div>


        <div >
            <div className='Ship1 mt-4'>
             <div><label className='Free'>FREE SHIPPING</label></div>
            <div><label className='Free'>100% REFUND</label></div>
            <div><label className='Free'>Support 24/7</label></div>
        </div>
        </div>


        <div >
            <div className='Ship2 ms-4'>
            
          
            <div>
                <div className='Lorem'>Lorem Ipsum is simply </div>
                <div className='Lorem'> dummy text of the</div>
                <div className='Lorem'>printing and typesetting</div>
                <div className='Lorem'>industry.</div>
            </div>

            <div>
                <div className='Lorem'>Lorem Ipsum is simply </div>
                <div className='Lorem'> dummy text of the</div>
                <div className='Lorem'>printing and typesetting</div>
                <div className='Lorem'>industry.</div>
            </div>


            <div>
                <div className='Lorem'>Lorem Ipsum is simply </div>
                <div className='Lorem'> dummy text of the</div>
                <div className='Lorem'>printing and typesetting</div>
                <div className='Lorem'>industry.</div>
            </div>

        </div>
        </div>
       

    </div>
  )
}

export default Freeship