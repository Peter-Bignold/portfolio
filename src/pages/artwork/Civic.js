import React from 'react';
import ExternalButton from 'components/ExternalButton.js';
import MediaGallery from 'components/MediaGallery.js';
import Page from 'components/Page.js';

const Civic = () => {
  const buttons = [
    {
      href: 'https://www.cgtrader.com/3d-models/car/sport-car/honda-civic-si-2006-2008',
      icon: require('assets/images/home/cgt1.png'),
      iconAlt: 'CGTrader',
      label: 'Purchase on CGTrader',
    },
    {
      href: 'https://www.artstation.com/artwork/4X1Y8W',
      icon: require('assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ];

  const media = [
    {alt: 'Civic artwork 1', src: require('assets/images/artwork/civic1.jpg')},
    {alt: 'Civic artwork 2', src: require('assets/images/artwork/civic2.jpg')},
    {alt: 'Civic artwork 3', src: require('assets/images/artwork/civic3.jpg')},
    {alt: 'Civic artwork 4', src: require('assets/images/artwork/civic4.jpg')},
    {alt: 'Civic artwork 5', src: require('assets/images/artwork/civic5.jpg')},
    {alt: 'Civic artwork 6', src: require('assets/images/artwork/civic6.jpg')},
    {alt: 'Civic artwork 7', src: require('assets/images/artwork/civic7.jpg')},
  ];

  return (
    <Page className="pt-[120px]">
      <div className="mb-10 flex flex-col items-center">
        <h1 className="my-4 text-[40px] font-normal animate-fade-in-1 md:text-[55px]">2007 Honda Civic Si</h1>
        <div className="animate-fade-in-2 max-w-[1000px] text-center text-xl font-light leading-[1.3] md:text-2xl">
          <i>The 8th Generation Honda Civic Si features a lightweight chassis, short wheelbase, 6-speed manual, and
          2.0 liter naturally aspirated i-VTEC 4 cylinder engine. The styling is modest but charming, with no unnecessary
          vents or trim. Relaxed lines flow from front to back, with the flush head and tail lights meshing perfectly.</i>
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

export default Civic;