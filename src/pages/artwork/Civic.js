import React from 'react';
import {DetailPageShell, MediaGallery} from 'components/DetailPageShell.js';

const Civic = () => {
  const buttons = [
    {
      href: 'https://www.cgtrader.com/3d-models/car/sport-car/honda-civic-si-2006-2008',
      icon: require('assets/images/home/cgt1.png'),
      iconAlt: 'CGTrader',
      label: 'Purchase on CGTrader',
    },
    {
      href: 'https://www.artstation.com/artwork/4X1Y8W',
      icon: require('assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ];

  const media = [
    {alt: 'Civic artwork 1', src: require('assets/images/artwork/civic1.jpg')},
    {alt: 'Civic artwork 2', src: require('assets/images/artwork/civic2.jpg')},
    {alt: 'Civic artwork 3', src: require('assets/images/artwork/civic3.jpg')},
    {alt: 'Civic artwork 4', src: require('assets/images/artwork/civic4.jpg')},
    {alt: 'Civic artwork 5', src: require('assets/images/artwork/civic5.jpg')},
    {alt: 'Civic artwork 6', src: require('assets/images/artwork/civic6.jpg')},
    {alt: 'Civic artwork 7', src: require('assets/images/artwork/civic7.jpg')},
  ];

  return (
    <DetailPageShell
      title="2007 Honda Civic Si"
      description={(
        <>
          <i>The 8th Generation Honda Civic Si features a lightweight chassis, short wheelbase, 6-speed manual, and
          2.0 liter naturally aspirated i-VTEC 4 cylinder engine. The styling is modest but charming, with no unnecessary
          vents or trim. Relaxed lines flow from front to back, with the flush head and tail lights meshing perfectly.</i>
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media}></MediaGallery>
    </DetailPageShell>
  )
}

export default Civic;