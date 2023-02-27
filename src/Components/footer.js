import React from 'react';
import "../Styles/footer.scss";
import Instagram from "../Pictures/Brands/instagram.svg";
import Facebook from "../Pictures/Brands/facebook.svg";






const Footer = (props) => {
    return (
      <footer className="footer-container">
        <div className="">
          <div>
            <ul className="footer-navbar">
              <li>Home</li>
              <li>Galerry</li>
              <li>Galerry</li>
              <li>Galerry</li>
              <li>Contact</li>
            </ul>
          </div>
          <p>AniaBalloons &copy;</p>
        </div>
        <div className='footer-services'>
          <a href='https://www.facebook.com/anna.zygmunt.739google.com' target="_blank">
            <img src={Facebook} alt="instagram" />
          </a>
          <a href="https://www.instagram.com/aniasballoonworld/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR11EcgMLwIDxYHawiz_EeGLG1eyNaDA3pmJePfVMsDLv0KGaN_ls83Is8s" target="_blank">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>

        {/* <ul className="inner-footer">
              
                <li>
                    <ul>
                        <li className="column-head">{props.t("footer_Contact")}</li>
                        <li><a href="mailto:azygmunt@att.net">azygmunt@att.net</a></li>
                        <li> <a href='tel:+1(630)-290-8175'>+1(630)-290-8175</a></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="column-head">{props.t("footer_Media")}</li>
                        <li><span><a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagramSquare} size="2x" /></a></span>
                            <span><a href='https://www.facebook.com>'><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></a></span>
                            <span><a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutubeSquare} size="2x" /></a></span></li>

                    </ul>
                </li>
            </ul>
            <div className='ds-flex-end align-center footer-creator'>
                <span>Created by: wojcik.wojciechp@gmail.com</span>
            </div> */}
      </footer>
    );
}
export default Footer;