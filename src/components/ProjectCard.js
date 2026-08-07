import React from 'react'
import {Link} from 'react-router-dom'

const ProjectCard = ({to, logo, title, meta, description, previews, className = ''}) => (
  <Link
    className={`mt-4 flex w-full max-w-6xl flex-col rounded-lg border border-slate-800 bg-slate-800/50 p-5 text-left text-neutral-100 shadow-soft transition duration-200 hover:bg-slate-800 xl:w-auto ${className}`}
    to={to}
  >
    <div className="flex items-start">
      <img className="h-16 w-16" alt={`${title} logo`} src={logo}></img>
      <div className="ml-6 flex flex-col text-left">
        <h4 className="text-3xl font-semibold xl:text-4xl">{title}</h4>
        <h5 className="text-xl xl:text-2xl font-normal text-neutral-400">{meta}</h5>
      </div>
    </div>
    <div className="mx-1 my-3 max-w-full text-lg xl:text-xl font-thin leading-[1.4]">{description}</div>
    <div className="flex flex-wrap items-center justify-center">
      {previews.map((preview) => (
        <img
          key={preview.alt}
          className="m-1 w-[47%] md:w-[32%] max-w-sm rounded"
          src={preview.src}
          alt={preview.alt}
          width={preview.width}
          height={preview.height}
        ></img>
      ))}
    </div>
  </Link>
)

export default ProjectCard