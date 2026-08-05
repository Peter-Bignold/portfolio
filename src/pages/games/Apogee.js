import React from 'react';
import {DetailPageShell, MediaGallery} from '../../components/DetailPageShell.js';

const Apogee = () => {
  const buttons = [
    {
      href: 'https://noodlegames.itch.io/apogee',
      icon: require('../../assets/images/home/itch1.png'),
      iconAlt: 'itch.io',
      label: 'Download on itch.io',
    },
  ];

  const media = [
    {type: 'video', title: 'Gameplay demonstration', src: 'https://www.youtube.com/embed/aYETykjwY1w?rel=0', caption: 'Gameplay demonstration'},
    {alt: 'Apogee steering with planet gravity', src: require('../../assets/images/apogee/screen1.jpg'), caption: 'Using planet gravity to steer'},
    {alt: 'Apogee collision explosion', src: require('../../assets/images/apogee/screen2.jpg'), caption: 'Colliding with a planet in an intense explosion'},
    {alt: 'Apogee tutorial hints', src: require('../../assets/images/apogee/screen3.jpg'), caption: 'Tutorial hints'},
    {alt: 'Apogee unlockable ships', src: require('../../assets/images/apogee/screen4.jpg'), caption: 'Unlock ships with unique gameplay buffs by reaching point milestones'},
    {alt: 'Apogee cargo delivery', src: require('../../assets/images/apogee/screen5.jpg'), caption: 'Finding and delivering cargo for bonus points'},
  ];

  return (
    <DetailPageShell
      title="Apogee"
      subtitle="2021 • Unreal Engine 4"
      logo={require('../../assets/images/apogee/logo1.png')}
      description={(
        <>
          Cruise through a procedurally generated universe - exploring new planets and earning
          high scores along the way. Reach further distances to unlock new ships and move up the
          leaderboard rankings! Apogee is a physics - based infinite runner.
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media}></MediaGallery>
    </DetailPageShell>
  )
}

export default Apogee;