import React from 'react';
import {DetailPageShell, MediaGallery} from 'components/DetailPageShell.js';

const PinataClicker = () => {
  const buttons = [
    {
      href: 'https://noodlegames.itch.io/pinata-clicker',
      icon: require('assets/images/home/itch1.png'),
      iconAlt: 'itch.io',
      label: 'Download on itch.io',
    },
  ];

  const media = [
    {type: 'video', title: 'Gameplay demonstration', src: 'https://www.youtube.com/embed/mM6Yn8_FwxQ?rel=0', caption: 'Gameplay demonstration'},
    {alt: 'Pinata Clicker tutorial', src: require('assets/images/pinata_clicker/screen2.jpg'), caption: 'Introduction and tutorial'},
    {alt: 'Pinata Clicker early game', src: require('assets/images/pinata_clicker/screen1.jpg'), caption: 'Early game'},
    {alt: 'Pinata Clicker late game', src: require('assets/images/pinata_clicker/screen3.jpg'), caption: 'Late game'},
  ];

  return (
    <DetailPageShell
      title="Pinata Clicker"
      subtitle="2020 • Unreal Engine 4"
      logo={require('assets/images/pinata_clicker/logo1.png')}
      description={(
        <>
          <b>Winner of the International Game Developer Association's 2020 E-Jam - Most Creative</b><br/>
          Click your way to candy GLORY! Pinata Clicker is a clicker-genre game combining 3D and 2D elements.
          Spend your candy riches on new upgrades to expand your wealth, and save up for the almighty ancient
          chancla. All you have to do is click! Pinata Clicker is the joint effort of myself and three other
          developers and artists.
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media}></MediaGallery>
    </DetailPageShell>
  )
}

export default PinataClicker;