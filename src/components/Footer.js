import React from 'react';

const Footer = () => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex overflow-x-hidden">
      <footer className="flex w-full items-end justify-center bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent px-8 pb-8 pt-12 md:px-20 md:justify-end">
        <p className="m-0 text-lg text-neutral-400">&copy; 2025 Peter Bignold</p>
      </footer>
    </div>
  )
}

export default Footer;