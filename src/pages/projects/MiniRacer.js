import React from 'react'
import ExternalButton from 'components/ExternalButton.js'
import MediaGallery from 'components/MediaGallery.js'
import Page from 'components/Page.js'

const MiniRacer = () => {
  const buttons = [
    {
      href: 'https://noodlegames.itch.io/mini-racer',
      icon: require('assets/images/home/itch1.png'),
      iconAlt: 'itch.io',
      label: 'Download on itch.io',
    },
  ]

  const media = [
    {type: 'video', title: '20 vehicle race gameplay', src: 'https://www.youtube.com/embed/FrO2i0B0eFs?rel=0', caption: '20 vehicle race gameplay'},
    {alt: 'Mini Racer hairpin exit', src: require('assets/images/mini_racer/screen1.jpg'), caption: 'Several cars power out of a tight hairpin'},
    {alt: 'Mini Racer customization', src: require('assets/images/mini_racer/screen3.jpg'), caption: "Vehicle customization enables custom colours and liveries. Seperate colours can be chosen for the car's body, front wheels, rear wheels, and brake calipers."},
    {alt: 'Mini Racer chicane', src: require('assets/images/mini_racer/screen2.jpg'), caption: 'Cedar Creek - chicane'},
    {alt: 'Mini Racer hairpin', src: require('assets/images/mini_racer/screen4.jpg'), caption: 'Cedar Creek - hairpin'},
    {alt: 'Mini Racer straight', src: require('assets/images/mini_racer/screen6.jpg'), caption: 'A pack of cars accelerate down a straight'},
    {alt: 'Mini Racer long right hand corner', src: require('assets/images/mini_racer/screen7.jpg'), caption: 'Sliding through a long right hand corner'},
  ]

  return (
    <Page className="pt-32">
      <div className="mb-4 flex flex-col items-center">
        <div className="mb-4 flex flex-col items-center justify-center gap-4 animate-fade-in-1 sm:flex-row">
          <img className="h-20 w-20" alt="Mini Racer logo" src={require('assets/images/mini_racer/logo1.png')}></img>
          <div className="flex flex-col items-center text-center sm:items-start sm:pl-8 sm:text-left">
            <h1 className="mt-4 text-4xl font-normal md:text-6xl">Mini Racer</h1>
            <p className="text-3xl font-normal text-neutral-400 md:text-3xl">2022 • Unreal Engine 5</p>
          </div>
        </div>
        <div className="animate-fade-in-2 max-w-5xl text-center text-xl font-thin leading-[1.3]">
          Mini Racer is a prototype circuit racer with a top-down camera angle, cartoony visual style, and custom arcade vehicle physics.
          Features up to 20 vehicles per race, competitive AI drivers, and vehicle customization.
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

export default MiniRacer