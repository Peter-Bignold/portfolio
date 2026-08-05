import React from 'react';
import ExternalButton from 'components/ExternalButton.js';
import MediaGallery from 'components/MediaGallery.js';
import Page from 'components/Page.js';

const Beetle = () => {
  const buttons = [
    {
      href: 'https://www.artstation.com/artwork/rAb9z2',
      icon: require('assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ];

  const media = [
    {alt: 'Beetle artwork 1', src: require('assets/images/artwork/beetle1.jpg')},
    {alt: 'Beetle artwork 2', src: require('assets/images/artwork/beetle2.jpg')},
    {alt: 'Beetle artwork 3', src: require('assets/images/artwork/beetle3.jpg')},
    {alt: 'Beetle artwork 4', src: require('assets/images/artwork/beetle4.jpg')},
  ];

  return (
    <Page className="pt-[120px]">
      <div className="mb-10 flex flex-col items-center">
        <h1 className="my-4 text-[40px] font-normal animate-fade-in-1 md:text-[55px]">1959 Volkswagen Beetle</h1>
        <div className="animate-fade-in-2 max-w-[1000px] text-center text-xl font-light leading-[1.3] md:text-2xl">
          <i>One of the first vehicle models I attempted to model was a 1959 VW Beetle. The topology was a mess and the presentation sloppy,
          but it helped me learn the basics of 3D modeling. As I was sifting through my old projects recently I came across it, and decided
          to give it a refresh with the experience I've gained since then. I re-modelled the body, bumpers, tires/wheels, and most of
          everything else too. I wasn't too concerned with making it perfect and challenged myself to work on it for a single day only.</i>
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

export default Beetle;