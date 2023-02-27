import React, { Fragment } from 'react';
import Media from 'react-media';
import NavbarSmall from './Navbar/NavbaSmall';
import NavbarBig from './Navbar/NavbarBig';

// import NavbarBig from './NavbarBig';
 
const Header =(props)=>{
  const scroll = () => {
    const section = document.querySelector( '#contact' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
    return (
      <header className="header">
        {/*  */}
            <Media queries={{
          small: "(max-width: 850px)",
          large: "(min-width: 850px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && <NavbarSmall/>}
              {matches.large && <NavbarBig selected={props.selected} setSelected ={props.setSelected }/>}
            </Fragment>
          )}
        </Media>
        
      </header>
    );
}
export default Header