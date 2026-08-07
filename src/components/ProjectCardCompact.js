import React from 'react'
import {Link} from 'react-router-dom'

const ProjectCardCompact = ({to, logo, title, meta, className = ''}) => (
  <Link
    className={`flex w-full flex-col rounded-lg border border-slate-800 bg-slate-800/50 px-5 py-4 text-left text-neutral-100 shadow-panel transition duration-200 hover:bg-slate-800 md:w-auto md:min-w-72 ${className}`}
    to={to}
  >
    <div className="flex items-start">
      <img className="h-12 aspect-square" alt={`${title} logo`} src={logo}></img>
      <div className="ml-3 flex flex-col text-left">
        <h4 className="text-xl font-semibold">{title}</h4>
        <h5 className="font-normal text-neutral-400">{meta}</h5>
      </div>
    </div>
  </Link>
)

export default ProjectCardCompact