import React from 'react';
import {Link} from 'react-router-dom';

const ArtworkCard = ({to, image, title}) => (
  <Link className="m-1 rounded-[5px] bg-neutral-50 p-0 text-black shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition duration-200 hover:opacity-75" to={to}>
    <img className="w-full max-w-[500px] rounded-t-[5px]" alt={title} src={image}></img>
    <h6 className="my-3 text-[18px] font-normal md:text-[22px]">{title}</h6>
  </Link>
);

export default ArtworkCard;