import React from 'react';
import ExternalButton from 'components/ExternalButton.js';
import MediaGallery from 'components/MediaGallery.js';
import Page from 'components/Page.js';

const Stingray = () => {
  const buttons = [
    {
      href: 'https://www.artstation.com/artwork/xE9Z4',
      icon: require('assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ];

  const media = [
    {alt: 'Stingray artwork 1', src: require('assets/images/artwork/stingray1.jpg')},
    {alt: 'Stingray artwork 2', src: require('assets/images/artwork/stingray2.jpg')},
    {alt: 'Stingray artwork 3', src: require('assets/images/artwork/stingray3.jpg')},
    {alt: 'Stingray artwork 4', src: require('assets/images/artwork/stingray4.jpg')},
    {alt: 'Stingray artwork 5', src: require('assets/images/artwork/stingray5.jpg')},
    {alt: 'Stingray artwork 6', src: require('assets/images/artwork/stingray6.jpg')},
    {alt: 'Stingray artwork 7', src: require('assets/images/artwork/stingray7.jpg')},
    {alt: 'Stingray artwork 8', src: require('assets/images/artwork/stingray8.jpg')},
    {alt: 'Stingray artwork 9', src: require('assets/images/artwork/stingray9.jpg')},
  ];

  return (
    <Page className="pt-32">
      <div className="mb-10 flex flex-col items-center">
        <h1 className="my-4 text-4xl font-normal animate-fade-in-1 md:text-6xl">1967 Chevrolet Corvette Stingray</h1>
        <div className="animate-fade-in-2 max-w-5xl text-center text-xl font-light leading-[1.3] md:text-2xl">
          <i>A 1967 Corvette Stingray featuring a fully detailed interior. I combined elements
          from earlier Stingray models, namely the side vents and split rear window.
          Other than those tweaks the car is accurate to the original.</i>
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

export default Stingray;