import React from 'react';

const ContactCard = ({icon, alt, label, value}) => (
  <div className="my-2 w-full max-w-7xl rounded border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-black/30">
    <img className="mb-2 h-16 w-16" src={icon} alt={alt}></img>
    <p className="mb-0 text-xl font-light leading-[1.3] text-neutral-300 md:text-2xl">{label}</p>
    <p className="mt-2 text-xl font-normal text-neutral-100 md:text-3xl">{value}</p>
  </div>
);

export default ContactCard;