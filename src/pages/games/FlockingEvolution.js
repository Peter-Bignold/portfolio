import React from 'react';

import '../../styles/style_text.css';
import '../../styles/style_button.css';
import '../../styles/style_container.css';
import '../../styles/style_anims.css';
import '../../styles/style_scroll.css';

const FlockingEvolution = () => {
    return (
        <body style={{backgroundColor: "#eeeeee", overflowY: "hidden"}}>

            <div className="flex_MV" style={{marginRight: "5%", marginLeft: "5%", marginTop: "120px"}}>
                <div className="flex_MH anim_fadeIn1" style={{marginBottom: "40px"}}>
                    <img alt="logo" src={require("../../images/flocking_evolution/logo1.png")} style={{width: "85px", height: "85px"}}></img>
                    <div className="flex_LV" style={{paddingLeft: "32px"}}>
                        <h7> Flocking Evolution </h7>
                        <h8> 2023 &#x2022; Unity </h8>
                    </div>
                </div>
                <p className="anim_fadeIn2">
                    An evolutionary flocking simulation inspired by <i>Flocks, Herds, and Schools: A Distributed Behavioral Model</i> - Craig Reynolds (1986).
                    The simulation contains two herbivore species (blue and green) that multiply over time and one carnivore species (red) that 
                    reproduces upon eating enough herbivores. Additionally features a suite of tools to alter and interact with the simulation.
                </p>

                <div className="flex_MV anim_fadeIn2" style={{marginBottom: "40px", maxWidth: "1000px", width: "100%"}}>
                    <button className="button_wide" onClick={() => window.open("https://noodlegames.itch.io/flocking-evolution")} style={{margin: "4px"}}> 
                        <img src={require("../../images/home/itch1.png")} alt="Download" style={{width: "24px", height: "24px", paddingRight: "12px"}}></img>
                        Download on itch.io
                    </button>
                </div>
                
                <div className="flex_MV anim_fadeIn3">
                    <div style={{maxWidth: "1000px", marginBottom: "20px"}}>
                        <iframe className="embed_video" title="Simulation demonstration" frameborder="0" allow="fullscreen;" src="https://www.youtube.com/embed/YmZfC2egsYA?rel=0"></iframe>
                        <p> Simulation demonstration </p>
                    </div>
                    <div className="flex_MV" style={{marginBottom: "20px"}}>
                        <img className="img_gallery" alt="screenshot" src={require("../../images/flocking_evolution/screen4.jpg")}></img>
                        <p> Visualizing quadtree spatial subdivision, which vastly improves the performance
                            of agent perception. Compared to naively having each agent perceive every other agent, 
                            quadtree spatial subdivision has agents only perceive others inside the same
                            quadrant. This enables many more agents to be simulated at once.
                        </p>
                    </div>
                    <div className="flex_MV" style={{marginBottom: "20px"}}>
                        <img className="img_gallery" alt="screenshot" src={require("../../images/flocking_evolution/screen1.jpg")}></img>
                        <p> Using the despawner on a large group of herbivores </p>
                    </div>
                    <div className="flex_MV" style={{marginBottom: "20px"}}>
                        <img className="img_gallery" alt="screenshot" src={require("../../images/flocking_evolution/screen2.jpg")}></img>
                        <p> Carnivores herd and hunt herbivores </p>
                    </div>
                    <div className="flex_MV" style={{marginBottom: "20px"}}>
                        <img className="img_gallery" alt="screenshot" src={require("../../images/flocking_evolution/screen3.jpg")}></img>
                        <p> Using the lure to redirect blue herbivores </p>
                    </div>
                    <div className="flex_MV">
                        <img className="img_gallery" alt="screenshot" src={require("../../images/flocking_evolution/screen5.jpg")}></img>
                        <p> Giving agents particle trails </p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default FlockingEvolution;