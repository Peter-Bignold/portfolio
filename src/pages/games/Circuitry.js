import React from 'react';
import ExternalButton from 'components/ExternalButton.js';
import MediaGallery from 'components/MediaGallery.js';
import Page from 'components/Page.js';

const Circuitry = () => {
  const buttons = [
    {label: 'Work in Progress...', disabled: true},
  ];

  const media = [
    {src: require('assets/images/circuitry/preview4.jpg'), alt: 'Circuitry heads up display', caption: 'Heads up display', width: 281, height: 609, wrapperClassName: 'mx-1'},
    {src: require('assets/images/circuitry/preview1.jpg'), alt: 'Circuitry new session screen', caption: 'New session screen', width: 281, height: 609, wrapperClassName: 'mx-1'},
    {src: require('assets/images/circuitry/preview3.jpg'), alt: 'Circuitry track select screen', caption: 'Track select screen', width: 281, height: 609, wrapperClassName: 'mx-1'},
    {src: require('assets/images/circuitry/preview2.jpg'), alt: 'Circuitry sessions list', caption: 'Sessions list', width: 281, height: 609, wrapperClassName: 'mx-1'},
  ];

  return (
    <Page className="pt-[120px]">
      <div className="mb-10 flex flex-col items-center">
        <div className="mb-10 flex flex-col items-center justify-center gap-4 animate-fade-in-1 sm:flex-row">
          <img className="h-[85px] w-[85px]" alt="Circuitry logo" src={require('assets/images/circuitry/logo1.png')}></img>
          <div className="flex flex-col items-center text-center sm:items-start sm:pl-8 sm:text-left">
            <h1 className="mb-[10px] text-[38px] font-semibold md:text-[50px]">Circuitry</h1>
            <p className="mt-2 text-[28px] font-normal text-neutral-500 md:text-[32px]">2025 • React Native</p>
          </div>
        </div>
        <div className="animate-fade-in-2 max-w-[1000px] text-center text-xl font-light leading-[1.3] md:text-2xl">
          An accessible, polished, and versatile mobile app providing telemetry and insights to performance driving enthusiasts. Circuitry aims to
          increase the accessibility of motorsports by providing professional grade location, accelerometer, and timing data with only a mobile device.
          Featuring innovations like a custom track builder and heads-up-display, Circuitry can be tailored to many different motorsport disciplines.
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
        <MediaGallery items={media} layout="wrap" variant="app"></MediaGallery>
      </div>
    </Page>
  )
}

export default Circuitry;