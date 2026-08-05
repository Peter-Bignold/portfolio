import React from 'react';
import ExternalButton from 'components/ExternalButton.js';
import MediaGallery from 'components/MediaGallery.js';
import Page from 'components/Page.js';

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
    <Page className="pt-[120px]">
      <div className="mb-10 flex flex-col items-center">
        <div className="mb-10 flex flex-col items-center justify-center gap-4 animate-fade-in-1 sm:flex-row">
          <img className="h-[85px] w-[85px]" alt="Pinata Clicker logo" src={require('assets/images/pinata_clicker/logo1.png')}></img>
          <div className="flex flex-col items-center text-center sm:items-start sm:pl-8 sm:text-left">
            <h1 className="mb-[10px] text-[38px] font-semibold md:text-[50px]">Pinata Clicker</h1>
            <p className="mt-2 text-[28px] font-normal text-neutral-400 md:text-[32px]">2020 • Unreal Engine 4</p>
          </div>
        </div>
        <div className="animate-fade-in-2 max-w-[1000px] text-center text-xl font-light leading-[1.3] md:text-2xl">
          <b>Winner of the International Game Developer Association's 2020 E-Jam - Most Creative</b><br/>
          Click your way to candy GLORY! Pinata Clicker is a clicker-genre game combining 3D and 2D elements.
          Spend your candy riches on new upgrades to expand your wealth, and save up for the almighty ancient
          chancla. All you have to do is click! Pinata Clicker is the joint effort of myself and three other
          developers and artists.
        </div>
      </div>

      <div className="mb-10 flex w-full max-w-[1000px] animate-fade-in-2 flex-col items-center">
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

export default PinataClicker;