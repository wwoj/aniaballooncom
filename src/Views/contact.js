import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';
const Contact = (props)=>{
  return (
    <div  className="ds-flex-c page-conatiner-box">
      <div className="form-sides contact-container border-shadow-1">
        <h2 className='contact-h2'>{props.t("contactHeader")}</h2>
        <p>
          {props.t("contactText")}
        </p>
     
        <p>
          
          {/* <FontAwesomeIcon icon={faPhone} size="1x" /> */}
          <span><a href="tel:+1(630)-290-8175">+1(630)-290-8175</a></span>
        </p>
        <p>
          {/* <FontAwesomeIcon icon={faEnvelope} size="1x" /> */}
          <span><a href="mailto:azygmunt@att.net">azygmunt@att.net</a></span>
        </p>
        <p>
          
      
        </p>
      </div>
    </div>
  );
}
export default Contact;