import React from 'react';
import {DetailPageShell, MediaGallery} from '../../components/DetailPageShell.js';

const Misfire = () => {
  const buttons = [
    {
      href: 'https://store.steampowered.com/app/1145270/Misfire/',
      icon: require('../../assets/images/home/steam1.png'),
      iconAlt: 'Steam',
      label: 'Download on Steam',
    },
  ];

  const media = [
    {type: 'video', title: 'Trailer', src: 'https://www.youtube.com/embed/wrwGrtdeAiw?rel=0', caption: 'Trailer'},
    {alt: 'Misfire scattergun', src: require('../../assets/images/misfire/screen4.jpg'), caption: 'Shooting the Scattergun'},
    {alt: 'Misfire sine rifle and shield powerup', src: require('../../assets/images/misfire/screen5.jpg'), caption: 'Aiming the Sine Rifle with a shield powerup ready to use'},
    {alt: 'Misfire backzooka', src: require('../../assets/images/misfire/screen6.jpg'), caption: 'Firing the Backzooka'},
    {alt: 'Misfire perpendivolver', src: require('../../assets/images/misfire/screen7.jpg'), caption: 'Using the Perpendivolver'},
    {alt: 'Misfire character customization', src: require('../../assets/images/misfire/screen8.jpg'), caption: 'Character customization'},
    {alt: 'Misfire player statistics', src: require('../../assets/images/misfire/screen9.jpg'), caption: 'Player statistics'},
  ];

  return (
    <DetailPageShell
      title="Misfire"
      subtitle="2019 • Unreal Engine 4"
      logo={require('../../assets/images/misfire/logo1.png')}
      description={(
        <>
          Face off against your friends with wacky guns that don't shoot straight!
          Misfire is a Casual PVP Platform Shooter. Compete in matches of 2 - 4 players,
          earn coins to unlock stylish new space suits, and ruin friendships along the way!
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media}></MediaGallery>
    </DetailPageShell>
  )
}

export default Misfire;