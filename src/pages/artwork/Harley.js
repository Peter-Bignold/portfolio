import React from 'react';
import {DetailPageShell, MediaGallery} from 'components/DetailPageShell.js';

const Harley = () => {
  const buttons = [
    {
      href: 'https://www.cgtrader.com/3d-models/vehicle/motorcycle/2018-harley-davidson-fatboy',
      icon: require('assets/images/home/cgt1.png'),
      iconAlt: 'CGTrader',
      label: 'Purchase on CGTrader',
    },
    {
      href: 'https://www.artstation.com/artwork/NXBDP',
      icon: require('assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ];

  const media = [
    {alt: 'Harley artwork 1', src: require('assets/images/artwork/harley1.jpg')},
    {alt: 'Harley artwork 2', src: require('assets/images/artwork/harley2.jpg')},
    {alt: 'Harley artwork 3', src: require('assets/images/artwork/harley3.jpg')},
    {alt: 'Harley artwork 4', src: require('assets/images/artwork/harley4.jpg')},
    {alt: 'Harley artwork 5', src: require('assets/images/artwork/harley5.jpg')},
    {alt: 'Harley artwork 6', src: require('assets/images/artwork/harley6.jpg')},
  ];

  return (
    <DetailPageShell
      title="2018 Harley Davidson Softail Fatboy"
      description={(
        <>
          <i>My version of the 2018 Fatboy. This was one of my longer projects,
          taking roughly 3 months to finish. Each detail of the engine and linkages are
          modelled as accurately as possible.</i>
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media}></MediaGallery>
    </DetailPageShell>
  )
}

export default Harley;