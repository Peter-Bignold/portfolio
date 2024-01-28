import React from 'react';

import '../styles/style_text.css';
import '../styles/style_button.css';
import '../styles/style_container.css';
import '../styles/style_anims.css';
import '../styles/style_scroll.css';

const Contact = () => {
    return (
        <body style={{backgroundColor: "#eeeeee", overflowY: "hidden"}}>

            <div className="flex_MV" style={{marginLeft: "5%", marginRight: "5%"}}>
                <h1 className="anim_fadeIn1"> Contact </h1>
                <div className="flex_MV anim_moveUp" style={{marginTop: "64px"}}>
                    <div className="button_contact">
                        <img src={require("../images/home/person1.png")} alt="Personal" style={{width: "64px", height: "64px", marginBottom: "8px"}}></img>
                        <p> Professional </p>
                        <h9> p.bignold01@gmail.com </h9>
                    </div>
                    <div className="button_contact">
                        <img src={require("../images/header/noodle1.png")} alt="Personal" style={{width: "64px", height: "64px", marginBottom: "8px"}}></img>
                        <p> Game Development </p>
                        <h9> noodlegamesdev@gmail.com </h9>
                    </div>
                </div>

                <div className="flex_MH wrap anim_fadeIn3" style={{marginTop: "64px"}}>
                    <button className="button_icon_large" onClick={() => window.open("https://www.linkedin.com/in/peter-bignold-b507171b1/")}> 
                        <img src={require("../images/home/linkedin1.png")} alt="LinkedIn" style={{width: "64px", height: "64px"}}></img>
                        <p> Linkedin </p>
                    </button>
                    <button className="button_icon_large" onClick={() => window.open("https://github.com/Peter-Bignold")}> 
                        <img src={require("../images/home/github1.png")} alt="GitHub" style={{width: "64px", height: "64px"}}></img>
                        <p> Github </p>
                    </button>
                    <button className="button_icon_large" onClick={() => window.open("https://www.youtube.com/@noodle_games")}>
                        <img src={require("../images/home/youtube1.png")} alt="YouTube" style={{width: "64px", height: "64px"}}></img>
                        <p> Youtube </p>
                    </button>
                    <button className="button_icon_large" onClick={() => window.open("https://www.artstation.com/peter_bignold")}>
                        <img src={require("../images/home/artstation1.png")} alt="ArtStation" style={{width: "64px", height: "64px"}}></img>
                        <p> Artstation </p>
                    </button>
                    <button className="button_icon_large" onClick={() => window.open("https://noodlegames.itch.io/")}>
                        <img src={require("../images/home/itch1.png")} alt="itch.io" style={{width: "64px", height: "64px"}}></img>
                        <p> itch.io </p>
                    </button>
                </div>
            </div>
        </body>
    )
}

export default Contact;