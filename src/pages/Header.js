import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import '../styles/style_header.css';

const Header = () => {
    // Define vars
    const url = useLocation().pathname;
    let home_style = "button_header";
    let games_style = "button_header";
    let artwork_style = "button_header";
    let contact_style = "button_header";

    // Parse url for current page, set header button style accordingly
    if (url.includes("games")) games_style = "button_header activated";
    else if (url.includes("artwork")) artwork_style = "button_header activated";
    else if (url.includes("contact")) contact_style = "button_header activated";
    else home_style = "button_header activated";
    
    return (
        <div className="header_embed">
            <header className="flex_MH">
                <div className="flex_name">
                    <img className="header_img" alt="Peter Bignold" src={require("../images/header/noodle1.png")} style={{height: "32px", width: "32px"}}></img>
                    <h3 className="header_text1"> Peter Bignold </h3>
                </div>
                <div className="flex_RH" style={{marginTop: "4px"}}>
                    <Link className={home_style} to="/"> Home </Link>
                    <img className="seperator" alt="dot" src={require("../images/header/dot1.png")}></img>
                    <Link className={games_style} to="/games"> Software </Link>
                    <img className="seperator" alt="dot" src={require("../images/header/dot1.png")}></img>
                    <Link className={artwork_style} to="/artwork"> Artwork </Link>
                    <img className="seperator" alt="dot" src={require("../images/header/dot1.png")}></img>
                    <Link className={contact_style} to="/contact"> Contact </Link>
                </div>
            </header>
        </div>
    )
}

export default Header;