import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Header = () => {
  const url = useLocation().pathname;
  const getLinkClass = (isActive, isHome = false) => {
    if (isHome) {
      return [
        'ml-3 mt-1.5 text-xl font-light text-neutral-400 hover:text-neutral-100 whitespace-nowrap transition',
        isActive ? '!text-neutral-100' : '',
      ].join(' ')
    }
    return [
      'mx-4 mt-1 block text-xl font-light text-neutral-400 transition duration-200 hover:text-neutral-100',
      isActive ? '!text-neutral-100 underline decoration-[1px] underline-offset-[30%]' : '',
    ].join(' ')
  };
  
  return (
    <div className="fixed top-0 z-[1000] m-0 w-full">
      <header className="flex h-14 items-center justify-center border-b border-slate-800/80 bg-slate-900/50 px-[6%] py-2.5 text-3xl text-neutral-100 shadow-soft backdrop-blur md:justify-between">
        <Link to="/" className="hidden flex-row items-center text-left md:flex rounded-lg">
          <img alt="Peter Bignold" src={require("assets/images/home/headshot3.jpg")} className="h-7 w-7 rounded-full"></img>
          <h3 className={getLinkClass(url === '/', true)}>Peter Bignold</h3>
        </Link>
        <div className="mt-1 flex flex-row justify-end text-right">
          <Link 
            className={getLinkClass(url.includes('games'))} 
            to="/games">
            Software
          </Link>
          <Link 
            className={getLinkClass(url.includes('artwork'))} 
            to="/artwork">
            Artwork
          </Link>
          <Link 
            className={getLinkClass(url.includes('contact'))} 
            to="/contact">
            Contact
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Header;