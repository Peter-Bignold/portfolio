import React from 'react'
import {Link} from 'react-router-dom'

const ArtworkCard = ({to, image, title}) => (
  <Link className="m-1 rounded-lg border border-slate-800 bg-slate-800/50 p-0 text-neutral-100 shadow-xl shadow-black/30 transition duration-200 hover:bg-slate-800 overflow-hidden" to={to}>
    <img className="w-full max-w-lg rounded-t-lg" alt={title} src={image}></img>
    <h6 className="my-2 pt-1 text-lg font-light md:text-xl">{title}</h6>
  </Link>
)

export default ArtworkCard