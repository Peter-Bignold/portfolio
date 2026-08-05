import React from 'react';
import {DetailPageShell, MediaGallery} from '../../components/DetailPageShell.js';

const Circuitry = () => {
  const buttons = [
    {label: 'Work in Progress...', disabled: true},
  ];

  const media = [
    {src: require('../../assets/images/circuitry/preview4.jpg'), alt: 'Circuitry heads up display', caption: 'Heads up display', width: 281, height: 609, wrapperClassName: 'mx-1'},
    {src: require('../../assets/images/circuitry/preview1.jpg'), alt: 'Circuitry new session screen', caption: 'New session screen', width: 281, height: 609, wrapperClassName: 'mx-1'},
    {src: require('../../assets/images/circuitry/preview3.jpg'), alt: 'Circuitry track select screen', caption: 'Track select screen', width: 281, height: 609, wrapperClassName: 'mx-1'},
    {src: require('../../assets/images/circuitry/preview2.jpg'), alt: 'Circuitry sessions list', caption: 'Sessions list', width: 281, height: 609, wrapperClassName: 'mx-1'},
  ];

  return (
    <DetailPageShell
      title="Circuitry"
      subtitle="2025 • React Native"
      logo={require('../../assets/images/circuitry/logo1.png')}
      description={(
        <>
          An accessible, polished, and versatile mobile app providing telemetry and insights to performance driving enthusiasts. Circuitry aims to
          increase the accessibility of motorsports by providing professional grade location, accelerometer, and timing data with only a mobile device.
          Featuring innovations like a custom track builder and heads-up-display, Circuitry can be tailored to many different motorsport disciplines.
        </>
      )}
      buttons={buttons}
    >
      <MediaGallery items={media} layout="wrap" variant="app"></MediaGallery>
    </DetailPageShell>
  )
}

export default Circuitry;