import React from 'react';
import "../Styles/footer.scss";
import Instagram from "../Pictures/Brands/instagram.svg";
import Facebook from "../Pictures/Brands/facebook.svg";
import Youtube from "../Pictures/Brands/youtube.svg";







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
          <a href="https://www.instagram.com/aniasballoonworld/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR11EcgMLwIDxYHawiz_EeGLG1eyNaDA3pmJePfVMsDLv0KGaN_ls83Is8s" target="_blank">
            <img src={Youtube} alt="youtube" />
          </a>
        </div>

        
      </footer>
    );
}
export default Footer;