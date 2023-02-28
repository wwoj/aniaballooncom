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
            // props.i18n.changeLanguage(language);
          }}
        >
          <li className="nav-button">
            <NavLink className="" end to="/">
              {props.texts("PageBalloons")}
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/backdrops">
              {props.texts("PageBackdrop")}
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/">
            {props.texts("PageDecorations")}
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/">
            {props.texts("PageEvents")}
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/">
            {props.texts("PageEvents")}
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