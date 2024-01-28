import React from 'react';

import '../../styles/style_text.css';
import '../../styles/style_button.css';
import '../../styles/style_container.css';
import '../../styles/style_anims.css';
import '../../styles/style_scroll.css';

const Mclaren = () => {
    return (
        <body style={{backgroundColor: "#eeeeee", overflowY: "hidden"}}>

            <div className="flex_MV" style={{marginRight: "5%", marginLeft: "5%", marginTop: "120px"}}>

                <div className="flex_MV anim_fadeIn1" style={{marginBottom: "20px"}}>
                    <h3> 1991 Mclaren MP4-6 </h3>
                </div>

                <p className="anim_fadeIn2">
                    <i>The 1991 Mclaren MP4-6 with the Iconic Marlboro white and red livery. I love the style and cleanliness of 
                    the late 80's to early 90's era Mclaren F1 cars with the MP4-6 standing out as the sharpest of the bunch. 
                    The seamless integration of the roll-hoop / upper intake into the bodywork, and clever use of black to make 
                    the car appear slimmer in the front combine to make one of the best looking F1 cars ever driven. This project 
                    took me 3 weeks to complete, much shorter than some of my previous works. I wasn't as obsessed with getting 
                    every tiny detail exactly correct, but instead let happy accidents happen. This was much more enjoyable, and 
                    while the end result isn't an exact replica it still carries the spirit of the MP4-6!</i>
                </p>

                <div className="flex_MV anim_fadeIn2" style={{marginBottom: "40px", maxWidth: "1000px", width: "100%"}}>
                    <button className="button_wide" onClick={() => window.open("https://www.cgtrader.com/3d-models/vehicle/other/mclaren-mp4-6-1991-6f723709-69e6-4fd0-8b66-bd52741443d0")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/cgt1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        Purchase on CGTrader
                    </button>
                    <button className="button_wide" onClick={() => window.open("https://www.artstation.com/artwork/Krb5NW")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/artstation1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        View on Artstation
                    </button>
                </div>

                <div className="flex_MV anim_fadeIn3">
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/mclaren1.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/mclaren2.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/mclaren3.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/mclaren4.jpg")}></img>
                    </div>
                    <div className="flex_MV" style={{margin: "4px"}}>
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/mclaren5.jpg")}></img>
                    </div>
                    <div className="flex_MV">
                        <img className="img_gallery" alt="artwork" src={require("../../images/artwork/mclaren6.jpg")}></img>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Mclaren;