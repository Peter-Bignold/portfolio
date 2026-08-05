import React from 'react'
import {Link} from 'react-router-dom'

const CompactProjectLink = ({to, logo, title, meta, className = ''}) => (
  <Link
    className={`m-2 flex w-full flex-col rounded-lg border border-slate-800 bg-slate-800/50 backdrop-blur px-5 py-4 md:px-6 md:py-5 text-left text-neutral-100 shadow-panel transition duration-200 hover:bg-slate-800 md:w-auto md:min-w-72 ${className}`}
    to={to}
  >
    <div className="flex items-start">
      <img className="h-12 md:h-16 aspect-square" alt={`${title} logo`} src={logo}></img>
      <div className="ml-6 flex flex-col text-left">
        <h4 className="md:text-3xl font-semibold">{title}</h4>
        <h5 className="md:text-xl font-normal text-neutral-400">{meta}</h5>
      </div>
    </div>
  </Link>
)

export default CompactProjectLink