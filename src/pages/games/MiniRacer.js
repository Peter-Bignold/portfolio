import React from 'react';

import '../../styles/style_text.css';
import '../../styles/style_button.css';
import '../../styles/style_container.css';
import '../../styles/style_anims.css';
import '../../styles/style_scroll.css';

const MiniRacer = () => {
    return (
        <body style={{backgroundColor: "#eeeeee", overflowY: "hidden"}}>

            <div className="flex_MV" style={{marginRight: "5%", marginLeft: "5%", marginTop: "120px"}}>
                <div className="flex_MH anim_fadeIn1" style={{marginBottom: "40px"}}>
                    <img alt="logo" src={require("../../images/mini_racer/logo1.png")} style={{width: "85px", height: "85px"}}></img>
                    <div className="flex_LV" style={{paddingLeft: "32px"}}>
                        <h7> Mini Racer </h7>
                        <h8> 2022 &#x2022; Unreal Engine 5 </h8>
                    </div>
                </div>
                <p className="anim_fadeIn2">
                    Mini Racer is a prototype circuit racer with a top-down camera angle, cartoony visual style, and custom arcade vehicle physics. 
                    Features up to 20 vehicles per race, competitive AI drivers, and vehicle customization.
                </p>

                <div className="flex_MV anim_fadeIn2" style={{marginBottom: "40px", maxWidth: "1000px", width: "100%"}}>
                    <button className="button_wide" onClick={() => window.open("https://noodlegames.itch.io/mini-racer")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/itch1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        Download on itch.io
                    </button>
                </div>
                
                <div className="flex_MV anim_fadeIn3">
                    <div style={{maxWidth: "1000px", marginBottom: "20px"}}>
                        <iframe className="embed_video" title="20 vehicle race gameplay" frameborder="0" allow="fullscreen;" src="https://www.youtube.com/embed/FrO2i0B0eFs?rel=0"></iframe>
                        <p> 20 vehicle race gameplay </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/mini_racer/screen1.jpg")}></img>
                        <p> Several cars power out of a tight hairpin </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/mini_racer/screen3.jpg")}></img>
                        <p> Vehicle customization enables custom colours and liveries. Seperate colours can be chosen for the
                            car's body, front wheels, rear wheels, and brake calipers. 
                        </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/mini_racer/screen2.jpg")}></img>
                        <p> Cedar Creek - chicane </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/mini_racer/screen4.jpg")}></img>
                        <p> Cedar Creek - hairpin </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/mini_racer/screen6.jpg")}></img>
                        <p> A pack of cars accelerate down a straight </p>
                    </div>
                    <div class="flex_MV">
                        <img class="img_gallery" alt="screenshot" src={require("../../images/mini_racer/screen7.jpg")}></img>
                        <p> Sliding through a long right hand corner </p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default MiniRacer;