import React from 'react'
import ExternalButton from 'components/ExternalButton.js'
import MediaGallery from 'components/MediaGallery.js'
import Page from 'components/Page.js'

const Guitar = () => {
  const buttons = [
    {
      href: 'https://www.artstation.com/artwork/PXBqar',
      icon: require('assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ]

  const media = [
    {alt: 'Guitar artwork 1', src: require('assets/images/artwork/guitar1.jpg')},
    {alt: 'Guitar artwork 2', src: require('assets/images/artwork/guitar2.jpg')},
    {alt: 'Guitar artwork 3', src: require('assets/images/artwork/guitar3.jpg')},
    {alt: 'Guitar artwork 4', src: require('assets/images/artwork/guitar4.jpg')},
    {alt: 'Guitar artwork 5', src: require('assets/images/artwork/guitar5.jpg')},
    {alt: 'Guitar artwork 6', src: require('assets/images/artwork/guitar6.jpg')},
    {alt: 'Guitar artwork 7', src: require('assets/images/artwork/guitar7.jpg')},
  ]

  return (
    <Page className="pt-32">
      <div className="mb-4 flex flex-col items-center">
        <h1 className="my-4 text-4xl font-normal animate-fade-in-1 md:text-6xl">Simon & Patrick Songsmith</h1>
        <div className="animate-fade-in-2 max-w-5xl text-center text-xl font-thin leading-[1.3]">
          <p>A Simon and Patrick Songsmith modelled off my very own guitar! Having a physical object
          to refer to when modeling fine details was incredibly helpful, and enabled me to achieve a high
          level of realism.</p>
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

export default Guitar