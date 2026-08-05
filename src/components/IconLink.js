import React from 'react'

const IconLink = ({href, icon, alt, label, large = false}) => (
  <a
    className={[
      'inline-flex flex-col items-center text-neutral-100 transition duration-200 hover:opacity-60',
      large ? 'gap-2' : 'mx-2',
    ].join(' ')}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <img className={large ? 'h-12 w-12' : 'h-8 w-8'} src={icon} alt={alt}></img>
    {label ? <p className="m-0 text-xl font-light">{label}</p> : null}
  </a>
)

export default IconLink