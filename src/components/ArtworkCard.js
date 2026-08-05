import React from 'react';
import {Link} from 'react-router-dom';

const ArtworkCard = ({to, image, title}) => (
  <Link className="m-1 rounded-[5px] border border-slate-800 bg-slate-900 p-0 text-neutral-100 shadow-[0_0_18px_0_rgba(0,0,0,0.35)] transition duration-200 hover:bg-slate-800" to={to}>
    <img className="w-full max-w-[500px] rounded-t-[5px]" alt={title} src={image}></img>
    <h6 className="my-3 text-[18px] font-normal md:text-[22px]">{title}</h6>
  </Link>
);

export default ArtworkCard;