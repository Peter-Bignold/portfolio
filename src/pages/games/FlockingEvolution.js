import React from 'react';
import {DetailPageShell, MediaGallery} from '../../components/DetailPageShell.js';

const FlockingEvolution = () => {
  const buttons = [
    {
      href: 'https://noodlegames.itch.io/flocking-evolution',
      icon: require('../../assets/images/home/itch1.png'),
      iconAlt: 'itch.io',
      label: 'Download on itch.io',
    },
  ];

  const media = [
    {type: 'video', title: 'Simulation demonstration', src: 'https://www.youtube.com/embed/YmZfC2egsYA?rel=0', caption: 'Simulation demonstration'},
    {alt: 'Flocking Evolution quadtree visualization', src: require('../../assets/images/flocking_evolution/screen4.jpg'), caption: 'Visualizing quadtree spatial subdivision, which vastly improves the performance of agent perception. Compared to naively having each agent perceive every other agent, quadtree spatial subdivision has agents only perceive others inside the same quadrant. This enables many more agents to be simulated at once.'},
    {alt: 'Flocking Evolution despawner tool', src: require('../../assets/images/flocking_evolution/screen1.jpg'), caption: 'Using the despawner on a large group of herbivores'},
    {alt: 'Flocking Evolution carnivores hunting', src: require('../../assets/images/flocking_evolution/screen2.jpg'), caption: 'Carnivores herd and hunt herbivores'},
    {alt: 'Flocking Evolution lure tool', src: require('../../assets/images/flocking_evolution/screen3.jpg'), caption: 'Using the lure to redirect blue herbivores'},
    {alt: 'Flocking Evolution particle trails', src: require('../../assets/images/flocking_evolution/screen5.jpg'), caption: 'Giving agents particle trails'},
  ];

  return (
    <DetailPageShell
      title="Flocking Evolution"
      subtitle="2023 • Unity"
      logo={require('../../assets/images/flocking_evolution/logo1.png')}
      description={(
        <>
          An evolutionary flocking simulation inspired by <i>Flocks, Herds, and Schools: A Distributed Behavioral Model</i> - Craig Reynolds (1986).
          The simulation contains two herbivore species (blue and green) that multiply over time and one carnivore species (red) that
          reproduces upon eating enough herbivores. Additionally features a suite of tools to alter and interact with the simulation.
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media}></MediaGallery>
    </DetailPageShell>
  )
}

export default FlockingEvolution;