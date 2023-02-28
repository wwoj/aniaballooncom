import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import AniasBalloonLogo from '../../Pictures/AniaBalloons_Logo.png'
import Dropdown from '../Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHippo, faImage, faCakeCandles,faAddressCard,faGifts } from '@fortawesome/free-solid-svg-icons'
function NavbarSmall (props){
  const ref = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
    return (
      <div>
        <nav>
          <div>
            <img src={AniasBalloonLogo} alt="Logo" style={{ width: "25vw" }} />
          </div>
          <div>
            <button
              onClick={() => {
                setShowMenu(!showMenu);
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
         
          <ul>
            <li className="">
              <NavLink className="" end to="/">
              <div className="navbar-small-container-svg"><FontAwesomeIcon icon={faHippo} /></div>
              <span>Animal Balloon</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" end to="/backdrops">
              <div className="navbar-small-container-svg"><FontAwesomeIcon icon={faImage} /></div>

              <span>Photobackdrops</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" end to="/">
              <div className="navbar-small-container-svg"><FontAwesomeIcon icon={faGifts} /></div>

              <span>Decorations</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" end to="/">
              <div className="navbar-small-container-svg"><FontAwesomeIcon icon={faCakeCandles} /></div>

              <span>Events</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" end to="/">
              <div className="navbar-small-container-svg"><FontAwesomeIcon icon={faAddressCard} /></div>
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
    );
}
export default NavbarSmall;