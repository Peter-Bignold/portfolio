import React from 'react'
import ExternalButton from 'components/ExternalButton.js'
import MediaGallery from 'components/MediaGallery.js'
import Page from 'components/Page.js'

const Trackfest = () => {
  const buttons = [
    {
      href: 'https://www.nascc.ab.ca',
      iconAlt: 'visit',
      label: 'Visit the site',
    },
  ]

  const media = [
    {alt: 'Home page', src: require('assets/images/trackfest/screen1.jpg'), caption: 'Home page featuring an animated background and modern design.'},
    {alt: 'Events list', src: require('assets/images/trackfest/screen2.jpg'), caption: 'Events list displaying upcoming NASCC events.'},
    {alt: 'Event details', src: require('assets/images/trackfest/screen3.jpg'), caption: 'Event details page with information about the event and registration.'},
    {alt: 'Event results', src: require('assets/images/trackfest/screen4.jpg'), caption: 'Event results page displaying the results of past events.'},
    {alt: 'News articles', src: require('assets/images/trackfest/screen5.jpg'), caption: 'News articles display the latest news from NASCC.'},
  ]

  return (
    <Page className="pt-32">
      <div className="mb-4 flex flex-col items-center">
        <div className="mb-4 flex flex-col items-center justify-center gap-4 animate-fade-in-1 sm:flex-row">
          <img className="h-20 w-20" alt="Trackfest logo" src={require('assets/images/trackfest/logo1.png')}></img>
          <div className="flex flex-col items-center text-center sm:items-start sm:pl-8 sm:text-left">
            <h1 className="mt-4 text-4xl font-normal md:text-6xl">Trackfest</h1>
            <p className="mt-2 text-3xl font-normal text-neutral-400 md:text-3xl">2026 • Vue + Strapi</p>
          </div>
        </div>
        <div className="animate-fade-in-2 max-w-5xl text-center text-xl font-thin leading-[1.3]">
          An overhaul of the Northern Alberta Sportscar Club (NASCC) website. NASCC is a motorsport club based in Edmonton, Alberta, Canada. 
          The new website features a modern design, improved usability, and a custom content management system built with Strapi. 
          The site is fully responsive and optimized for performance.
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

export default Trackfest