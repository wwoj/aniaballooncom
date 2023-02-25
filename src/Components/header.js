import React from 'react';
import { NavLink } from "react-router-dom";
import AniasBalloonLogo from '../Pictures/AniaBalloons_Logo.png'

const Header =(props)=>{
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
            <NavLink className="" end to="/backdrops">
              {props.t("PageBalloons")}
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/backdrops">
              {props.t("PageWalls")}
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/backdrops">
              {props.t("PageDecorations")}
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/backdrops">
              {props.t("PageEvents")}
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/backdrops">
              {props.t("PageContact")}
            </NavLink>
          </li>
        </ul>
      </header>
    );
}
export default Header