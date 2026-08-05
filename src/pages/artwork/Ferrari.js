import React from 'react';
import ExternalButton from 'components/ExternalButton.js';
import MediaGallery from 'components/MediaGallery.js';
import Page from 'components/Page.js';

const Ferrari = () => {
  const buttons = [
    {
      href: 'https://www.artstation.com/artwork/eJN433',
      icon: require('assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ];

  const media = [
    {alt: 'Ferrari artwork 1', src: require('assets/images/artwork/ferrari1.jpg')},
    {alt: 'Ferrari artwork 2', src: require('assets/images/artwork/ferrari2.jpg')},
    {alt: 'Ferrari artwork 3', src: require('assets/images/artwork/ferrari3.jpg')},
    {alt: 'Ferrari artwork 4', src: require('assets/images/artwork/ferrari4.jpg')},
    {alt: 'Ferrari artwork 5', src: require('assets/images/artwork/ferrari5.jpg')},
    {alt: 'Ferrari artwork 6', src: require('assets/images/artwork/ferrari6.jpg')},
    {alt: 'Ferrari artwork 7', src: require('assets/images/artwork/ferrari7.jpg')},
  ];

  return (
    <Page className="pt-32">
      <div className="mb-10 flex flex-col items-center">
        <h1 className="my-4 text-4xl font-normal animate-fade-in-1 md:text-6xl">1967 Ferrari 330 P4</h1>
        <div className="animate-fade-in-2 max-w-5xl text-center text-xl font-light leading-[1.3] md:text-2xl">
          <i>Originally a game model for my Wreckfest mod, I revisited this Ferrari 330-P4
          inspired race car to create some proper Blender renders! More thought and effort
          were put into lighting, with the aim of emphasizing the flowing curves and unique
          silhouette of the car.</i>
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

export default Ferrari;