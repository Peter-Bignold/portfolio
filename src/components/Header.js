import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Header = () => {
  const url = useLocation().pathname;
  const getLinkClassName = (isActive) => [
    'mx-[10px] my-1 mt-1 block bg-none px-0 py-[5px] text-center text-xl font-normal text-neutral-400 transition duration-200 hover:text-neutral-100 md:mx-0 md:w-[90px]',
    isActive ? 'text-neutral-100 underline decoration-[1.2px] underline-offset-[20%]' : '',
  ].join(' ');
  
  return (
    <div className="fixed top-0 z-[1000] m-0 w-full">
      <header className="flex h-[60px] items-center justify-center border-b border-slate-800/80 bg-slate-900/95 px-[6%] py-[10px] text-[30px] text-neutral-100 shadow-soft backdrop-blur md:justify-between">
        <div className="hidden flex-row items-center text-left md:flex bg-slate-800 py-1 px-4 rounded-lg">
          <img alt="Peter Bignold" src={require("assets/images/home/headshot3.jpg")} className="h-7 w-7 rounded-full"></img>
          <h3 className="ml-3 mt-[6px] text-xl font-light whitespace-nowrap">Peter Bignold</h3>
        </div>
        <div className="mt-1 flex flex-row justify-end text-right">
          <Link 
            className={getLinkClassName(url.includes('games'))} 
            to="/games">
            Software
          </Link>
          <Link 
            className={getLinkClassName(url.includes('artwork'))} 
            to="/artwork">
            Artwork
          </Link>
          <Link 
            className={getLinkClassName(url.includes('contact'))} 
            to="/contact">
            Contact
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Header;