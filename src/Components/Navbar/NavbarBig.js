import { NavLink } from "react-router-dom";
import AniasBalloonLogo from '../../Pictures/AniaBalloons_Logo.png'
import Dropdown from '../Dropdown';
const NavbarBig = (props)=>{
    return (
      <nav>
        <div className="header-logo-container">
          <img src={AniasBalloonLogo} alt="" />
          <div className="cloudLogo"></div>
        </div>
        <ul
          className="header-list"
          onChange={(e) => {
            let language = e.target.value.toLowerCase();
            props.i18n.changeLanguage(language);
          }}
        >
          <li className="nav-button">
            <NavLink className="" end to="/">
              Animal Balloon
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/backdrops">
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
            <NavLink className="" end to="/">
              Contact
            </NavLink>
          </li>

          <li>
            <Dropdown
              selected={props.selected}
              setSelected={props.setSelected}
            />
          </li>
        </ul>
      </nav>
    );
}
export default NavbarBig;