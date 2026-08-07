import React from 'react'
import ContactCard from 'components/ContactCard.js'
import IconLink from 'components/IconLink.js'
import Page from 'components/Page.js'

const Contact = () => {
  const contacts = [
    {
      icon: require('assets/images/home/person1.png'),
      alt: 'Professional contact',
      label: 'Contact',
      value: 'p.bignold01@gmail.com',
    }
  ]

  const socials = [
    {href: 'https://www.linkedin.com/in/peter-bignold-b507171b1/', icon: require('assets/images/home/linkedin1.png'), alt: 'LinkedIn', label: 'Linkedin'},
    {href: 'https://github.com/Peter-Bignold', icon: require('assets/images/home/github1.png'), alt: 'GitHub', label: 'Github'},
    {href: 'https://www.youtube.com/@peter-goes-fast', icon: require('assets/images/home/youtube1.png'), alt: 'YouTube', label: 'Youtube'},
    {href: 'https://www.artstation.com/peter_bignold', icon: require('assets/images/home/artstation1.png'), alt: 'ArtStation', label: 'Artstation'},
    {href: 'https://www.instagram.com/peter.goes.fast/?hl=en', icon: require('assets/images/home/instagram1.png'), alt: 'Instagram', label: 'Instagram'},
    {href: 'https://noodlegames.itch.io/', icon: require('assets/images/home/itch1.png'), alt: 'itch.io', label: 'itch.io'},
  ]

  return (
    <Page background="background4.jpg">
      <div className="flex flex-col h-screen items-center justify-center">
        <div className="flex w-full max-w-7xl animate-move-up flex-col items-center">
          {contacts.map((contact) => (
            <ContactCard key={contact.value} {...contact}></ContactCard>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center animate-fade-in-3 gap-10">
          {socials.map((social) => (
            <IconLink key={social.href} href={social.href} icon={social.icon} alt={social.alt} label={social.label} large></IconLink>
          ))}
        </div>
      </div>
    </Page>
  )
}

export default Contact