import React from 'react'

const Page = ({children, background, className = ''}) => (
  <div className={`mx-[5%] flex flex-col items-center text-center pb-40 ${className}`}>
    { background && (
      <div className="fixed inset-0 opacity-10 pointer-events-none select-none">
        <img
          className="h-full w-full object-cover object-center animate-fade-in-1"
          src={require(`assets/images/backgrounds/${background}`)}
          alt=""
        />
      </div>
    )}
    {children}
  </div>
)

export default Page