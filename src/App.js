import React from 'react'
import {Routes, Route} from "react-router-dom"

// Header / Footer
import Header from 'components/Header.js'
import Footer from 'components/Footer.js'

// Main Pages
import Home from 'pages/Home.js'
import Projects from 'pages/Projects.js'
import Creative from 'pages/Creative.js'
import Contact from 'pages/Contact.js'

// Games
import MJTimingCloud from 'pages/projects/MJTimingCloud.js'
import Trackfest from 'pages/projects/Trackfest.js'
import Circuitry from 'pages/projects/Circuitry.js'
import FlockingEvolution from 'pages/projects/FlockingEvolution.js'
import SpaceSalvagers from 'pages/projects/SpaceSalvagers.js'
import MiniRacer from 'pages/projects/MiniRacer.js'
import Apogee from 'pages/projects/Apogee.js'
import PinataClicker from 'pages/projects/PinataClicker.js'
import Misfire from 'pages/projects/Misfire.js'

// Artwork
import Bmw from 'pages/artwork/Bmw.js'
import Harley from 'pages/artwork/Harley.js'
import Mclaren from 'pages/artwork/Mclaren.js'
import Ninja from 'pages/artwork/Ninja.js'
import Civic from 'pages/artwork/Civic.js'
import Ferrari from 'pages/artwork/Ferrari.js'
import Mazda from 'pages/artwork/Mazda.js'
import Stingray from 'pages/artwork/Stingray.js'
import Gtx from 'pages/artwork/Gtx.js'
import Beetle from 'pages/artwork/Beetle.js'
import Guitar from 'pages/artwork/Guitar.js'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-neutral-100">
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/mjtiming_cloud" element={<MJTimingCloud/>}/>
          <Route path="/projects/trackfest" element={<Trackfest/>}/>
          <Route path="/projects/circuitry" element={<Circuitry/>}/>
          <Route path="/projects/flocking_evolution" element={<FlockingEvolution/>}/>
          <Route path="/projects/space_salvagers" element={<SpaceSalvagers/>}/>
          <Route path="/projects/mini_racer" element={<MiniRacer/>}/>
          <Route path="/projects/apogee" element={<Apogee/>}/>
          <Route path="/projects/pinata_clicker" element={<PinataClicker/>}/>
          <Route path="/projects/misfire" element={<Misfire/>}/>
        <Route path="/creative" element={<Creative/>}/>
          <Route path="/creative/bmw" element={<Bmw/>}/>
          <Route path="/creative/harley" element={<Harley/>}/>
          <Route path="/creative/mclaren" element={<Mclaren/>}/>
          <Route path="/creative/ninja" element={<Ninja/>}/>
          <Route path="/creative/civic" element={<Civic/>}/>
          <Route path="/creative/ferrari" element={<Ferrari/>}/>
          <Route path="/creative/mazda" element={<Mazda/>}/>
          <Route path="/creative/stingray" element={<Stingray/>}/>
          <Route path="/creative/gtx" element={<Gtx/>}/>
          <Route path="/creative/beetle" element={<Beetle/>}/>
          <Route path="/creative/guitar" element={<Guitar/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
        </div>
      )
}

export default App