import React from 'react';

import '../../styles/style_text.css';
import '../../styles/style_button.css';
import '../../styles/style_container.css';
import '../../styles/style_anims.css';
import '../../styles/style_scroll.css';

const Stingray = () => {
    return (
        <body style={{backgroundColor: "#eeeeee", overflowY: "hidden"}}>

            <div className="flex_MV" style={{marginRight: "5%", marginLeft: "5%", marginTop: "120px"}}>

                <div className="flex_MV anim_fadeIn1" style={{marginBottom: "20px"}}>
                    <h3> 1967 Chevrolet Corvette Stingray </h3>
                </div>

                <p className="anim_fadeIn2">
                    <i>A 1967 Corvette Stingray featuring a fully detailed interior. I combined elements
                    from earlier Stingray models, namely the side vents and split rear window.
                    Other than those tweaks the car is accurate to the original. </i>
                </p>

                <div className="flex_MV anim_fadeIn2" style={{marginBottom: "40px", maxWidth: "1000px", width: "100%"}}>
                    <button className="button_wide" onClick={() => window.open("https://www.artstation.com/artwork/xE9Z4")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/artstation1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        View on Artstation
                    </button>
                </div>

                <div className="flex_MV anim_fadeIn3">
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/stingray1.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/stingray2.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/stingray3.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/stingray4.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/stingray5.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/stingray6.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/stingray7.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/stingray8.jpg")}></img>
                    </div>
                    <div className="flex_MV">
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/stingray9.jpg")}></img>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Stingray;