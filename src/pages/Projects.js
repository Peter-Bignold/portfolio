import React from 'react'
import Page from 'components/Page.js'
import ProjectCard from 'components/ProjectCard.js'

const Projects = () => {
  const projects = [
    {
      to: 'circuitry',
      logo: require('assets/images/circuitry/logo1.png'),
      title: 'Circuitry',
      meta: '2025 • React Native',
      description: (
        <>
          An accessible, polished, and versatile mobile app providing telemetry and insights to performance driving enthusiasts. Circuitry aims to
          increase the accessibility of motorsports by providing professional grade location, accelerometer, and timing data with only a mobile device.
          Featuring innovations like a custom track builder and heads-up-display, Circuitry can be tailored to many different motorsport disciplines.
        </>
      ),
      previews: [
      ],
    },
    {
      to: 'flocking_evolution',
      logo: require('assets/images/flocking_evolution/logo1.png'),
      title: 'Flocking Evolution',
      meta: '2023 • Unity',
      description: (
        <>
          An evolutionary flocking simulation inspired by <i>Flocks, Herds, and Schools: A Distributed Behavioral Model</i> - Craig Reynolds (1986).
          The simulation contains two herbivore species (blue and green) that multiply over time and one carnivore species (red) that 
          reproduces upon eating enough herbivores. Additionally features a suite of tools to alter and interact with the simulation.
        </>
      ),
      previews: [
        {src: require('assets/images/flocking_evolution/preview1.jpg'), alt: 'Flocking Evolution preview 1'},
        {src: require('assets/images/flocking_evolution/preview2.jpg'), alt: 'Flocking Evolution preview 2'},
        {src: require('assets/images/flocking_evolution/preview3.jpg'), alt: 'Flocking Evolution preview 3'},
      ],
    },
    {
      to: 'space_salvagers',
      logo: require('assets/images/space_salvagers/logo1.png'),
      title: 'Super Space Salvagers',
      meta: '2023 • C++',
      description: (
        <>
          <b>Student Exemplar for CPSC 585 - Games Programming at the University of Calgary</b><br/>
          Super Space Salvagers is a 4-player chaotic, goofy, and frantic party game where players compete to
          gather cargo pods from a rugged planet's space wreckage. Made for CPSC 585 - Games Programming, Super Space Salvagers
          was the joint effort of myself and four other students, made entirely in C++ using OpenGL and Nvidia PhysX. Supports 2 - 4 
          player splitscreen and singleplayer with clever AI opponents.
        </>
      ),
      previews: [
        {src: require('assets/images/space_salvagers/preview1.jpg'), alt: 'Super Space Salvagers preview 1'},
        {src: require('assets/images/space_salvagers/preview2.jpg'), alt: 'Super Space Salvagers preview 2'},
        {src: require('assets/images/space_salvagers/preview3.jpg'), alt: 'Super Space Salvagers preview 3'},
      ],
    },
    {
      to: 'mini_racer',
      logo: require('assets/images/mini_racer/logo1.png'),
      title: 'Mini Racer',
      meta: '2022 • Unreal Engine 5',
      description: (
        <>
          Mini Racer is a prototype circuit racer with a top-down camera angle, cartoony visual style, and custom arcade vehicle physics. 
          Features up to 20 vehicles per race, competitive AI drivers, and vehicle customization.
        </>
      ),
      previews: [
        {src: require('assets/images/mini_racer/preview1.jpg'), alt: 'Mini Racer preview 1'},
        {src: require('assets/images/mini_racer/preview2.jpg'), alt: 'Mini Racer preview 2'},
        {src: require('assets/images/mini_racer/preview3.jpg'), alt: 'Mini Racer preview 3'},
      ],
    },
    {
      to: 'apogee',
      logo: require('assets/images/apogee/logo1.png'),
      title: 'Apogee',
      meta: '2021 • Unreal Engine 4',
      description: (
        <>
          Cruise through a procedurally generated universe - exploring new planets and earning 
          high scores along the way. Reach further distances to unlock new ships and move up the 
          leaderboard rankings! Apogee is a physics - based infinite runner.
        </>
      ),
      previews: [
        {src: require('assets/images/apogee/preview1.jpg'), alt: 'Apogee preview 1'},
        {src: require('assets/images/apogee/preview2.jpg'), alt: 'Apogee preview 2'},
        {src: require('assets/images/apogee/preview3.jpg'), alt: 'Apogee preview 3'},
      ],
    },
    {
      to: 'pinata_clicker',
      logo: require('assets/images/pinata_clicker/logo1.png'),
      title: 'Pinata Clicker',
      meta: '2020 • Unreal Engine 4',
      description: (
        <>
          <b>Winner of the International Game Developer Association's 2020 E-Jam - Most Creative</b><br/>
          Click your way to candy GLORY! Pinata Clicker is a clicker-genre game combining 3D and 2D elements. 
          Spend your candy riches on new upgrades to expand your wealth, and save up for the almighty ancient 
          chancla. All you have to do is click! Pinata Clicker is the joint effort of myself and three other 
          developers and artists.
        </>
      ),
      previews: [
        {src: require('assets/images/pinata_clicker/preview1.jpg'), alt: 'Pinata Clicker preview 1'},
        {src: require('assets/images/pinata_clicker/preview2.jpg'), alt: 'Pinata Clicker preview 2'},
        {src: require('assets/images/pinata_clicker/preview3.jpg'), alt: 'Pinata Clicker preview 3'},
      ],
    },
    {
      to: 'misfire',
      logo: require('assets/images/misfire/logo1.png'),
      title: 'Misfire',
      meta: '2019 • Unreal Engine 4',
      description: (
        <>
          Face off against your friends with wacky guns that don't shoot straight! 
          Misfire is a Casual PVP Platform Shooter. Compete in matches of 2 - 4 players, 
          earn coins to unlock stylish new space suits, and ruin friendships along the way!
        </>
      ),
      previews: [
        {src: require('assets/images/misfire/preview1.jpg'), alt: 'Misfire preview 1'},
        {src: require('assets/images/misfire/preview2.jpg'), alt: 'Misfire preview 2'},
        {src: require('assets/images/misfire/preview3.jpg'), alt: 'Misfire preview 3'},
      ],
    },
  ]

  return (
    <Page background="background2.jpg">
      <div className="mb-10 flex flex-col items-center">
        <h1 className="mt-32 mb-2.5 text-5xl font-normal animate-fade-in-1 md:text-7xl">Projects</h1>
        <h2 className="text-xl font-light text-neutral-400 animate-fade-in-2 md:text-3xl">Apps, Games, Simulations, and Websites</h2>
      </div>
      <div className="flex w-full animate-move-up flex-col items-center gap-2">
        {projects.map((project) => (
          <ProjectCard key={project.to} {...project}></ProjectCard>
        ))}
      </div>
    </Page>
  )
}

export default Projects