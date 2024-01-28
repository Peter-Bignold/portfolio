import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/style_text.css';
import '../styles/style_button.css';
import '../styles/style_container.css';
import '../styles/style_anims.css';
import '../styles/style_scroll.css';

const Artwork = () => {
    return (
        <body style={{backgroundColor: "#eeeeee", overflowY: "hidden"}}>

            <div className="flex_MV" style={{marginBottom: "40px", marginRight: "5%", marginLeft: "5%"}}>
                <h1 className="anim_fadeIn1"> Digital Artwork </h1>
                <h2 className="anim_fadeIn2"> Rendered in Blender Cycles and Unreal Engine 5 </h2>
            </div>

            <div className="flex_MH wrap anim_moveUp" style={{marginRight: "5%", marginLeft: "5%"}}>
                <Link className="button_art" to="bmw">
                    <img className="img_art" alt="bmw" src={require("../images/artwork/preview_bmw1.jpg")}></img>
                    <h6> BMW E30 M3 (DTM) </h6>
                </Link>
                <Link className="button_art" to="harley">
                    <img className="img_art" alt="harley" src={require("../images/artwork/preview_harley1.jpg")}></img>
                    <h6> Harley Davidson Fatboy </h6>
                </Link>
                <Link className="button_art" to="mclaren">
                    <img className="img_art" alt="mclaren" src={require("../images/artwork/preview_mclaren1.jpg")}></img>
                    <h6> Mclaren MP4-6 </h6>
                </Link>
                <Link className="button_art" to="ninja">
                    <img className="img_art" alt="ninja" src={require("../images/artwork/preview_ninja1.jpg")}></img>
                    <h6> Kawasaki Ninja </h6>
                </Link>
                <Link className="button_art" to="civic">
                    <img className="img_art" alt="civic" src={require("../images/artwork/preview_civic1.jpg")}></img>
                    <h6> Honda Civic Si </h6>
                </Link>
                <Link className="button_art" to="ferrari">
                    <img className="img_art" alt="ferrari" src={require("../images/artwork/preview_ferrari1.jpg")}></img>
                    <h6> Ferrari 330 P4 </h6>
                </Link>
                <Link className="button_art" to="mazda">
                    <img className="img_art" alt="mazda" src={require("../images/artwork/preview_mazda1.jpg")}></img>
                    <h6> Mazda RX-7 </h6>
                </Link>
                <Link className="button_art" to="stingray">
                    <img className="img_art" alt="stingray" src={require("../images/artwork/preview_stingray1.jpg")}></img>
                    <h6> Chevrolet Corvette Stingray </h6>
                </Link>
                <Link className="button_art" to="gtx">
                    <img className="img_art" alt="gtx" src={require("../images/artwork/preview_gtx1.jpg")}></img>
                    <h6> Plymouth GTX </h6>
                </Link>
                <Link className="button_art" to="beetle">
                    <img className="img_art" alt="beetle" src={require("../images/artwork/preview_beetle1.jpg")}></img>
                    <h6> Volkswagen Beetle </h6>
                </Link>
                <Link className="button_art" to="guitar">
                    <img className="img_art" alt="guitar" src={require("../images/artwork/preview_guitar1.jpg")}></img>
                    <h6> Simon & Patrick Songsmith </h6>
                </Link>
            </div>
        </body>
    )
}

export default Artwork;