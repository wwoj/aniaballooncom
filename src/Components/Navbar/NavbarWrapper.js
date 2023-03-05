import React from 'react';
import "./NavbarWrapper.scss"

const NavbarWrapper = (props) => {

    return (
           <header className="header-wrapper">
            <div class="overlay">
                {props.children}
                <h1>{props.texts("HomeText1-1")}</h1>
                <h3>{props.texts("HomeText1-2")}<br/>{props.texts("HomeText1-3")}</h3>
            </div>
        </header>
    )

};

export default NavbarWrapper