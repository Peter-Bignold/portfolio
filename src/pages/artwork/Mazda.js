import React from 'react';
import ExternalButton from 'components/ExternalButton.js';
import MediaGallery from 'components/MediaGallery.js';
import Page from 'components/Page.js';

const Mazda = () => {
  const buttons = [
    {
      href: 'https://www.artstation.com/artwork/OmyEyw',
      icon: require('assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ];

  const media = [
    {alt: 'Mazda artwork 1', src: require('assets/images/artwork/mazda1.jpg')},
    {alt: 'Mazda artwork 2', src: require('assets/images/artwork/mazda2.jpg')},
    {alt: 'Mazda artwork 3', src: require('assets/images/artwork/mazda3.jpg')},
    {alt: 'Mazda artwork 4', src: require('assets/images/artwork/mazda4.jpg')},
    {alt: 'Mazda artwork 5', src: require('assets/images/artwork/mazda5.jpg')},
    {alt: 'Mazda artwork 6', src: require('assets/images/artwork/mazda6.jpg')},
  ];

  return (
    <Page className="pt-[120px]">
      <div className="mb-10 flex flex-col items-center">
        <h1 className="my-4 text-[40px] font-normal animate-fade-in-1 md:text-[55px]">1982 Mazda RX-7 (SA)</h1>
        <div className="animate-fade-in-2 max-w-[1000px] text-center text-xl font-light leading-[1.3] md:text-2xl">
          <i>A 1982 Mazda RX-7 restored and enhanced for racing! Officially referred to as the SA (Savannah)
          and nicknamed FB, this first generation RX-7 helped pave the way for a decades-long explosion in Japanese
          sports car popularity. Although it isn't as famous as the FD generation that came later,
          the SA laid the foundations that the later generations would build off. The fastback body style, simple yet powerful
          design language, and the charming pop-up headlights were present since the beginning. With this
          project I brought to life my imagining of an SA RX-7 adapted for racing in the present day. The result is a
          combination of the car's Group C racing heritage with modern styling and design.</i>
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

export default Mazda;