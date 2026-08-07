import React from 'react'
import ExternalButton from 'components/ExternalButton.js'
import MediaGallery from 'components/MediaGallery.js'
import Page from 'components/Page.js'

const MJTimingCloud = () => {
  const buttons = [
    {
      href: 'https://timing.sascsolo.com',
      iconAlt: 'visit',
      label: 'Live Timing - Southern Alberta Solosport Club',
    },
  ]

  const media = [
    {alt: 'Live timing', src: require('assets/images/mjtiming_cloud/screen1.jpg'), caption: 'Real time event data viewable on any device.'},
    {alt: 'Live filters', src: require('assets/images/mjtiming_cloud/screen2.jpg'), caption: 'Filter live event data in real time.'},
    {alt: 'Driver results', src: require('assets/images/mjtiming_cloud/screen3.jpg'), caption: 'Searchable individual driver results.'},
    {alt: 'TV mode', src: require('assets/images/mjtiming_cloud/screen4.jpg'), caption: 'Live timing displayed in a TV-friendly format, including a scannable QR code.'},
    {alt: 'Automatic championship standings', src: require('assets/images/mjtiming_cloud/screen5.jpg'), caption: 'Automatic calculation and display of championship standings.'},
  ]

  return (
    <Page className="pt-32">
      <div className="mb-4 flex flex-col items-center">
        <div className="mb-4 flex flex-col items-center justify-center gap-4 animate-fade-in-1 sm:flex-row">
          <img className="h-20 w-20" alt="MJ Timing Cloud logo" src={require('assets/images/mjtiming_cloud/logo1.png')}></img>
          <div className="flex flex-col items-center text-center sm:items-start sm:pl-8 sm:text-left">
            <h1 className="mt-4 text-4xl font-normal md:text-6xl">MJ Timing Cloud</h1>
            <p className="text-3xl font-normal text-neutral-400 md:text-3xl">2026 • Vue + Node.js</p>
          </div>
        </div>
        <div className="animate-fade-in-2 max-w-5xl text-center text-xl font-thin leading-[1.3]">
          MJ Timing Cloud extends a legacy autocross scoring software called MJ Timing. It provides a cloud-based platform for displaying live
          event data, including timing, results, and championship standings. The platform is designed to be accessible on any device with a
          web browser. It also automates the calculation of championship standings, reducing the manual effort required by event organizers.
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

export default MJTimingCloud