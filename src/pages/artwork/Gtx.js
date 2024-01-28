import React from 'react';

import '../../styles/style_text.css';
import '../../styles/style_button.css';
import '../../styles/style_container.css';
import '../../styles/style_anims.css';
import '../../styles/style_scroll.css';

const Gtx = () => {
    return (
        <body style={{backgroundColor: "#eeeeee", overflowY: "hidden"}}>

            <div className="flex_MV" style={{marginRight: "5%", marginLeft: "5%", marginTop: "120px"}}>

                <div className="flex_MV anim_fadeIn1" style={{marginBottom: "20px"}}>
                    <h3> 1971 Plymouth GTX </h3>
                </div>

                <p className="anim_fadeIn2">
                    <i> This 1972 GTX sat dormant in my project files as nothing more than a half-finished body for around a year 
                    until I rediscovered the old mesh. I committed to finally completing it, ending up doing a chassis and suspension 
                    system as well as trying new techniques for the tires and rims. The 71 and 72 GTX's were some of the most stand-out 
                    body styles of the era, with the thick chrome trim and duel headlights of the front grill giving a large presence. </i>
                </p>

                <div className="flex_MV anim_fadeIn2" style={{marginBottom: "40px", maxWidth: "1000px", width: "100%"}}>
                    <button className="button_wide" onClick={() => window.open("https://www.cgtrader.com/3d-models/car/antique-car/1971-plymouth-gtx")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/cgt1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        Purchase on CGTrader
                    </button>
                    <button className="button_wide" onClick={() => window.open("https://www.artstation.com/artwork/L2Y4a0")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/artstation1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        View on Artstation
                    </button>
                </div>

                <div className="flex_MV anim_fadeIn3">
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/gtx1.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/gtx2.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/gtx3.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/gtx4.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/gtx5.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/gtx6.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/gtx7.jpg")}></img>
                    </div>
                    <div className="flex_MV">
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/gtx8.jpg")}></img>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Gtx;