import React from 'react'

const IconLink = ({href, icon, alt, label}) => (
  <a
    className="inline-flex flex-col items-center text-neutral-100 transition duration-200 hover:opacity-60 gap-2"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <img className="h-10 w-10 xl:h-12 xl:w-12" src={icon} alt={alt}></img>
    {label ? <p className="text-md xl:text-lg m-0 font-light">{label}</p> : null}
  </a>
)

export default IconLink