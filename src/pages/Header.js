import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Header = () => {
  const url = useLocation().pathname;
  const getLinkClassName = (isActive) => [
    'mx-[10px] my-1 mt-1 block bg-none px-0 py-[5px] text-center text-xl font-normal text-neutral-500 transition duration-200 hover:text-neutral-900 md:mx-0 md:w-[90px]',
    isActive ? 'text-neutral-600 underline decoration-[1.2px] underline-offset-[20%]' : '',
  ].join(' ');
  
  return (
    <div className="fixed top-0 z-[1000] m-0 w-full">
      <header className="flex h-[60px] items-center justify-center bg-neutral-100 px-[6%] py-[10px] text-[30px] shadow-soft md:justify-between">
        <div className="hidden flex-row items-start text-left md:flex">
          <img alt="Peter Bignold" src={require("../assets/images/header/noodle1.png")} className="h-8 w-8"></img>
          <h3 className="ml-4 mt-[7px] text-2xl font-normal whitespace-nowrap">Peter Bignold</h3>
        </div>
        <div className="mt-1 flex flex-row justify-end text-right">
          <Link className={getLinkClassName(!url.includes('games') && !url.includes('artwork') && !url.includes('contact'))} to="/">Home</Link>
          <img className="mx-[0.75vw] mt-[14px] hidden h-[6px] w-[6px] md:block" alt="dot" src={require("../assets/images/header/dot1.png")}></img>
          <Link className={getLinkClassName(url.includes('games'))} to="/games">Software</Link>
          <img className="mx-[0.75vw] mt-[14px] hidden h-[6px] w-[6px] md:block" alt="dot" src={require("../assets/images/header/dot1.png")}></img>
          <Link className={getLinkClassName(url.includes('artwork'))} to="/artwork">Artwork</Link>
          <img className="mx-[0.75vw] mt-[14px] hidden h-[6px] w-[6px] md:block" alt="dot" src={require("../assets/images/header/dot1.png")}></img>
          <Link className={getLinkClassName(url.includes('contact'))} to="/contact">Contact</Link>
        </div>
      </header>
    </div>
  )
}

export default Header;