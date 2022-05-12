import React from "react";
import Bag from './Asserts/Bag.png'
import Shoe1 from './Asserts/Shoe1.png'
import Shoe2 from './Asserts/Shoe2.png'
import './Chords.css'

function Chords() {
  return (
    <div className="container">
      <div className="position-relative d-flex">
       <div className="col-12 col-md-4">
           <div className="box ms-5"> 
           <div className="imgcont1 ms-5">FS - QUILTED MAXI </div>
           <label className="imgcont1 ms-5">CROSS BAG </label>
            
           <img src={Bag} width='370' height='300' className="ms-2"></img>
           <div className="d-flex">
           <div className="d-flex ">
           <div className="imgcon1 ms-5">$534,33</div>
           <div className="imgco1 ms-5">24% Off</div>
           </div>
           
           <div className="imgc1 mt-4 ms-3">$299,43</div>
           </div>
           </div> 
           </div>




           <div className="col-12 col-md-4">

          <div className="box2 ms-5">
         <div className="container">  
         <div className="d-flex justify-content-center">
         <div>
         <div className="imgcont2">FS - Nike Air</div>
         <div className="imgcont2">Max 270 React... </div>
         </div>      
        
        <div className="imgc2">$299,43</div>
        </div>
        
        <img src={Shoe1} width='370' height='300'></img>
        <div className="d-flex justify-content-around mt-5">
        <div className="imgcon2">$534,33</div>
        <div className="imgco2">24% Off</div>
        </div> 
        </div> 
        </div>
        </div>


        <div className="col-12 col-md-4">
        <div className="box3 ms-5">
         <div className="container">   
        <div className="imgcont2">FS - Nike Air</div>
         <div className="imgcont2">Max 270 React... </div>
        
         <div className="d-flex justify-content-center">
         <div className="imgcon2  ms-5">$534,33</div>
        <div className="imgco2 ms-5">24% Off</div>
         <div>
         
  
         </div>      
        </div>
        
        <img src={Shoe2} width='370' height='300'></img>
        <div>
        <div className="imgc2 text-end">$299,43</div>
        </div> 
        </div>
        </div>
        </div>

        </div>   
    </div>
  );
}

export default Chords;
