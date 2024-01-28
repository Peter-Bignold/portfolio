import React from 'react';

import '../../styles/style_text.css';
import '../../styles/style_button.css';
import '../../styles/style_container.css';
import '../../styles/style_anims.css';
import '../../styles/style_scroll.css';

const Apogee = () => {
    return (
        <body style={{backgroundColor: "#eeeeee", overflowY: "hidden"}}>

            <div className="flex_MV" style={{marginRight: "5%", marginLeft: "5%", marginTop: "120px"}}>
                <div className="flex_MH anim_fadeIn1" style={{marginBottom: "40px"}}>
                    <img alt="logo" src={require("../../images/apogee/logo1.png")} style={{width: "85px", height: "85px"}}></img>
                    <div className="flex_LV" style={{paddingLeft: "32px"}}>
                        <h7> Apogee </h7>
                        <h8> 2021 &#x2022; Unreal Engine 4 </h8>
                    </div>
                </div>
                <p className="anim_fadeIn2">
                    Cruise through a procedurally generated universe - exploring new planets and earning 
                    high scores along the way. Reach further distances to unlock new ships and move up the 
                    leaderboard rankings! Apogee is a physics - based infinite runner.
                </p>

                <div className="flex_MV anim_fadeIn2" style={{marginBottom: "40px", maxWidth: "1000px", width: "100%"}}>
                    <button className="button_wide" onClick={() => window.open("https://noodlegames.itch.io/apogee")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/itch1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        Download on itch.io
                    </button>
                </div>
                
                <div className="flex_MV anim_fadeIn3">
                    <div style={{maxWidth: "1000px", marginBottom: "20px"}}>
                        <iframe className="embed_video" title="Gameplay demonstration" frameborder="0" allow="fullscreen;" src="https://www.youtube.com/embed/aYETykjwY1w?rel=0"></iframe>
                        <p> Gameplay demonstration </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/apogee/screen1.jpg")}></img>
                        <p> Using planet gravity to steer </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/apogee/screen2.jpg")}></img>
                        <p> Colliding with a planet in an intense explosion </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/apogee/screen3.jpg")}></img>
                        <p> Tutorial hints </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/apogee/screen4.jpg")}></img>
                        <p> Unlock ships with unique gameplay buffs by reaching point milestones </p>
                    </div>
                    <div class="flex_MV">
                        <img class="img_gallery" alt="screenshot" src={require("../../images/apogee/screen5.jpg")}></img>
                        <p> Finding and delivering cargo for bonus points </p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Apogee;