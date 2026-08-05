import React from 'react';
import {DetailPageShell, MediaGallery} from 'components/DetailPageShell.js';

const SpaceSalvagers = () => {
  const buttons = [
    {
      href: 'https://github.com/matthew-mcc/CPSC585',
      icon: require('assets/images/home/github1.png'),
      iconAlt: 'GitHub',
      label: 'Github Repository',
    },
  ];

  const media = [
    {alt: 'Super Space Salvagers title screen', src: require('assets/images/space_salvagers/screen4.jpg'), caption: 'Title screen and credits'},
    {alt: 'Super Space Salvagers cargo dropoff', src: require('assets/images/space_salvagers/screen6.jpg'), caption: 'Rushing to the cargo dropoff point'},
    {alt: 'Super Space Salvagers rocket boost', src: require('assets/images/space_salvagers/screen1.jpg'), caption: 'Rocket boosting into the air'},
    {alt: 'Super Space Salvagers AI opponents', src: require('assets/images/space_salvagers/screen2.jpg'), caption: "AI opponents maneuvering to steal each other's cargo"},
    {alt: 'Super Space Salvagers rival collision', src: require('assets/images/space_salvagers/screen3.jpg'), caption: 'Boosting into a rival salvager'},
    {alt: 'Super Space Salvagers splitscreen', src: require('assets/images/space_salvagers/screen5.jpg'), caption: '4 - player splitscreen'},
  ];

  return (
    <DetailPageShell
      title="Super Space Salvagers"
      subtitle="2023 • C++"
      logo={require('assets/images/space_salvagers/logo1.png')}
      description={(
        <>
          <b>Student Exemplar for CPSC 585 - Games Programming at the University of Calgary</b><br/>
          Super Space Salvagers is a 4-player chaotic, goofy, and frantic party game where players compete to
          gather cargo pods from a rugged planet's space wreckage. Made for CPSC 585 - Games Programming, Super Space Salvagers
          was the joint effort of myself and four other students, made entirely in C++ using OpenGL and Nvidia PhysX. Supports 2 - 4
          player splitscreen and singleplayer with clever AI opponents.
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media}></MediaGallery>
    </DetailPageShell>
  )
}

export default SpaceSalvagers;