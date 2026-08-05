import React from 'react'

const ContactCard = ({icon, alt, label, value}) => (
  <div className="flex flex-col items-center justify-center my-2 p-6 w-full max-w-xl rounded-lg border border-slate-800 bg-slate-800/50 backdrop-blur">
    <img className="mb-2 h-16 w-16" src={icon} alt={alt}></img>
    <p className="mb-0 text-xl font-light leading-[1.3] text-neutral-300 md:text-2xl">{label}</p>
    <p className="mt-2 text-xl font-normal text-neutral-100 md:text-3xl">{value}</p>
  </div>
)

export default ContactCard