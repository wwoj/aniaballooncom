import Balloons from "../Pictures/balloons.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactForm = (props)=>{
    return (
      <div className="contact" id="contact">
        {/* <h1>Contact us</h1> */}
        <div className="contact-main">
          <div>
            <img src={Balloons} alt="Balloons" />
          </div>
          <div className="contact-details">
            <h2>If you are interested in my offer, feel free to contact me</h2>
            <div><a href="tel:+1(630)-290-8175"><FontAwesomeIcon icon={faHeadset} size="2x"  /> +1(630)-290-8175</a></div>
            <div><a href="mailto:azygmunt@att.net"> <FontAwesomeIcon icon={faEnvelope} size="2x"  />azygmunt@att.net</a></div>

          </div>
        </div>
        <div className="home-float-container"></div>    
      </div>
    );
}
export default ContactForm;