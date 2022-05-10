import React, { useState, useEffect } from "react";
import item1 from "./Asserts/shoe1.jpg";
import item2 from "./Asserts/Bag1.jpg";
import item3 from "./Asserts/Belt1.jpg";
import item4 from "./Asserts/Glass1.jpg";
import item5 from "./Asserts/shoe2.jpg";
import item6 from "./Asserts/Bag2.jpg";
import item7 from "./Asserts/Belt2.jpg";
import item8 from "./Asserts/Glass2.jpg";
import item9 from "./Asserts/shoe3.jpg";
import item10 from "./Asserts/Bag3.jpg";
import item11 from "./Asserts/Belt3.jpg";
import item12 from "./Asserts/Glass3.jpg";
import item13 from "./Asserts/shoe4.jpg";
import item14 from "./Asserts/Bag4.jpg";
import item15 from "./Asserts/Belt4.jpg";
import item16 from "./Asserts/Glass4.jpg";
import item17 from "./Asserts/shoe5.jpg";
import item18 from "./Asserts/Bag5.jpg";
import item19 from "./Asserts/Belt5.jpg";
import item20 from "./Asserts/Glass5.jpg";
import item21 from "./Asserts/shoe6.jpg";
import item22 from "./Asserts/Bag6.jpg";
import item23 from "./Asserts/Belt6.jpg";
import item24 from "./Asserts/Glass6.jpg";
import item25 from "./Asserts/shoe7.jpg";
import item26 from "./Asserts/Bag7.jpg";
import item27 from "./Asserts/Belt7.jpg";
import item28 from "./Asserts/Glass7.jpg";
import item29 from "./Asserts/shoe8.jpg";
import item30 from "./Asserts/Bag8.jpg";
import item31 from "./Asserts/Belt8.jpg";
import item32 from "./Asserts/Glass8.jpg";
import item33 from "./Asserts/shoe9.jpg";
import item34 from "./Asserts/Bag9.jpg";
import item35 from "./Asserts/Belt9.jpg";
import item36 from "./Asserts/Glass9.jpg";
import item37 from "./Asserts/shoe10.jpg";
import item38 from "./Asserts/Bag10.jpg";
import item39 from "./Asserts/Belt10.jpg";
import item40 from "./Asserts/Glass10.jpg";

import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "./All.css";



