/* eslint-disable */
import React from "react";
import husky from "./images/KingHuskyHead.webp";
import { useState } from "react";
import "./dropdown.css";


const NavBar = ({ callBack }) => {
  const [state,setstate]=useState(false);
  const showDropdown=()=>{
      setstate(true);
  }
  const hideDropdown=()=>{
      setstate(false);
  }
  return (
<header>
<button id="skip" alt="skip to content" onClick={() => callBack("home")}>Skip to content</button>           
<div className="header_main">
    <a onClick={() => callBack("home")}>
    <img src="https://images.squarespace-cdn.com/content/v1/5ebb0ca06dde6c0448082d3d/1593203210126-H163LY7P4NIKTE3RRQ83/imprinting+stage.jpg" alt="michael" className="headerImage"/>
</a>
    <h1 className="header_text">We Care - Changing Lives</h1>
    
     
    
</div>
<nav className="navigationBar">
    <ul className="header_menu">
        <div className="headerOfMobile">
            <label htmlFor="menu_active">
              <input
                className="headerOfMobile--checkbox"
                id="menu_active"
                type="checkbox"
              />
              <span className="header_menu_icon material-symbols-outlined">
                menu
              </span>
              <div className="headerOfMobile--overlay_menu">
                <div className="headerOfMobile">
                  <span className="header_menu_icon material-symbols-outlined">
                    close
                  </span>
                </div>
                <ul>
                  <li><a onClick={() => callBack("home")} className = "header_link">Home</a></li>
                  {/* <li><a onClick={() => callBack("dogs")} className = "header_link" >Dogs</a></li> */}
                  <li> <button>
        <div className="dropdown-menu" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            Adopt
            {state?   <ul className="dropdown-list"onMouseEnter={showDropdown}>
            <li><button className="dd" onClick={() => callBack("dogs")}  >Dogs</button></li>
            <li><button className="dd" onClick={() => callBack("cats")}  >Cats</button></li>
            </ul>:null}
         
        </div>
        </button></li>
                  <li><a onClick={() => callBack("about")} className = "header_link" >About</a></li>
                  <li><a onClick={() => callBack("form")} className = "header_link" >Adoption Form </a></li>
                  <li><a onClick={() => callBack("tabs")} className = "header_link" >FAQ </a></li>
                  <li><a onClick={() => callBack("Testimonials")} className = "header_link" >Testimonials </a></li>
                  
                </ul>
              </div>
            </label>
          </div>
        <li className="header_item ">
            <button id="content" onClick={() => callBack("home")} className="glow-on-hover" >Home</button>
        </li>
        {/* <li className="header_item">
            <button onClick={() => callBack("dogs")}  >Dogs</button>
        </li>
        <li className="header_item">
            <button onClick={() => callBack("cats")}  >Cats</button>
        </li> */}
          <li className="header_item">
        <button onKeyDown={showDropdown} className="glow-on-hover"  >
        <div className="dropdown-menu" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            Adopt &#160; &#x25BE;
            {state?   <ul className="dropdown-list" onMouseEnter={showDropdown} >
            <li><button className="ddl" onClick={() => callBack("dogs")}  >Dogs</button></li>
            <li><button className="ddl" onClick={() => callBack("cats")}  >Cats</button></li>
            </ul>:null}
         
        </div>
        </button>

         </li>
        <li className="header_item">
            <button className="glow-on-hover" onClick={() => callBack("about")}  >About</button>
        </li>
        <li className="header_item">
            <button className="glow-on-hover" onClick={() => callBack("form")} >Adoption Form</button>
        </li>
      
        <li className="header_item">
        <button  className="glow-on-hover" onClick={() => callBack("tabs")} >FAQ</button>
            
        </li>
        <li className="header_item">
        <button  className="glow-on-hover" onClick={() => callBack("Testimonials")} >Testimonials</button>
            
        </li>
       
       
       
    </ul>

</nav>
</header>



  );
};

export default NavBar;
