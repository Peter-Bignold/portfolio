import React from 'react';

const ContactCard = ({icon, alt, label, value}) => (
  <div className="my-2 w-full max-w-[1256px] rounded-[5px] border border-slate-800 bg-slate-900 p-6 shadow-[0_0_18px_0_rgba(0,0,0,0.35)]">
    <img className="mb-2 h-16 w-16" src={icon} alt={alt}></img>
    <p className="mb-0 text-xl font-light leading-[1.3] text-neutral-300 md:text-2xl">{label}</p>
    <p className="mt-2 text-[20px] font-normal text-neutral-100 md:text-[32px]">{value}</p>
  </div>
);

export default ContactCard;