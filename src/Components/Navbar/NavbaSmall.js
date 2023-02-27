import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import AniasBalloonLogo from '../../Pictures/AniaBalloons_Logo.png'
import Dropdown from '../Dropdown';

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
            <button onClick={() => {
            setShowMenu(!showMenu);
          }}>
            <span
            ref={ref}
            className={`close-mark${showMenu ? " transform-main" : ""}`}
          ></span>
            </button>
          </div>
        </nav>
        <div className={`navbar-list-small ${showMenu ? "navbar-small-show" : ""}`}>
          <ul>
          <li className="">
            <NavLink className="" end to="/">
              Animal Balloon
            </NavLink>
          </li>
          <li className="">
            <NavLink className="" end to="/backdrops">
              Photobackdrops
            </NavLink>
          </li>
          <li className="">
            <NavLink className="" end to="/">
              Decorations
            </NavLink>
          </li>
          <li className="">
            <NavLink className="" end to="/">
              Events
            </NavLink>
          </li>
          <li className="">
            <NavLink className="" end to="/">
              Contact
            </NavLink>
          </li>

          </ul>
        </div>
      </div>
    );
}
export default NavbarSmall;