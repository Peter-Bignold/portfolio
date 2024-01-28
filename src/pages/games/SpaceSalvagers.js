import React from 'react';

import '../../styles/style_text.css';
import '../../styles/style_button.css';
import '../../styles/style_container.css';
import '../../styles/style_anims.css';
import '../../styles/style_scroll.css';

const SpaceSalvagers = () => {
    return (
        <body style={{backgroundColor: "#eeeeee", overflowY: "hidden"}}>

            <div className="flex_MV" style={{marginRight: "5%", marginLeft: "5%", marginTop: "120px"}}>
                <div className="flex_MH anim_fadeIn1" style={{marginBottom: "40px"}}>
                    <img alt="logo" src={require("../../images/space_salvagers/logo1.png")} style={{width: "85px", height: "85px"}}></img>
                    <div className="flex_LV" style={{paddingLeft: "32px"}}>
                        <h7> Super Space Salvagers </h7>
                        <h8> 2023 &#x2022; C++ </h8>
                    </div>
                </div>
                <p className="anim_fadeIn2">
                    <b>Student Exemplar for CPSC 585 - Games Programming at the University of Calgary</b><br/>
                    Super Space Salvagers is a 4-player chaotic, goofy, and frantic party game where players compete to
                    gather cargo pods from a rugged planet's space wreckage. Made for CPSC 585 - Games Programming, Super Space Salvagers
                    was the joint effort of myself and four other students, made entirely in C++ using OpenGL and Nvidia PhysX. Supports 2 - 4 
                    player splitscreen and singleplayer with clever AI opponents. 
                </p>

                <div className="flex_MV anim_fadeIn2" style={{marginBottom: "40px", maxWidth: "1000px", width: "100%"}}>
                    <button className="button_wide" onClick={() => window.open("https://github.com/matthew-mcc/CPSC585")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/github1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        Github Repository
                    </button>
                </div>
                
                <div className="flex_MV anim_fadeIn3">
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/space_salvagers/screen4.jpg")}></img>
                        <p> Title screen and credits </p>
                    </div>
                    <div class="flex_MV">
                        <img class="img_gallery" alt="screenshot" src={require("../../images/space_salvagers/screen6.jpg")}></img>
                        <p> Rushing to the cargo dropoff point </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/space_salvagers/screen1.jpg")}></img>
                        <p> Rocket boosting into the air </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/space_salvagers/screen2.jpg")}></img>
                        <p> AI opponents maneuvering to steal each other's cargo </p>
                    </div>
                    <div class="flex_MV" style={{marginBottom: "20px"}}>
                        <img class="img_gallery" alt="screenshot" src={require("../../images/space_salvagers/screen3.jpg")}></img>
                        <p> Boosting into a rival salvager </p>
                    </div>
                    <div class="flex_MV">
                        <img class="img_gallery" alt="screenshot" src={require("../../images/space_salvagers/screen5.jpg")}></img>
                        <p> 4 - player splitscreen </p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default SpaceSalvagers;