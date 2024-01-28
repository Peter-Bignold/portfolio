import React from 'react';

import '../../styles/style_text.css';
import '../../styles/style_button.css';
import '../../styles/style_container.css';
import '../../styles/style_anims.css';
import '../../styles/style_scroll.css';

const Mazda = () => {
    return (
        <body style={{backgroundColor: "#eeeeee", overflowY: "hidden"}}>

            <div className="flex_MV" style={{marginRight: "5%", marginLeft: "5%", marginTop: "120px"}}>

                <div className="flex_MV anim_fadeIn1" style={{marginBottom: "20px"}}>
                    <h3> 1982 Mazda RX-7 (SA) </h3>
                </div>

                <p className="anim_fadeIn2">
                    <i>A 1982 Mazda RX-7 restored and enhanced for racing! Officially referred to as the SA (Savannah) 
                    and nicknamed FB, this first generation RX-7 helped pave the way for a decades-long explosion in Japanese 
                    sports car popularity. Although it isn't as famous as the FD generation that came later, 
                    the SA laid the foundations that the later generations would build off. The fastback body style, simple yet powerful 
                    design language, and the charming pop-up headlights were present since the beginning. With this 
                    project I brought to life my imagining of an SA RX-7 adapted for racing in the present day. The result is a 
                    combination of the car's Group C racing heritage with modern styling and design.</i>
                </p>

                <div className="flex_MV anim_fadeIn2" style={{marginBottom: "40px", maxWidth: "1000px", width: "100%"}}>
                    <button className="button_wide" onClick={() => window.open("https://www.artstation.com/artwork/OmyEyw")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/artstation1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        View on Artstation
                    </button>
                </div>

                <div className="flex_MV anim_fadeIn3">
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/mazda1.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/mazda2.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/mazda3.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/mazda4.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/mazda5.jpg")}></img>
                    </div>
                    <div className="flex_MV">
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/mazda6.jpg")}></img>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Mazda;