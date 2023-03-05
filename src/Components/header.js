import React, { Fragment } from 'react';
import Media from 'react-media';
import NavbarSmall from './Navbar/NavbaSmall';
import NavbarBig from './Navbar/NavbarBig';
import NavbarWrapper from "./Navbar/NavbarWrapper"

// import NavbarBig from './NavbarBig';

const Header = (props) => {
  const scroll = () => {
    const section = document.querySelector('#contact');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    // <header className="header">
    <NavbarWrapper texts={props.texts}>

      {/*  */}
      <Media queries={{
        small: "(max-width: 850px)",
        large: "(min-width: 850px)"
      }}>
        {matches => (
          <Fragment>
            {matches.small && <NavbarSmall texts={props.texts} selected={props.selected} setSelected={props.setSelected} />}
            {matches.large && <NavbarBig texts={props.texts} selected={props.selected} setSelected={props.setSelected} />}
          </Fragment>
        )}
      </Media>

    </NavbarWrapper>
    // </header>
  );
}
export default Header