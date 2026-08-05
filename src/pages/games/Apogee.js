import React from 'react'
import ExternalButton from 'components/ExternalButton.js'
import MediaGallery from 'components/MediaGallery.js'
import Page from 'components/Page.js'

const Apogee = () => {
  const buttons = [
    {
      href: 'https://noodlegames.itch.io/apogee',
      icon: require('assets/images/home/itch1.png'),
      iconAlt: 'itch.io',
      label: 'Download on itch.io',
    },
  ]

  const media = [
    {type: 'video', title: 'Gameplay demonstration', src: 'https://www.youtube.com/embed/aYETykjwY1w?rel=0', caption: 'Gameplay demonstration'},
    {alt: 'Apogee steering with planet gravity', src: require('assets/images/apogee/screen1.jpg'), caption: 'Using planet gravity to steer'},
    {alt: 'Apogee collision explosion', src: require('assets/images/apogee/screen2.jpg'), caption: 'Colliding with a planet in an intense explosion'},
    {alt: 'Apogee tutorial hints', src: require('assets/images/apogee/screen3.jpg'), caption: 'Tutorial hints'},
    {alt: 'Apogee unlockable ships', src: require('assets/images/apogee/screen4.jpg'), caption: 'Unlock ships with unique gameplay buffs by reaching point milestones'},
    {alt: 'Apogee cargo delivery', src: require('assets/images/apogee/screen5.jpg'), caption: 'Finding and delivering cargo for bonus points'},
  ]

  return (
    <Page className="pt-32">
      <div className="mb-10 flex flex-col items-center">
        <div className="mb-10 flex flex-col items-center justify-center gap-4 animate-fade-in-1 sm:flex-row">
          <img className="h-20 w-20" alt="Apogee logo" src={require('assets/images/apogee/logo1.png')}></img>
          <div className="flex flex-col items-center text-center sm:items-start sm:pl-8 sm:text-left">
            <h1 className="mb-2.5 text-4xl font-semibold md:text-5xl">Apogee</h1>
            <p className="mt-2 text-3xl font-normal text-neutral-400 md:text-3xl">2021 • Unreal Engine 4</p>
          </div>
        </div>
        <div className="animate-fade-in-2 max-w-5xl text-center text-xl font-light leading-[1.3] md:text-2xl">
          Cruise through a procedurally generated universe - exploring new planets and earning
          high scores along the way. Reach further distances to unlock new ships and move up the
          leaderboard rankings! Apogee is a physics - based infinite runner.
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

export default Apogee