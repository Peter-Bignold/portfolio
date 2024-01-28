import React from 'react';

import '../../styles/style_text.css';
import '../../styles/style_button.css';
import '../../styles/style_container.css';
import '../../styles/style_anims.css';
import '../../styles/style_scroll.css';

const Harley = () => {
    return (
        <body style={{backgroundColor: "#eeeeee", overflowY: "hidden"}}>

            <div className="flex_MV" style={{marginRight: "5%", marginLeft: "5%", marginTop: "120px"}}>

                <div className="flex_MV anim_fadeIn1" style={{marginBottom: "20px"}}>
                    <h3> 2018 Harley Davidson Softail Fatboy </h3>
                </div>

                <p className="anim_fadeIn2">
                    <i>My version of the 2018 Fatboy. This was one of my longer projects, 
                    taking roughly 3 months to finish. Each detail of the engine and linkages are 
                    modelled as accurately as possible.</i>
                </p>

                <div className="flex_MV anim_fadeIn2" style={{marginBottom: "40px", maxWidth: "1000px", width: "100%"}}>
                    <button className="button_wide" onClick={() => window.open("https://www.cgtrader.com/3d-models/vehicle/motorcycle/2018-harley-davidson-fatboy")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/cgt1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        Purchase on CGTrader
                    </button>
                    <button className="button_wide" onClick={() => window.open("https://www.artstation.com/artwork/NXBDP")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/artstation1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        View on Artstation
                    </button>
                </div>

                <div className="flex_MV anim_fadeIn3">
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/harley1.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/harley2.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/harley3.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/harley4.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/harley5.jpg")}></img>
                    </div>
                    <div className="flex_MV">
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/harley6.jpg")}></img>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Harley;