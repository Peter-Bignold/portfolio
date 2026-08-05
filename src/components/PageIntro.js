import React from 'react';

const PageIntro = ({title, subtitle, className = ''}) => (
  <div className={`mb-10 flex flex-col items-center ${className}`}>
    <h1 className="mt-[120px] mb-[10px] text-[50px] font-normal animate-fade-in-1 md:text-[80px]">{title}</h1>
    {subtitle ? <h2 className="text-[20px] font-light text-neutral-500 animate-fade-in-2 md:text-[30px]">{subtitle}</h2> : null}
  </div>
);

export default PageIntro;