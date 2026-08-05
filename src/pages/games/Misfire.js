import React from 'react';
import ExternalButton from 'components/ExternalButton.js';
import MediaGallery from 'components/MediaGallery.js';
import Page from 'components/Page.js';

const Misfire = () => {
  const buttons = [
    {
      href: 'https://store.steampowered.com/app/1145270/Misfire/',
      icon: require('assets/images/home/steam1.png'),
      iconAlt: 'Steam',
      label: 'Download on Steam',
    },
  ];

  const media = [
    {type: 'video', title: 'Trailer', src: 'https://www.youtube.com/embed/wrwGrtdeAiw?rel=0', caption: 'Trailer'},
    {alt: 'Misfire scattergun', src: require('assets/images/misfire/screen4.jpg'), caption: 'Shooting the Scattergun'},
    {alt: 'Misfire sine rifle and shield powerup', src: require('assets/images/misfire/screen5.jpg'), caption: 'Aiming the Sine Rifle with a shield powerup ready to use'},
    {alt: 'Misfire backzooka', src: require('assets/images/misfire/screen6.jpg'), caption: 'Firing the Backzooka'},
    {alt: 'Misfire perpendivolver', src: require('assets/images/misfire/screen7.jpg'), caption: 'Using the Perpendivolver'},
    {alt: 'Misfire character customization', src: require('assets/images/misfire/screen8.jpg'), caption: 'Character customization'},
    {alt: 'Misfire player statistics', src: require('assets/images/misfire/screen9.jpg'), caption: 'Player statistics'},
  ];

  return (
    <Page className="pt-32">
      <div className="mb-10 flex flex-col items-center">
        <div className="mb-10 flex flex-col items-center justify-center gap-4 animate-fade-in-1 sm:flex-row">
          <img className="h-20 w-20" alt="Misfire logo" src={require('assets/images/misfire/logo1.png')}></img>
          <div className="flex flex-col items-center text-center sm:items-start sm:pl-8 sm:text-left">
            <h1 className="mb-2.5 text-4xl font-semibold md:text-5xl">Misfire</h1>
            <p className="mt-2 text-3xl font-normal text-neutral-400 md:text-3xl">2019 • Unreal Engine 4</p>
          </div>
        </div>
        <div className="animate-fade-in-2 max-w-5xl text-center text-xl font-light leading-[1.3] md:text-2xl">
          Face off against your friends with wacky guns that don't shoot straight!
          Misfire is a Casual PVP Platform Shooter. Compete in matches of 2 - 4 players,
          earn coins to unlock stylish new space suits, and ruin friendships along the way!
        </div>
      </div>

      <div className="mb-10 flex w-full max-w-5xl animate-fade-in-2 flex-col items-center">
        {buttons.map((button) => (
          <ExternalButton key={button.label} href={button.href} icon={button.icon} iconAlt={button.iconAlt} disabled={button.disabled} className="my-1">
            {button.label}
          </ExternalButton>
        ))}
      </div>

      <div className="flex w-full flex-col items-center animate-fade-in-3">
        <MediaGallery items={media}></MediaGallery>
      </div>
    </Page>
  )
}

export default Misfire;