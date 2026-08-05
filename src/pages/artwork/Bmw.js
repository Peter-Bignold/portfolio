import React from 'react'
import ExternalButton from 'components/ExternalButton.js'
import MediaGallery from 'components/MediaGallery.js'
import Page from 'components/Page.js'

const Bmw = () => {
  const buttons = [
    {
      href: 'https://3dmodels.org/blog/peter-bignold-interview/',
      icon: require('assets/images/home/3dm1.png'),
      iconAlt: '3DModels.org',
      label: 'Artist Interview',
    },
    {
      href: 'https://3dmodels.org/challenges/making-up-lost-time/',
      icon: require('assets/images/home/3dm1.png'),
      iconAlt: '3DModels.org',
      label: 'View on 3DModels.org',
    },
    {
      href: 'https://www.artstation.com/artwork/xDxxOm',
      icon: require('assets/images/home/artstation1.png'),
      iconAlt: 'Artstation',
      label: 'View on Artstation',
    },
  ]

  const media = [
    {type: 'video', title: 'Modeling timelapse', src: 'https://www.youtube.com/embed/U2CDPIyf9lA?rel=0'},
    {alt: 'BMW artwork 1', src: require('assets/images/artwork/bmw1.jpg')},
    {alt: 'BMW artwork 2', src: require('assets/images/artwork/bmw2.jpg')},
    {alt: 'BMW artwork 3', src: require('assets/images/artwork/bmw3.jpg')},
    {alt: 'BMW artwork 4', src: require('assets/images/artwork/bmw4.jpg')},
    {alt: 'BMW artwork 5', src: require('assets/images/artwork/bmw5.jpg')},
    {alt: 'BMW artwork 6', src: require('assets/images/artwork/bmw6.jpg')},
    {alt: 'BMW artwork 7', src: require('assets/images/artwork/bmw7.jpg')},
  ]

  return (
    <Page className="pt-32">
      <div className="mb-10 flex flex-col items-center">
        <h1 className="my-4 text-4xl font-normal animate-fade-in-1 md:text-6xl">1987 BMW E30 M3 (DTM)</h1>
        <div className="animate-fade-in-2 max-w-5xl text-center text-xl font-light leading-[1.3] md:text-2xl">
          <b>Submission to the 3DModels.org 2023 Car Render Challenge</b><br/>
          <i>As the #10 BMW sits in the pitlane the field races by. Mechanics scramble to secure the car's
          damaged front-end, knowing victory prospects fade with every second spent stationary. Bodywork is
          forced into shape with only tape, hammers, and muscle. Eventually the car rejoins to any empty track,
          leagues behind the rest. The team hopes for a stroke of good luck to come their way. It's a long race
          that's only just started, and plenty of opportunities await.</i>
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

export default Bmw