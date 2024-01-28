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
                    <img alt="logo" src={require("../../images/misfire/logo1.png")} style={{width: "85px", height: "85px"}}></img>
                    <div className="flex_LV" style={{paddingLeft: "32px"}}>
                        <h7> Misfire </h7>
                        <h8> 2019 &#x2022; Unreal Engine 4 </h8>
                    </div>
                </div>
                <p className="anim_fadeIn2">
                    Face off against your friends with wacky guns that don't shoot straight! 
                    Misfire is a Casual PVP Platform Shooter. Compete in matches of 2 - 4 players, 
                    earn coins to unlock stylish new space suits, and ruin friendships along the way!
                </p>

                <div className="flex_MV anim_fadeIn2" style={{marginBottom: "40px", maxWidth: "1000px", width: "100%"}}>
                    <button className="button_wide" onClick={() => window.open("https://store.steampowered.com/app/1145270/Misfire/")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/steam1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        Download on Steam
                    </button>
                </div>
                
                <div className="flex_MV anim_fadeIn3">
                    <div style={{maxWidth: "1000px", marginBottom: "20px"}}>
                        <iframe className="embed_video" title="Trailer" frameborder="0" allow="fullscreen;" src="https://www.youtube.com/embed/wrwGrtdeAiw?rel=0"></iframe>
                        <p> Trailer </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/misfire/screen4.jpg")}></img>
                        <p> Shooting the Scattergun </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/misfire/screen5.jpg")}></img>
                        <p> Aiming the Sine Rifle with a shield powerup ready to use </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/misfire/screen6.jpg")}></img>
                        <p> Firing the Backzooka </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/misfire/screen7.jpg")}></img>
                        <p> Using the Perpendivolver </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/misfire/screen8.jpg")}></img>
                        <p> Character customization </p>
                    </div>
                    <div class="flex_MV">
                        <img class="img_gallery" alt="screenshot" src={require("../../images/misfire/screen9.jpg")}></img>
                        <p> Player statistics </p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default MiniRacer;