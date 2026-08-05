import React from 'react';
import {DetailPageShell, MediaGallery} from '../../components/DetailPageShell.js';

const Bmw = () => {
  const buttons = [
    {
      href: 'https://3dmodels.org/blog/peter-bignold-interview/',
      icon: require('../../assets/images/home/3dm1.png'),
      iconAlt: '3DModels.org',
      label: 'Artist Interview',
    },
    {
      href: 'https://3dmodels.org/challenges/making-up-lost-time/',
      icon: require('../../assets/images/home/3dm1.png'),
      iconAlt: '3DModels.org',
      label: 'View on 3DModels.org',
    },
    {
      href: 'https://www.artstation.com/artwork/xDxxOm',
      icon: require('../../assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ];

  const media = [
    {type: 'video', title: 'Modeling timelapse', src: 'https://www.youtube.com/embed/U2CDPIyf9lA?rel=0'},
    {alt: 'BMW artwork 1', src: require('../../assets/images/artwork/bmw1.jpg')},
    {alt: 'BMW artwork 2', src: require('../../assets/images/artwork/bmw2.jpg')},
    {alt: 'BMW artwork 3', src: require('../../assets/images/artwork/bmw3.jpg')},
    {alt: 'BMW artwork 4', src: require('../../assets/images/artwork/bmw4.jpg')},
    {alt: 'BMW artwork 5', src: require('../../assets/images/artwork/bmw5.jpg')},
    {alt: 'BMW artwork 6', src: require('../../assets/images/artwork/bmw6.jpg')},
    {alt: 'BMW artwork 7', src: require('../../assets/images/artwork/bmw7.jpg')},
  ];

  return (
    <DetailPageShell
      title="1987 BMW E30 M3 (DTM)"
      description={(
        <>
          <b>Submission to the 3DModels.org 2023 Car Render Challenge</b><br/>
          <i>As the #10 BMW sits in the pitlane the field races by. Mechanics scramble to secure the car's
          damaged front-end, knowing victory prospects fade with every second spent stationary. Bodywork is
          forced into shape with only tape, hammers, and muscle. Eventually the car rejoins to any empty track,
          leagues behind the rest. The team hopes for a stroke of good luck to come their way. It's a long race
          that's only just started, and plenty of opportunities await.</i>
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media}></MediaGallery>
    </DetailPageShell>
  )
}

export default Bmw;