import React from 'react';
import {DetailPageShell, MediaGallery} from '../../components/DetailPageShell.js';

const Guitar = () => {
  const buttons = [
    {
      href: 'https://www.artstation.com/artwork/PXBqar',
      icon: require('../../assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ];

  const media = [
    {alt: 'Guitar artwork 1', src: require('../../assets/images/artwork/guitar1.jpg')},
    {alt: 'Guitar artwork 2', src: require('../../assets/images/artwork/guitar2.jpg')},
    {alt: 'Guitar artwork 3', src: require('../../assets/images/artwork/guitar3.jpg')},
    {alt: 'Guitar artwork 4', src: require('../../assets/images/artwork/guitar4.jpg')},
    {alt: 'Guitar artwork 5', src: require('../../assets/images/artwork/guitar5.jpg')},
    {alt: 'Guitar artwork 6', src: require('../../assets/images/artwork/guitar6.jpg')},
    {alt: 'Guitar artwork 7', src: require('../../assets/images/artwork/guitar7.jpg')},
  ];

  return (
    <DetailPageShell
      title="Simon & Patrick Songsmith"
      description={(
        <>
          <i>A Simon and Patrick Songsmith modelled off my very own guitar! Having a physical object
          to refer to when modeling fine details was incredibly helpful, and enabled me to achieve a high
          level of realism.</i>
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media}></MediaGallery>
    </DetailPageShell>
  )
}

export default Guitar;