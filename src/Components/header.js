import React from 'react';
import { NavLink } from "react-router-dom";
import AniasBalloonLogo from '../Pictures/AniaBalloons_Logo.png'
import Dropdown from './Dropdown';
 
const Header =(props)=>{
  const scroll = () => {
    const section = document.querySelector( '#contact' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
    return (
      <header className="header">
        <div className="header-logo-container"><img src={AniasBalloonLogo} alt=""/><div className='gowno'></div></div>
        <ul
          className="header-list"
          onChange={(e) => {
            let language = e.target.value.toLowerCase();
            props.i18n.changeLanguage(language);
          }}
        >
         <li className="nav-button">
            <NavLink className="" end to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/">
              Animal Balloon
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/">
              Photobackdrops
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/">
              Decorations
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/">
              Events
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/backdrops">
              Gallery
            </NavLink>
          </li>
          <li className="nav-button">
            <div className="" onClick={()=>{
              scroll();
            }}>
              Contact
            </div>
          </li>
          <li>
            <Dropdown selected={props.selected} setSelected={props.setSelected}/>
          </li>
        </ul>
      </header>
    );
}
export default Header