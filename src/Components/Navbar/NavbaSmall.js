import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import AniasBalloonLogo from '../../Pictures/AniaBalloons_Logo2.png'
import Dropdown from '../Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHippo, faImage, faCakeCandles,faAddressCard,faGifts } from '@fortawesome/free-solid-svg-icons'
function NavbarSmall (props){
  const ref = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  function hideNav(){
    setShowMenu((prevState)=>{

      document.body.style.position = prevState? 'static':'fixed';
      return !prevState
    });
  }
    return (
      <div>
        <nav>
        <NavLink className="" end to="/">
          <div className="header-logo-container">
            <img src={AniasBalloonLogo} alt="Logo" className="img-logo" />
          </div>
      </NavLink>
          <div className="navbarsmall-btn-container">
            <Dropdown
              selected={props.selected}
              setSelected={props.setSelected}
            />
            <button
              onClick={() => {
                setShowMenu((prevState)=>{

                  document.body.style.position = prevState? 'static':'fixed';
                  return !prevState
                });

                


              }}
            >
              <span
                ref={ref}
                className={`close-mark${showMenu ? " transform-main" : ""}`}
              ></span>
            </button>
          </div>
        </nav>
        <div
          className={`navbar-list-small ${showMenu ? "navbar-small-show" : ""}`}
          >
          <div></div>
          <ul>
            <li className="">
              <NavLink className="" end to="/animalBalloons" onClick={hideNav}>
                <div className="navbar-small-container-svg">
                  <FontAwesomeIcon icon={faHippo} />
                </div>
                <span>{props.texts("PageBalloons")}</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" end to="/backdrops" onClick={hideNav}>
                <div className="navbar-small-container-svg">
                  <FontAwesomeIcon icon={faImage} />
                </div>

                <span>{props.texts("PageBackdrop")}</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" end to="/decorations" onClick={hideNav}>
                <div className="navbar-small-container-svg">
                  <FontAwesomeIcon icon={faGifts} />
                </div>
                <span>{props.texts("PageDecorations")}</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" end to="/events" onClick={hideNav}>
                <div className="navbar-small-container-svg">
                  <FontAwesomeIcon icon={faCakeCandles} />
                </div>
                <span>{props.texts("PageEvents")}</span>
              </NavLink>
            </li>
            <li className="">
            <HashLink smooth to={'/#Lorem_1'} onClick={hideNav}>
                <div className="navbar-small-container-svg">
                  <FontAwesomeIcon icon={faAddressCard} />
                </div>
                <span>{props.texts("PageContact")}</span>
                </HashLink>
            </li>
          </ul>
        </div>
      </div>
    );
}
export default NavbarSmall;