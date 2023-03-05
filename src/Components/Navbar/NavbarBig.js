import { NavLink } from "react-router-dom";
import AniasBalloonLogo from '../../Pictures/AniaBalloons_Logo2.png'
import Dropdown from '../Dropdown';
import { HashLink } from "react-router-hash-link";

const NavbarBig = (props)=>{
    return (
      <nav>
        <div className="header-logo-container">
          <img className="img-logo" src={AniasBalloonLogo} alt="" />
        </div>
        <ul
          className="header-list"
          onChange={(e) => {
            let language = e.target.value.toLowerCase();
            // props.i18n.changeLanguage(language);
          }}
        >
          <li className="nav-button">
            <NavLink className="" end to="/animalBalloons">
              {props.texts("PageBalloons")}
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/backdrops">
              {props.texts("PageBackdrop")}
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/decorations">
            {props.texts("PageDecorations")}
            </NavLink>
          </li>
          <li className="nav-button">
            <NavLink className="" end to="/events">
            {props.texts("PageEvents")}
            </NavLink>
          </li>
          <li className="nav-button">
         
          <HashLink smooth to={'/#Lorem_1'}>
          {props.texts("PageContact")}
            </HashLink>
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