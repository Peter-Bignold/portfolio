import React from 'react';

import '../../styles/style_text.css';
import '../../styles/style_button.css';
import '../../styles/style_container.css';
import '../../styles/style_anims.css';
import '../../styles/style_scroll.css';

const PinataClicker = () => {
    return (
        <body style={{backgroundColor: "#eeeeee", overflowY: "hidden"}}>

            <div className="flex_MV" style={{marginRight: "5%", marginLeft: "5%", marginTop: "120px"}}>
                <div className="flex_MH anim_fadeIn1" style={{marginBottom: "40px"}}>
                    <img alt="logo" src={require("../../images/pinata_clicker/logo1.png")} style={{width: "85px", height: "85px"}}></img>
                    <div className="flex_LV" style={{paddingLeft: "32px"}}>
                        <h7> Pinata Clicker </h7>
                        <h8> 2020 &#x2022; Unreal Engine 4 </h8>
                    </div>
                </div>
                <p className="anim_fadeIn2">
                    <b>Winner of the International Game Developer Association's 2020 E-Jam - Most Creative</b><br/>
                    Click your way to candy GLORY! Pinata Clicker is a clicker-genre game combining 3D and 2D elements. 
                    Spend your candy riches on new upgrades to expand your wealth, and save up for the almighty ancient 
                    chancla. All you have to do is click! Pinata Clicker is the joint effort of myself and three other 
                    developers and artists.
                </p>

                <div className="flex_MV anim_fadeIn2" style={{marginBottom: "40px", maxWidth: "1000px", width: "100%"}}>
                    <button className="button_wide" onClick={() => window.open("https://noodlegames.itch.io/pinata-clicker")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/itch1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        Download on itch.io
                    </button>
                </div>
                
                <div className="flex_MV anim_fadeIn3">
                    <div style={{maxWidth: "1000px", marginBottom: "20px"}}>
                        <iframe className="embed_video" title="Gameplay demonstration" frameborder="0" allow="fullscreen;" src="https://www.youtube.com/embed/mM6Yn8_FwxQ?rel=0"></iframe>
                        <p> Gameplay demonstration </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/pinata_clicker/screen2.jpg")}></img>
                        <p> Introduction and tutorial </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/pinata_clicker/screen1.jpg")}></img>
                        <p> Early game </p>
                    </div>
                    <div class="flex_MV">
                        <img class="img_gallery" alt="screenshot" src={require("../../images/pinata_clicker/screen3.jpg")}></img>
                        <p> Late game </p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default PinataClicker;