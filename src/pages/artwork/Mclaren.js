import React from 'react';
import {DetailPageShell, MediaGallery} from 'components/DetailPageShell.js';

const Mclaren = () => {
  const buttons = [
    {
      href: 'https://www.cgtrader.com/3d-models/vehicle/other/mclaren-mp4-6-1991-6f723709-69e6-4fd0-8b66-bd52741443d0',
      icon: require('assets/images/home/cgt1.png'),
      iconAlt: 'CGTrader',
      label: 'Purchase on CGTrader',
    },
    {
      href: 'https://www.artstation.com/artwork/Krb5NW',
      icon: require('assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ];

  const media = [
    {alt: 'Mclaren artwork 1', src: require('assets/images/artwork/mclaren1.jpg')},
    {alt: 'Mclaren artwork 2', src: require('assets/images/artwork/mclaren2.jpg')},
    {alt: 'Mclaren artwork 3', src: require('assets/images/artwork/mclaren3.jpg')},
    {alt: 'Mclaren artwork 4', src: require('assets/images/artwork/mclaren4.jpg')},
    {alt: 'Mclaren artwork 5', src: require('assets/images/artwork/mclaren5.jpg')},
    {alt: 'Mclaren artwork 6', src: require('assets/images/artwork/mclaren6.jpg')},
  ];

  return (
    <DetailPageShell
      title="1991 Mclaren MP4-6"
      description={(
        <>
          <i>The 1991 Mclaren MP4-6 with the Iconic Marlboro white and red livery. I love the style and cleanliness of
          the late 80's to early 90's era Mclaren F1 cars with the MP4-6 standing out as the sharpest of the bunch.
          The seamless integration of the roll-hoop / upper intake into the bodywork, and clever use of black to make
          the car appear slimmer in the front combine to make one of the best looking F1 cars ever driven. This project
          took me 3 weeks to complete, much shorter than some of my previous works. I wasn't as obsessed with getting
          every tiny detail exactly correct, but instead let happy accidents happen. This was much more enjoyable, and
          while the end result isn't an exact replica it still carries the spirit of the MP4-6!</i>
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media}></MediaGallery>
    </DetailPageShell>
  )
}

export default Mclaren;