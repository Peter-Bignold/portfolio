import React from 'react';
import {Link} from 'react-router-dom';

const CompactProjectLink = ({to, logo, title, meta, className = ''}) => (
  <Link
    className={`m-2 flex w-full flex-col rounded border border-slate-800 bg-slate-800/50 backdrop-blur px-6 py-5 text-left text-neutral-100 shadow-panel transition duration-200 hover:bg-slate-800 md:w-auto md:min-w-72 ${className}`}
    to={to}
  >
    <div className="flex items-start">
      <img className="h-16 w-16" alt={`${title} logo`} src={logo}></img>
      <div className="ml-6 flex flex-col text-left">
        <h4 className="m-0 text-3xl font-semibold md:text-4xl">{title}</h4>
        <h5 className="mt-2 text-xl font-normal text-neutral-400 md:text-3xl">{meta}</h5>
      </div>
    </div>
  </Link>
);

export default CompactProjectLink;