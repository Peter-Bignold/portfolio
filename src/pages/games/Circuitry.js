import React from 'react';

import '../../styles/style_text.css';
import '../../styles/style_button.css';
import '../../styles/style_container.css';
import '../../styles/style_anims.css';
import '../../styles/style_scroll.css';

const Circuitry = () => {
    return (
        <body style={{backgroundColor: "#eeeeee", overflowY: "hidden"}}>

            <div className="flex_MV" style={{marginRight: "5%", marginLeft: "5%", marginTop: "120px"}}>
                <div className="flex_MH anim_fadeIn1" style={{marginBottom: "40px"}}>
                    <img alt="logo" src={require("../../images/circuitry/logo1.png")} style={{width: "85px", height: "85px"}}></img>
                    <div className="flex_LV" style={{paddingLeft: "32px"}}>
                        <h7> Circuitry </h7>
                        <h8> 2025 &#x2022; React Native </h8>
                    </div>
                </div>
                <p className="anim_fadeIn2">
                    An accessible, polished, and versatile mobile app providing telemetry and insights to performance driving enthusiasts. Circuitry aims to
                    increase the accessibility of motorsports by providing professional grade location, accelerometer, and timing data with only a mobile device.
                    Featuring innovations like a custom track builder and heads-up-display, Circuitry can be tailored to many different motorsport disciplines.
                </p>

                <div className="flex_MV anim_fadeIn2" style={{marginBottom: "40px", maxWidth: "1000px", width: "100%"}}>
                    <button className="button_wide_disabled" style={{margin: "4px"}}> 
                        Work in Progress...
                    </button>
                </div>
                
                <div className="flex_MH wrap anim_fadeIn3">
                    <div style={{maxWidth: "1000px", marginBottom: "20px"}}>
                        <img style={{marginBottom: "10px"}} className="img_app" width={281} height={609} alt="screenshot" src={require("../../images/circuitry/preview4.jpg")}></img>
                        <p> Heads up display </p>
                    </div>
                    <div className="flex_MV" style={{marginBottom: "20px"}}>
                        <img style={{marginBottom: "10px"}} className="img_app" width={281} height={609} alt="screenshot" src={require("../../images/circuitry/preview1.jpg")}></img>
                        <p> New session screen </p>
                    </div>
                    <div className="flex_MV" style={{marginBottom: "20px"}}>
                        <img style={{marginBottom: "10px"}} className="img_app" width={281} height={609} alt="screenshot" src={require("../../images/circuitry/preview3.jpg")}></img>
                        <p> Track select screen </p>
                    </div>
                    <div className="flex_MV" style={{marginBottom: "20px"}}>
                        <img style={{marginBottom: "10px"}} className="img_app" width={281} height={609} alt="screenshot" src={require("../../images/circuitry/preview2.jpg")}></img>
                        <p> Sessions list </p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Circuitry;