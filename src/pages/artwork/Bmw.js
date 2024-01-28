import React from 'react';

import '../../styles/style_text.css';
import '../../styles/style_button.css';
import '../../styles/style_container.css';
import '../../styles/style_anims.css';
import '../../styles/style_scroll.css';

const Bmw = () => {
    return (
        <body style={{backgroundColor: "#eeeeee", overflowY: "hidden"}}>

            <div className="flex_MV" style={{marginRight: "5%", marginLeft: "5%", marginTop: "120px"}}>

                <div className="flex_MV anim_fadeIn1" style={{marginBottom: "20px"}}>
                    <h3> 1987 BMW E30 M3 (DTM) </h3>
                </div>

                <p className="anim_fadeIn2">
                    <b>Submission to the 3DModels.org 2023 Car Render Challenge</b><br/>
                    <i>As the #10 BMW sits in the pitlane the field races by. Mechanics scramble to secure the car's 
                    damaged front-end, knowing victory prospects fade with every second spent stationary. Bodywork is 
                    forced into shape with only tape, hammers, and muscle. Eventually the car rejoins to any empty track, 
                    leagues behind the rest. The team hopes for a stroke of good luck to come their way. It's a long race 
                    that's only just started, and plenty of opportunities await.</i>
                </p>

                <div className="flex_MV anim_fadeIn2" style={{marginBottom: "40px", maxWidth: "1000px", width: "100%"}}>
                    <button className="button_wide" onClick={() => window.open("https://3dmodels.org/blog/peter-bignold-interview/")} style={{margin: "4px"}}>
                        <img src={require("../../images/home/3dm1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        Artist Interview
                    </button>
                    <button className="button_wide" onClick={() => window.open("https://3dmodels.org/challenges/making-up-lost-time/")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/3dm1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        View on 3DModels.org
                    </button>
                    <button className="button_wide" onClick={() => window.open("https://www.artstation.com/artwork/xDxxOm")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/artstation1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        View on Artstation
                    </button>
                </div>

                <div className="flex_MV anim_fadeIn3">
                    <div style={{maxWidth: "1000px", marginBottom: "4px"}}>
                        <iframe className="embed_video" title="Modeling timelapse" frameborder="0" allow="fullscreen;" src="https://www.youtube.com/embed/U2CDPIyf9lA?rel=0"></iframe>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/bmw1.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/bmw2.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/bmw3.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/bmw4.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/bmw5.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/bmw6.jpg")}></img>
                    </div>
                    <div className="flex_MV">
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/bmw7.jpg")}></img>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Bmw;