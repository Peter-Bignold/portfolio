import React from 'react';
import {DetailPageShell, MediaGallery} from '../../components/DetailPageShell.js';

const Ninja = () => {
  const buttons = [
    {
      href: 'https://www.cgtrader.com/3d-models/vehicle/motorcycle/kawasaki-ninja-gpz-900r',
      icon: require('../../assets/images/home/cgt1.png'),
      iconAlt: 'CGTrader',
      label: 'Purchase on CGTrader',
    },
    {
      href: 'https://www.artstation.com/artwork/LeogNr',
      icon: require('../../assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ];

  const media = [
    {alt: 'Ninja artwork 1', src: require('../../assets/images/artwork/ninja1.jpg')},
    {alt: 'Ninja artwork 2', src: require('../../assets/images/artwork/ninja2.jpg')},
    {alt: 'Ninja artwork 3', src: require('../../assets/images/artwork/ninja3.jpg')},
    {alt: 'Ninja artwork 4', src: require('../../assets/images/artwork/ninja4.jpg')},
    {alt: 'Ninja artwork 5', src: require('../../assets/images/artwork/ninja5.jpg')},
    {alt: 'Ninja artwork 6', src: require('../../assets/images/artwork/ninja6.jpg')},
    {alt: 'Ninja artwork 7', src: require('../../assets/images/artwork/ninja7.jpg')},
    {alt: 'Ninja artwork 8', src: require('../../assets/images/artwork/ninja8.jpg')},
    {alt: 'Ninja artwork 9', src: require('../../assets/images/artwork/ninja9.jpg')},
  ];

  return (
    <DetailPageShell
      title="1985 Kawasaki Ninja"
      description={(
        <>
          <i>The Top-Gun bike brought to life in UE5 with real-time raytracing! Here's the final result of my
          2-month journey to model the Kawasaki Ninja (or GPZ 900R) with as much detail as possible. I
          recently got an RTX card and was itching to play around with UE5's Lumen, and it sure impresses.
          The ability to see the model rendered from every angle in real-time was a game changer, and I
          feel elevated the project's quality.</i>
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media}></MediaGallery>
    </DetailPageShell>
  )
}

export default Ninja;