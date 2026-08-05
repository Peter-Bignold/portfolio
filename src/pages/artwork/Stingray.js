import React from 'react';
import {DetailPageShell, MediaGallery} from '../../components/DetailPageShell.js';

const Stingray = () => {
  const buttons = [
    {
      href: 'https://www.artstation.com/artwork/xE9Z4',
      icon: require('../../assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ];

  const media = [
    {alt: 'Stingray artwork 1', src: require('../../assets/images/artwork/stingray1.jpg')},
    {alt: 'Stingray artwork 2', src: require('../../assets/images/artwork/stingray2.jpg')},
    {alt: 'Stingray artwork 3', src: require('../../assets/images/artwork/stingray3.jpg')},
    {alt: 'Stingray artwork 4', src: require('../../assets/images/artwork/stingray4.jpg')},
    {alt: 'Stingray artwork 5', src: require('../../assets/images/artwork/stingray5.jpg')},
    {alt: 'Stingray artwork 6', src: require('../../assets/images/artwork/stingray6.jpg')},
    {alt: 'Stingray artwork 7', src: require('../../assets/images/artwork/stingray7.jpg')},
    {alt: 'Stingray artwork 8', src: require('../../assets/images/artwork/stingray8.jpg')},
    {alt: 'Stingray artwork 9', src: require('../../assets/images/artwork/stingray9.jpg')},
  ];

  return (
    <DetailPageShell
      title="1967 Chevrolet Corvette Stingray"
      description={(
        <>
          <i>A 1967 Corvette Stingray featuring a fully detailed interior. I combined elements
          from earlier Stingray models, namely the side vents and split rear window.
          Other than those tweaks the car is accurate to the original.</i>
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media}></MediaGallery>
    </DetailPageShell>
  )
}

export default Stingray;