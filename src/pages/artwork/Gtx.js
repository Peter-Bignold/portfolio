import React from 'react';
import ExternalButton from 'components/ExternalButton.js';
import MediaGallery from 'components/MediaGallery.js';
import Page from 'components/Page.js';

const Gtx = () => {
  const buttons = [
    {
      href: 'https://www.cgtrader.com/3d-models/car/antique-car/1971-plymouth-gtx',
      icon: require('assets/images/home/cgt1.png'),
      iconAlt: 'CGTrader',
      label: 'Purchase on CGTrader',
    },
    {
      href: 'https://www.artstation.com/artwork/L2Y4a0',
      icon: require('assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ];

  const media = [
    {alt: 'GTX artwork 1', src: require('assets/images/artwork/gtx1.jpg')},
    {alt: 'GTX artwork 2', src: require('assets/images/artwork/gtx2.jpg')},
    {alt: 'GTX artwork 3', src: require('assets/images/artwork/gtx3.jpg')},
    {alt: 'GTX artwork 4', src: require('assets/images/artwork/gtx4.jpg')},
    {alt: 'GTX artwork 5', src: require('assets/images/artwork/gtx5.jpg')},
    {alt: 'GTX artwork 6', src: require('assets/images/artwork/gtx6.jpg')},
    {alt: 'GTX artwork 7', src: require('assets/images/artwork/gtx7.jpg')},
    {alt: 'GTX artwork 8', src: require('assets/images/artwork/gtx8.jpg')},
  ];

  return (
    <Page className="pt-32">
      <div className="mb-10 flex flex-col items-center">
        <h1 className="my-4 text-4xl font-normal animate-fade-in-1 md:text-6xl">1971 Plymouth GTX</h1>
        <div className="animate-fade-in-2 max-w-5xl text-center text-xl font-light leading-[1.3] md:text-2xl">
          <i>This 1972 GTX sat dormant in my project files as nothing more than a half-finished body for around a year
          until I rediscovered the old mesh. I committed to finally completing it, ending up doing a chassis and suspension
          system as well as trying new techniques for the tires and rims. The 71 and 72 GTX's were some of the most stand-out
          body styles of the era, with the thick chrome trim and duel headlights of the front grill giving a large presence.</i>
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

export default Gtx;