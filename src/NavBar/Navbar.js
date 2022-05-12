import React from "react";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container mt-5 ">

  
      <div className="row fonty">
      <div className="d-flex justify-content-between">
        <div className="col-md-6 col-12">
          <div className="d-flex">
            <div className="row">
              <div className="col-12 col-md-3">
                <select
                  name="Language"
                  id="Language"
                  className="border border-none outline-none  "
                >
                  <option value="EN">EN</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Hindi">Hindi</option>
                  <option value="French">French</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-2  ms-3">
                <select
                  name="Currency"
                  id="Currency"
                  className="border border-none outline-none currency"
                >
                  <option value="€">€ EURO</option>
                  <option value="$">$ DOLLAR</option>
                  <option value="₹">₹ RUPEES</option>
                  <option value="¥">¥ YEN</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-2">
              <AiOutlineUser size="30" />
            </div>

            <div className="col-md-3 col-12">
              <label>My profile</label>
            </div>

            <div className="col-12 col-md-2">
              <AiOutlineShoppingCart size="30" />
            </div>
            <div className="col-12 col-md-2">
              <label>Items</label>
            </div>
            <div className="col-12 col-md-2">
              <label className="colors">$0.00</label>
            </div>
            <div className="col-12 col-md-1">
              <AiOutlineSearch size="30" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
