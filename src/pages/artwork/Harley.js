import React from 'react'
import ExternalButton from 'components/ExternalButton.js'
import MediaGallery from 'components/MediaGallery.js'
import Page from 'components/Page.js'

const Harley = () => {
  const buttons = [
    {
      href: 'https://www.cgtrader.com/3d-models/vehicle/motorcycle/2018-harley-davidson-fatboy',
      icon: require('assets/images/home/cgt1.png'),
      iconAlt: 'CGTrader',
      label: 'Purchase on CGTrader',
    },
    {
      href: 'https://www.artstation.com/artwork/NXBDP',
      icon: require('assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ]

  const media = [
    {alt: 'Harley artwork 1', src: require('assets/images/artwork/harley1.jpg')},
    {alt: 'Harley artwork 2', src: require('assets/images/artwork/harley2.jpg')},
    {alt: 'Harley artwork 3', src: require('assets/images/artwork/harley3.jpg')},
    {alt: 'Harley artwork 4', src: require('assets/images/artwork/harley4.jpg')},
    {alt: 'Harley artwork 5', src: require('assets/images/artwork/harley5.jpg')},
    {alt: 'Harley artwork 6', src: require('assets/images/artwork/harley6.jpg')},
  ]

  return (
    <Page className="pt-32">
      <div className="mb-10 flex flex-col items-center">
        <h1 className="my-4 text-4xl font-normal animate-fade-in-1 md:text-6xl">2018 Harley Davidson Softail Fatboy</h1>
        <div className="animate-fade-in-2 max-w-5xl text-center text-xl font-light leading-[1.3] md:text-2xl">
          <i>My version of the 2018 Fatboy. This was one of my longer projects,
          taking roughly 3 months to finish. Each detail of the engine and linkages are
          modelled as accurately as possible.</i>
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

export default Harley