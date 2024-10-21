import React from 'react'
import '../assets/Navbar.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
   <header>
    <div className='navbar'>
    <div className="amazon-logo">
          <img className="img" src="/src/Components/images/amazon_logo.png" alt="" />
        </div>

        <div className="address">
          <span className="first-para">Delievering to Lucknow 226002</span>
          <div className="address-icon">
          <FaLocationDot />
            <span className="sec-para">Update Location</span>
          </div>
        </div>

        <div className="search-bar">
          <select className="select-bar">
            <option>All</option>
          </select>
          <input
            className="search-box"
            type="text"
            name=""
            id=""
            placeholder="Search Amazon"
          />
          <div className="search-icon">
          <FaSearch />
          </div>
        </div>

        <div className="language-bar img">
          <div className="india">
            <img
              src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.png"
              alt=""
            />
          </div>
          <h className="lang">EN</h>
          <ul className="range-hover">
           <li><input type="radio" name="" id="" />English - EN</li>
           <li><input type="radio" name="" id="" />हिन्दी - HI</li>
           <li><input type="radio" name="" id="" />தமிழ் - TA</li>
          </ul>
        </div>

        <div className="nav-account-list img">
          <span className="signin"> Hello, sign in </span>
          <h4 className="account">Account & Lists</h4>
        </div>

        <div className="ret-ord img">
          <span className="ret">Returns</span>
          <h4 className="ord">& Orders</h4>
        </div>

        <div className='main-cart'>
          <div className='cart-icon'>
          <FaCartShopping />
          </div>
          <span className='cart'>Cart</span>
        </div>
    </div>

    <div className="list">
        <ul>
          <li className='list-icon'><FaBars />
          <span>All</span></li>
          <li>Fresh</li>
          <li>Amazon miniTV</li>
          <li>Sell</li>
          <li>Best Seller</li>
          <li>Today's Deals</li>
          <li>Mobiles</li>
          <li>Electronics</li>
          <li>Customer Service</li>
          <li>New Releases</li>
          <li>Prime</li>
          <li>Gift Ideas</li>
          <li>Home&Kitchen</li>
          <li>Fashion</li>
        </ul>
      </div>
   </header>
  )
}

