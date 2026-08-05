import React from 'react';
import {Link} from 'react-router-dom';

const ProjectCard = ({to, logo, title, meta, description, previews, className = ''}) => (
  <Link
    className={`mt-4 flex w-full max-w-[1256px] flex-col rounded-[5px] border border-slate-800 bg-slate-900 p-5 text-left text-neutral-100 shadow-soft transition duration-200 hover:bg-slate-800 md:w-auto ${className}`}
    to={to}
  >
    <div className="flex items-start">
      <img className="h-[68px] w-[68px]" alt={`${title} logo`} src={logo}></img>
      <div className="ml-6 flex flex-col text-left">
        <h4 className="m-0 text-[32px] font-semibold md:text-[40px]">{title}</h4>
        <h5 className="mt-2 text-[20px] font-normal text-neutral-400 md:text-[28px]">{meta}</h5>
      </div>
    </div>
    <div className="mx-1 my-3 max-w-full text-xl font-light leading-[1.3] md:text-2xl">{description}</div>
    <div className="flex flex-wrap items-center justify-center">
      {previews.map((preview) => (
        <img
          key={preview.alt}
          className={preview.className}
          src={preview.src}
          alt={preview.alt}
          width={preview.width}
          height={preview.height}
        ></img>
      ))}
    </div>
  </Link>
);

export default ProjectCard;