import React from 'react';
import {Link} from 'react-router-dom';

const CompactProjectLink = ({to, logo, title, meta}) => (
  <Link
    className="m-2 flex w-full flex-col rounded-[5px] bg-neutral-50 px-6 py-5 text-left text-black shadow-panel transition duration-200 hover:bg-neutral-100 md:w-auto md:min-w-[300px]"
    to={to}
  >
    <div className="flex items-start">
      <img className="h-[68px] w-[68px]" alt={`${title} logo`} src={logo}></img>
      <div className="ml-6 flex flex-col text-left">
        <h4 className="m-0 text-[32px] font-semibold md:text-[40px]">{title}</h4>
        <h5 className="mt-2 text-[20px] font-normal text-neutral-500 md:text-[28px]">{meta}</h5>
      </div>
    </div>
  </Link>
);

export default CompactProjectLink;