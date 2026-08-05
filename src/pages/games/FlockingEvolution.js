import React from 'react';
import ExternalButton from 'components/ExternalButton.js';
import MediaGallery from 'components/MediaGallery.js';
import Page from 'components/Page.js';

const FlockingEvolution = () => {
  const buttons = [
    {
      href: 'https://noodlegames.itch.io/flocking-evolution',
      icon: require('assets/images/home/itch1.png'),
      iconAlt: 'itch.io',
      label: 'Download on itch.io',
    },
  ];

  const media = [
    {type: 'video', title: 'Simulation demonstration', src: 'https://www.youtube.com/embed/YmZfC2egsYA?rel=0', caption: 'Simulation demonstration'},
    {alt: 'Flocking Evolution quadtree visualization', src: require('assets/images/flocking_evolution/screen4.jpg'), caption: 'Visualizing quadtree spatial subdivision, which vastly improves the performance of agent perception. Compared to naively having each agent perceive every other agent, quadtree spatial subdivision has agents only perceive others inside the same quadrant. This enables many more agents to be simulated at once.'},
    {alt: 'Flocking Evolution despawner tool', src: require('assets/images/flocking_evolution/screen1.jpg'), caption: 'Using the despawner on a large group of herbivores'},
    {alt: 'Flocking Evolution carnivores hunting', src: require('assets/images/flocking_evolution/screen2.jpg'), caption: 'Carnivores herd and hunt herbivores'},
    {alt: 'Flocking Evolution lure tool', src: require('assets/images/flocking_evolution/screen3.jpg'), caption: 'Using the lure to redirect blue herbivores'},
    {alt: 'Flocking Evolution particle trails', src: require('assets/images/flocking_evolution/screen5.jpg'), caption: 'Giving agents particle trails'},
  ];

  return (
    <Page className="pt-32">
      <div className="mb-10 flex flex-col items-center">
        <div className="mb-10 flex flex-col items-center justify-center gap-4 animate-fade-in-1 sm:flex-row">
          <img className="h-20 w-20" alt="Flocking Evolution logo" src={require('assets/images/flocking_evolution/logo1.png')}></img>
          <div className="flex flex-col items-center text-center sm:items-start sm:pl-8 sm:text-left">
            <h1 className="mb-2.5 text-4xl font-semibold md:text-5xl">Flocking Evolution</h1>
            <p className="mt-2 text-3xl font-normal text-neutral-400 md:text-3xl">2023 • Unity</p>
          </div>
        </div>
        <div className="animate-fade-in-2 max-w-5xl text-center text-xl font-light leading-[1.3] md:text-2xl">
          An evolutionary flocking simulation inspired by <i>Flocks, Herds, and Schools: A Distributed Behavioral Model</i> - Craig Reynolds (1986).
          The simulation contains two herbivore species (blue and green) that multiply over time and one carnivore species (red) that
          reproduces upon eating enough herbivores. Additionally features a suite of tools to alter and interact with the simulation.
        </div>
      </div>

      <div className="mb-10 flex w-full max-w-5xl animate-fade-in-2 flex-col items-center">
        {buttons.map((button) => (
          <ExternalButton key={button.label} href={button.href} icon={button.icon} iconAlt={button.iconAlt} disabled={button.disabled} className="my-1">
            {button.label}
          </ExternalButton>
        ))}
      </div>

      <div className="flex w-full flex-col items-center animate-fade-in-3">
        <MediaGallery items={media}></MediaGallery>
      </div>
    </Page>
  )
}

export default FlockingEvolution;