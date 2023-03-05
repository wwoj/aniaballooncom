import React from 'react';
import "../Styles/footer.scss";
import Instagram from "../Pictures/Brands/instagram.svg";
import Facebook from "../Pictures/Brands/facebook.svg";
import Youtube from "../Pictures/Brands/youtube.svg";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = (props) => {
  function goTop(){
    window.scrollTo(0,0);
  }
    return (
      <footer className="footer-container">
        <div className="">
          <div>
            <ul className="footer-navbar">
              <li>
                <NavLink className="" end to="/" onClick={goTop}>
                {props.texts("PageHome")}
                </NavLink>
              </li>
              <li>
                <NavLink className="" end to="/animalBalloons" onClick={goTop}>
                {props.texts("PageBalloons")}
                </NavLink>
              </li>
              <li>
                <NavLink className="" end to="/backdrops" onClick={goTop}>
                {props.texts("PageBackdrop")}
                </NavLink>
              </li>
              <li>
                <NavLink className="" end to="/decorations" onClick={goTop}>
                {props.texts("PageDecorations")}
                </NavLink>
              </li>
              <li>
                <NavLink className="" end to="/events" onClick={goTop}>
                {props.texts("PageEvents")}
                </NavLink>
              </li>
              <li>
                <HashLink smooth to={"/#Lorem_1"} >
                {props.texts("PageContact")}
                </HashLink>
              </li>
            </ul>
          </div>
          <p>Ania's Balloons World</p>
        </div>
        <div className="footer-services">
          <a
            href="https://www.facebook.com/anna.zygmunt.739"
            target="_blank"
          >
            <img src={Facebook} alt="instagram" />
          </a>
          <a
            href="https://www.instagram.com/aniasballoonworld/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR11EcgMLwIDxYHawiz_EeGLG1eyNaDA3pmJePfVMsDLv0KGaN_ls83Is8s"
            target="_blank"
          >
            <img src={Instagram} alt="instagram" />
          </a>
          <a
            href="https://www.youtube.com/@aniaballoon"
            target="_blank"
          >
            <img src={Youtube} alt="youtube" />
          </a>
        </div>
      </footer>
    );
}
export default Footer;