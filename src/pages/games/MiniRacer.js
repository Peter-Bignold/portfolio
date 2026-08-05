import React from 'react';
import {DetailPageShell, MediaGallery} from '../../components/DetailPageShell.js';

const MiniRacer = () => {
  const buttons = [
    {
      href: 'https://noodlegames.itch.io/mini-racer',
      icon: require('../../assets/images/home/itch1.png'),
      iconAlt: 'itch.io',
      label: 'Download on itch.io',
    },
  ];

  const media = [
    {type: 'video', title: '20 vehicle race gameplay', src: 'https://www.youtube.com/embed/FrO2i0B0eFs?rel=0', caption: '20 vehicle race gameplay'},
    {alt: 'Mini Racer hairpin exit', src: require('../../assets/images/mini_racer/screen1.jpg'), caption: 'Several cars power out of a tight hairpin'},
    {alt: 'Mini Racer customization', src: require('../../assets/images/mini_racer/screen3.jpg'), caption: "Vehicle customization enables custom colours and liveries. Seperate colours can be chosen for the car's body, front wheels, rear wheels, and brake calipers."},
    {alt: 'Mini Racer chicane', src: require('../../assets/images/mini_racer/screen2.jpg'), caption: 'Cedar Creek - chicane'},
    {alt: 'Mini Racer hairpin', src: require('../../assets/images/mini_racer/screen4.jpg'), caption: 'Cedar Creek - hairpin'},
    {alt: 'Mini Racer straight', src: require('../../assets/images/mini_racer/screen6.jpg'), caption: 'A pack of cars accelerate down a straight'},
    {alt: 'Mini Racer long right hand corner', src: require('../../assets/images/mini_racer/screen7.jpg'), caption: 'Sliding through a long right hand corner'},
  ];

  return (
    <DetailPageShell
      title="Mini Racer"
      subtitle="2022 • Unreal Engine 5"
      logo={require('../../assets/images/mini_racer/logo1.png')}
      description={(
        <>
          Mini Racer is a prototype circuit racer with a top-down camera angle, cartoony visual style, and custom arcade vehicle physics.
          Features up to 20 vehicles per race, competitive AI drivers, and vehicle customization.
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media}></MediaGallery>
    </DetailPageShell>
  )
}

export default MiniRacer;