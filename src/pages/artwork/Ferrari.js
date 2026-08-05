import React from 'react';
import {DetailPageShell, MediaGallery} from 'components/DetailPageShell.js';

const Ferrari = () => {
  const buttons = [
    {
      href: 'https://www.artstation.com/artwork/eJN433',
      icon: require('assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ];

  const media = [
    {alt: 'Ferrari artwork 1', src: require('assets/images/artwork/ferrari1.jpg')},
    {alt: 'Ferrari artwork 2', src: require('assets/images/artwork/ferrari2.jpg')},
    {alt: 'Ferrari artwork 3', src: require('assets/images/artwork/ferrari3.jpg')},
    {alt: 'Ferrari artwork 4', src: require('assets/images/artwork/ferrari4.jpg')},
    {alt: 'Ferrari artwork 5', src: require('assets/images/artwork/ferrari5.jpg')},
    {alt: 'Ferrari artwork 6', src: require('assets/images/artwork/ferrari6.jpg')},
    {alt: 'Ferrari artwork 7', src: require('assets/images/artwork/ferrari7.jpg')},
  ];

  return (
    <DetailPageShell
      title="1967 Ferrari 330 P4"
      description={(
        <>
          <i>Originally a game model for my Wreckfest mod, I revisited this Ferrari 330-P4
          inspired race car to create some proper Blender renders! More thought and effort
          were put into lighting, with the aim of emphasizing the flowing curves and unique
          silhouette of the car.</i>
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media}></MediaGallery>
    </DetailPageShell>
  )
}

export default Ferrari;