import React from 'react'
import ExternalButton from 'components/ExternalButton.js'
import MediaGallery from 'components/MediaGallery.js'
import Page from 'components/Page.js'

const SpaceSalvagers = () => {
  const buttons = [
    {
      href: 'https://github.com/matthew-mcc/CPSC585',
      icon: require('assets/images/home/github1.png'),
      iconAlt: 'GitHub',
      label: 'Github Repository',
    },
  ]

  const media = [
    {alt: 'Super Space Salvagers title screen', src: require('assets/images/space_salvagers/screen4.jpg'), caption: 'Title screen and credits'},
    {alt: 'Super Space Salvagers cargo dropoff', src: require('assets/images/space_salvagers/screen6.jpg'), caption: 'Rushing to the cargo dropoff point'},
    {alt: 'Super Space Salvagers rocket boost', src: require('assets/images/space_salvagers/screen1.jpg'), caption: 'Rocket boosting into the air'},
    {alt: 'Super Space Salvagers AI opponents', src: require('assets/images/space_salvagers/screen2.jpg'), caption: "AI opponents maneuvering to steal each other's cargo"},
    {alt: 'Super Space Salvagers rival collision', src: require('assets/images/space_salvagers/screen3.jpg'), caption: 'Boosting into a rival salvager'},
    {alt: 'Super Space Salvagers splitscreen', src: require('assets/images/space_salvagers/screen5.jpg'), caption: '4 - player splitscreen'},
  ]

  return (
    <Page className="pt-32">
      <div className="mb-10 flex flex-col items-center">
        <div className="mb-10 flex flex-col items-center justify-center gap-4 animate-fade-in-1 sm:flex-row">
          <img className="h-20 w-20" alt="Super Space Salvagers logo" src={require('assets/images/space_salvagers/logo1.png')}></img>
          <div className="flex flex-col items-center text-center sm:items-start sm:pl-8 sm:text-left">
            <h1 className="mb-2.5 text-4xl font-semibold md:text-5xl">Super Space Salvagers</h1>
            <p className="mt-2 text-3xl font-normal text-neutral-400 md:text-3xl">2023 • C++</p>
          </div>
        </div>
        <div className="animate-fade-in-2 max-w-5xl text-center text-xl font-light leading-[1.3] md:text-2xl">
          <b>Student Exemplar for CPSC 585 - Games Programming at the University of Calgary</b><br/>
          Super Space Salvagers is a 4-player chaotic, goofy, and frantic party game where players compete to
          gather cargo pods from a rugged planet's space wreckage. Made for CPSC 585 - Games Programming, Super Space Salvagers
          was the joint effort of myself and four other students, made entirely in C++ using OpenGL and Nvidia PhysX. Supports 2 - 4
          player splitscreen and singleplayer with clever AI opponents.
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

export default SpaceSalvagers