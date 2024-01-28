import React from 'react';
import {Routes, Route} from "react-router-dom";

// Header / Footer
import Header from './pages/Header.js';
import Footer from './pages/Footer.js';

// Main Pages
import Home from './pages/Home.js';
import Games from './pages/Games.js';
import Artwork from './pages/Artwork.js';
import Contact from './pages/Contact.js';

// Games
import FlockingEvolution from './pages/games/FlockingEvolution.js';
import SpaceSalvagers from './pages/games/SpaceSalvagers.js';
import MiniRacer from './pages/games/MiniRacer.js';
import Apogee from './pages/games/Apogee.js';
import PinataClicker from './pages/games/PinataClicker.js';
import Misfire from './pages/games/Misfire.js';

// Artwork
import Bmw from './pages/artwork/Bmw.js';
import Harley from './pages/artwork/Harley.js';
import Mclaren from './pages/artwork/Mclaren.js';
import Ninja from './pages/artwork/Ninja.js';
import Civic from './pages/artwork/Civic.js';
import Ferrari from './pages/artwork/Ferrari.js';
import Mazda from './pages/artwork/Mazda.js';
import Stingray from './pages/artwork/Stingray.js';
import Gtx from './pages/artwork/Gtx.js';
import Beetle from './pages/artwork/Beetle.js';
import Guitar from './pages/artwork/Guitar.js';

const App = () => {
    return (
        <body>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/games" element={<Games/>}/>
                    <Route path="/games/flocking_evolution" element={<FlockingEvolution/>}/>
                    <Route path="/games/space_salvagers" element={<SpaceSalvagers/>}/>
                    <Route path="/games/mini_racer" element={<MiniRacer/>}/>
                    <Route path="/games/apogee" element={<Apogee/>}/>
                    <Route path="/games/pinata_clicker" element={<PinataClicker/>}/>
                    <Route path="/games/misfire" element={<Misfire/>}/>
                <Route path="/artwork" element={<Artwork/>}/>
                    <Route path="/artwork/bmw" element={<Bmw/>}/>
                    <Route path="/artwork/harley" element={<Harley/>}/>
                    <Route path="/artwork/mclaren" element={<Mclaren/>}/>
                    <Route path="/artwork/ninja" element={<Ninja/>}/>
                    <Route path="/artwork/civic" element={<Civic/>}/>
                    <Route path="/artwork/ferrari" element={<Ferrari/>}/>
                    <Route path="/artwork/mazda" element={<Mazda/>}/>
                    <Route path="/artwork/stingray" element={<Stingray/>}/>
                    <Route path="/artwork/gtx" element={<Gtx/>}/>
                    <Route path="/artwork/beetle" element={<Beetle/>}/>
                    <Route path="/artwork/guitar" element={<Guitar/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </body>
      );
}

export default App;