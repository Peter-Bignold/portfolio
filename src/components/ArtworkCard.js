import React from 'react'
import {Link} from 'react-router-dom'

const ArtworkCard = ({to, image, title}) => (
  <Link className="m-1 rounded border border-slate-800 bg-slate-900 p-0 text-neutral-100 shadow-xl shadow-black/30 transition duration-200 hover:bg-slate-800" to={to}>
    <img className="w-full max-w-lg rounded-lg-t" alt={title} src={image}></img>
    <h6 className="my-3 text-lg font-normal md:text-xl">{title}</h6>
  </Link>
)

export default ArtworkCard