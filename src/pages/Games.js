import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/style_text.css';
import '../styles/style_button.css';
import '../styles/style_container.css';
import '../styles/style_anims.css';
import '../styles/style_scroll.css';

const Games = () => {
    return (
        <body style={{backgroundColor: "#eeeeee", overflowY: "hidden"}}>
            <div className="flex_MV" style={{marginBottom: "40px", marginRight: "5%", marginLeft: "5%"}}>
                <h1 className="anim_fadeIn1"> Projects </h1>
                <h2 className="anim_fadeIn2"> Apps, Games, Simulations, and Prototypes </h2>
            </div>

            <div className="flex_MV anim_moveUp" style={{marginRight: "5%", marginLeft: "5%"}}>
                <Link className="flex_LV button_game" to='circuitry' style={{marginTop: "10px"}}>
                    <div className="flex_LH">
                        <img alt="logo" src={require("../images/circuitry/logo1.png")} style={{width: "68px", height: "68px"}}></img>
                        <div className="flex_LV" style={{marginLeft: "24px"}}>
                            <h4> Circuitry </h4>
                            <h5> 2025 &#x2022; React Native </h5>
                        </div>
                    </div>
                    <p style={{marginLeft: "4px", marginRight: "4px", marginTop: "12px", marginBottom: "12px", maxWidth: "100%"}}> 
                        An accessible, polished, and versatile mobile app providing telemetry and insights to performance driving enthusiasts. Circuitry aims to
                        increase the accessibility of motorsports by providing professional grade location, accelerometer, and timing data with only a mobile device.
                        Featuring innovations like a custom track builder and heads-up-display, Circuitry can be tailored to many different motorsport disciplines.
                    </p>
                    <div className="flex_MH wrap">
                        <img className="img_app" alt="preview" width={281} height={609} src={require("../images/circuitry/preview1.jpg")}></img>
                        <img className="img_app" alt="preview" width={281} height={609} src={require("../images/circuitry/preview2.jpg")}></img>
                        <img className="img_app" alt="preview" width={281} height={609} src={require("../images/circuitry/preview3.jpg")}></img>
                    </div>
                </Link>
                <Link className="flex_LV button_game" to='flocking_evolution' style={{marginTop: "10px"}}>
                    <div className="flex_LH">
                        <img alt="logo" src={require("../images/flocking_evolution/logo1.png")} style={{width: "68px", height: "68px"}}></img>
                        <div className="flex_LV" style={{marginLeft: "24px"}}>
                            <h4> Flocking Evolution </h4>
                            <h5> 2023 &#x2022; Unity </h5>
                        </div>
                    </div>
                    <p style={{marginLeft: "4px", marginRight: "4px", marginTop: "12px", marginBottom: "12px", maxWidth: "100%"}}> 
                        An evolutionary flocking simulation inspired by <i>Flocks, Herds, and Schools: A Distributed Behavioral Model</i> - Craig Reynolds (1986).
                        The simulation contains two herbivore species (blue and green) that multiply over time and one carnivore species (red) that 
                        reproduces upon eating enough herbivores. Additionally features a suite of tools to alter and interact with the simulation.
                    </p>
                    <div className="flex_MH wrap">
                        <img className="img_game" alt="preview" src={require("../images/flocking_evolution/preview1.jpg")}></img>
                        <img className="img_game" alt="preview" src={require("../images/flocking_evolution/preview2.jpg")}></img>
                        <img className="img_game" alt="preview" src={require("../images/flocking_evolution/preview3.jpg")}></img>
                    </div>
                </Link>

                <Link className="flex_LV button_game" to='space_salvagers' style={{marginTop: "16px"}}>
                    <div className="flex_LH">
                        <img alt="logo" src={require("../images/space_salvagers/logo1.png")} style={{width: "68px", height: "68px"}}></img>
                        <div className="flex_LV" style={{marginLeft: "24px"}}>
                            <h4> Super Space Salvagers </h4>
                            <h5> 2023 &#x2022; C++ </h5>
                        </div>
                    </div>
                    <p style={{marginLeft: "4px", marginRight: "4px", marginTop: "12px", marginBottom: "12px", maxWidth: "100%"}}> 
                        <b>Student Exemplar for CPSC 585 - Games Programming at the University of Calgary</b><br/>
                        Super Space Salvagers is a 4-player chaotic, goofy, and frantic party game where players compete to
                        gather cargo pods from a rugged planet's space wreckage. Made for CPSC 585 - Games Programming, Super Space Salvagers
                        was the joint effort of myself and four other students, made entirely in C++ using OpenGL and Nvidia PhysX. Supports 2 - 4 
                        player splitscreen and singleplayer with clever AI opponents. 
                    </p>
                    <div className="flex_MH wrap">
                        <img className="img_game" alt="preview" src={require("../images/space_salvagers/preview1.jpg")}></img>
                        <img className="img_game" alt="preview" src={require("../images/space_salvagers/preview2.jpg")}></img>
                        <img className="img_game" alt="preview" src={require("../images/space_salvagers/preview3.jpg")}></img>
                    </div>
                </Link>

                <Link className="flex_LV button_game" to="mini_racer" style={{marginTop: "16px"}}>
                    <div className="flex_LH">
                        <img alt="logo" src={require("../images/mini_racer/logo1.png")} style={{width: "68px", height: "68px"}}></img>
                        <div className="flex_LV" style={{marginLeft: "24px"}}>
                            <h4> Mini Racer </h4>
                            <h5> 2022 &#x2022; Unreal Engine 5 </h5>
                        </div>
                    </div>
                    <p style={{marginLeft: "4px", marginRight: "4px", marginTop: "12px", marginBottom: "12px", maxWidth: "100%"}}> 
                        Mini Racer is a prototype circuit racer with a top-down camera angle, cartoony visual style, and custom arcade vehicle physics. 
                        Features up to 20 vehicles per race, competitive AI drivers, and vehicle customization.
                    </p>
                    <div className="flex_MH wrap">
                        <img className="img_game" alt="preview" src={require("../images/mini_racer/preview1.jpg")}></img>
                        <img className="img_game" alt="preview" src={require("../images/mini_racer/preview2.jpg")}></img>
                        <img className="img_game" alt="preview" src={require("../images/mini_racer/preview3.jpg")}></img>
                    </div>
                </Link>

                <Link className="flex_LV button_game" to="apogee" style={{marginTop: "16px"}}>
                    <div className="flex_LH">
                        <img alt="logo" src={require("../images/apogee/logo1.png")} style={{width: "68px", height: "68px"}}></img>
                        <div className="flex_LV" style={{marginLeft: "24px"}}>
                            <h4> Apogee </h4>
                            <h5> 2021 &#x2022; Unreal Engine 4 </h5>
                        </div>
                    </div>
                    <p style={{marginLeft: "4px", marginRight: "4px", marginTop: "12px", marginBottom: "12px", maxWidth: "100%"}}> 
                        Cruise through a procedurally generated universe - exploring new planets and earning 
                        high scores along the way. Reach further distances to unlock new ships and move up the 
                        leaderboard rankings! Apogee is a physics - based infinite runner.
                    </p>
                    <div className="flex_MH wrap">
                        <img className="img_game" alt="preview" src={require("../images/apogee/preview1.jpg")}></img>
                        <img className="img_game" alt="preview" src={require("../images/apogee/preview2.jpg")}></img>
                        <img className="img_game" alt="preview" src={require("../images/apogee/preview3.jpg")}></img>
                    </div>
                </Link>

                <Link className="flex_LV button_game" to="pinata_clicker" style={{marginTop: "16px"}}>
                    <div className="flex_LH">
                        <img alt="logo" src={require("../images/pinata_clicker/logo1.png")} style={{width: "68px", height: "68px"}}></img>
                        <div className="flex_LV" style={{marginLeft: "24px"}}>
                            <h4> Pinata Clicker </h4>
                            <h5> 2020 &#x2022; Unreal Engine 4 </h5>
                        </div>
                    </div>
                    <p style={{marginLeft: "4px", marginRight: "4px", marginTop: "12px", marginBottom: "12px", maxWidth: "100%"}}> 
                        <b>Winner of the International Game Developer Association's 2020 E-Jam - Most Creative</b><br/>
                        Click your way to candy GLORY! Pinata Clicker is a clicker-genre game combining 3D and 2D elements. 
                        Spend your candy riches on new upgrades to expand your wealth, and save up for the almighty ancient 
                        chancla. All you have to do is click! Pinata Clicker is the joint effort of myself and three other 
                        developers and artists.
                    </p>
                    <div className="flex_MH wrap">
                        <img className="img_game" alt="preview" src={require("../images/pinata_clicker/preview1.jpg")}></img>
                        <img className="img_game" alt="preview" src={require("../images/pinata_clicker/preview2.jpg")}></img>
                        <img className="img_game" alt="preview" src={require("../images/pinata_clicker/preview3.jpg")}></img>
                    </div>
                </Link>
                
                <Link className="flex_LV button_game" to="misfire" style={{marginTop: "16px"}}>
                    <div className="flex_LH">
                        <img alt="logo" src={require("../images/misfire/logo1.png")} style={{width: "68px", height: "68px"}}></img>
                        <div className="flex_LV" style={{marginLeft: "24px"}}>
                            <h4> Misfire </h4>
                            <h5> 2019 &#x2022; Unreal Engine 4 </h5>
                        </div>
                    </div>
                    <p style={{marginLeft: "4px", marginRight: "4px", marginTop: "12px", marginBottom: "12px", maxWidth: "100%"}}> 
                        Face off against your friends with wacky guns that don't shoot straight! 
                        Misfire is a Casual PVP Platform Shooter. Compete in matches of 2 - 4 players, 
                        earn coins to unlock stylish new space suits, and ruin friendships along the way!
                    </p>
                    <div className="flex_MH wrap">
                        <img className="img_game" alt="preview" src={require("../images/misfire/preview1.jpg")}></img>
                        <img className="img_game" alt="preview" src={require("../images/misfire/preview2.jpg")}></img>
                        <img className="img_game" alt="preview" src={require("../images/misfire/preview3.jpg")}></img>
                    </div>
                </Link>
            </div>
        </body>
    )
}

export default Games;