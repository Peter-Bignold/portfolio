import React from 'react';
import {DetailPageShell, MediaGallery} from '../../components/DetailPageShell.js';

const Beetle = () => {
  const buttons = [
    {
      href: 'https://www.artstation.com/artwork/rAb9z2',
      icon: require('../../assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ];

  const media = [
    {alt: 'Beetle artwork 1', src: require('../../assets/images/artwork/beetle1.jpg')},
    {alt: 'Beetle artwork 2', src: require('../../assets/images/artwork/beetle2.jpg')},
    {alt: 'Beetle artwork 3', src: require('../../assets/images/artwork/beetle3.jpg')},
    {alt: 'Beetle artwork 4', src: require('../../assets/images/artwork/beetle4.jpg')},
  ];

  return (
    <DetailPageShell
      title="1959 Volkswagen Beetle"
      description={(
        <>
          <i>One of the first vehicle models I attempted to model was a 1959 VW Beetle. The topology was a mess and the presentation sloppy,
          but it helped me learn the basics of 3D modeling. As I was sifting through my old projects recently I came across it, and decided
          to give it a refresh with the experience I've gained since then. I re-modelled the body, bumpers, tires/wheels, and most of
          everything else too. I wasn't too concerned with making it perfect and challenged myself to work on it for a single day only.</i>
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media}></MediaGallery>
    </DetailPageShell>
  )
}

export default Beetle;