function All() {
 

  const [contents, setContents] = useState([
    {
      id: 1,
      title: "Nike Air Max 270 React",
      categories: "Sneakers",
      img: item1,
    },
    {
      id: 2,
      title: "Nike Air Max 270 React",
      categories: "Bags",
      img: item2,
    },
    {
      id: 3,
      title: "Nike Air Max 270 React",
      categories: "Belts",
      img: item3,
    },
    {
      id: 4,
      title: "Nike Air Max 270 React",
      categories: "Sunglasses",
      img: item4,
    },
    {
      id: 5,
      title: "Nike Air Max 270 React",
      categories: "Sneakers",
      img: item5,
    },
    {
      id: 6,
      title: "Nike Air Max 270 React",
      categories: "Bags",
      img: item6,
    },
    {
      id: 7,
      title: "Nike Air Max 270 React",
      categories: "Belts",
      img: item7,
    },
    {
      id: 8,
      title: "Nike Air Max 270 React",
      categories: "Sunglasses",
      img: item8,
    },
    {
      id: 9,
      title: "Nike Air Max 270 React",
      categories: "Sneakers",
      img: item9,
    },
    {
      id: 10,
      title: "Nike Air Max 270 React",
      categories: "Bags",
      img: item10,
    },
    {
      id: 11,
      title: "Nike Air Max 270 React",
      categories: "Belts",
      img: item11,
    },
    {
      id: 12,
      title: "Nike Air Max 270 React",
      categories: "Sunglasses",
      img: item12,
    },
    {
      id: 13,
      title: "Nike Air Max 270 React",
      categories: "Sneakers",
      img: item13,
    },
    {
      id: 14,
      title: "Nike Air Max 270 React",
      categories: "Bags",
      img: item14,
    },
    {
      id: 15,
      title: "Nike Air Max 270 React",
      categories: "Belts",
      img: item15,
    },
    {
      id: 16,
      title: "Nike Air Max 270 React",
      categories: "Sunglasses",
      img: item16,
    },
    {
      id: 17,
      title: "Nike Air Max 270 React",
      categories: "Sneakers",
      img: item17,
    },
    {
      id: 18,
      title: "Nike Air Max 270 React",
      categories: "Bags",
      img: item18,
    },
    {
      id: 19,
      title: "Nike Air Max 270 React",
      categories: "Belts",
      img: item19,
    },
    {
      id: 20,
      title: "Nike Air Max 270 React",
      categories: "Sunglasses",
      img: item20,
    },
    {
      id: 21,
      title: "Nike Air Max 270 React",
      categories: "Sneakers",
      img: item21,
    },
    {
      id: 22,
      title: "Nike Air Max 270 React",
      categories: "Bags",
      img: item22,
    },
    {
      id: 23,
      title: "Nike Air Max 270 React",
      categories: "Belts",
      img: item23,
    },
    {
      id: 24,
      title: "Nike Air Max 270 React",
      categories: "Sunglasses",
      img: item24,
    },
    {
      id: 25,
      title: "Nike Air Max 270 React",
      categories: "Sneakers",
      img: item25,
    },
    {
      id: 26,
      title: "Nike Air Max 270 React",
      categories: "Bags",
      img: item26,
    },
    {
      id: 27,
      title: "Nike Air Max 270 React",
      categories: "Belts",
      img: item27,
    },
    {
      id: 28,
      title: "Nike Air Max 270 React",
      categories: "Sunglasses",
      img: item28,
    },
    {
      id: 29,
      title: "Nike Air Max 270 React",
      categories: "Sneakers",
      img: item29,
    },
    {
      id: 30,
      title: "Nike Air Max 270 React",
      categories: "Bags",
      img: item30,
    },
    {
      id: 31,
      title: "Nike Air Max 270 React",
      categories: "Belts",
      img: item31,
    },
    {
      id: 32,
      title: "Nike Air Max 270 React",
      categories: "Sunglasses",
      img: item32,
    },
    {
      id: 33,
      title: "Nike Air Max 270 React",
      categories: "Sneakers",
      img: item33,
    },
    {
      id: 34,
      title: "Nike Air Max 270 React",
      categories: "Bags",
      img: item34,
    },
    {
      id: 35,
      title: "Nike Air Max 270 React",
      categories: "Belts",
      img: item35,
    },
    {
      id: 36,
      title: "Nike Air Max 270 React",
      categories: "Sunglasses",
      img: item36,
    },
    {
      id: 37,
      title: "Nike Air Max 270 React",
      categories: "Sneakers",
      img: item37,
    },
    {
      id: 38,
      title: "Nike Air Max 270 React",
      categories: "Bags",
      img: item38,
    },
    {
      id: 39,
      title: "Nike Air Max 270 React",
      categories: "Belts",
      img: item39,
    },
    {
      id: 40,
      title: "Nike Air Max 270 React",
      categories: "Sunglasses",
      img: item40,
    },
  ]);
 


  const [dataRender, setRenderData] = useState(contents);
  const categories = contents.map((content) => content.categories);
  const uniqCategories = [...new Set(categories)];
  uniqCategories.unshift("All");
  const handleTab = (data) => {
    if (data === "All") {
      setRenderData(contents);
      return;
    }
    const filterCategories = contents.filter(
      (content) => content.categories === data
    );
    setRenderData(filterCategories);
  };

 const[visible,setVisible]=useState(3)
 const showMoreItems = () =>{

    setVisible((prevValue)=>prevValue+3)
 
}


  return (
    <div>
      <div className="text-center mt-5 tex1">
        <label>BEST SELLER</label>
      </div>
      <div className="row">
        <div className="container py-4"></div>
        <div className="col-12 text-center  mb-5 ">
          {uniqCategories.map((data, i) => (
            <span
              className=" p-2 m-3 text2"
              key={i}
              onClick={() => handleTab(data)}
            >
              {data}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="container-fluid">
          <div className="row">
            {dataRender.slice(0,visible).map((data, i) => (
              <div className="col-4">
              <div className="row">
                <div className="d-flex justify-content-around">
                  <div className="card">
                    <div className="containers">
                      <img src={data.img} className="image" width='250' />
                      <div className="middle">
                        <div className="text">
                            <div className=" d-flex justify-content-around"><AiOutlineHeart size='40'/>
                            <AiOutlineShoppingCart size='40' className="ms-4
                            "/></div></div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="card-title text-center titles">
                        <center>{data.title}</center> 
                      </div>
                      <div className="card-text">
                        <div className="d-flex justify-content-center">
                          <AiFillStar color="#FFC600" />
                          <AiFillStar color="#FFC600" />
                          <AiFillStar color="#FFC600" />
                          <AiFillStar color="#FFC600" />
                          <AiFillStar color="#C1C8CE" />
                        </div>
                        <div className="d-flex justify-content-center ">
                     
                           <label className="dollars">$299,43</label>
                           <label className="colorfor53 ms-3">$534,33</label>
                           <label className="offe ms-3">24% Off</label>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            ))}
          </div>
          <div className="mt-5">
          <div className='more text-center'>
                 { visible<dataRender.length&&<label onClick={showMoreItems} className='load'>LOAD MORE</label> }
                   </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default All;
