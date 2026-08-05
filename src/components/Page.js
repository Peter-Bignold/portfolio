import React from 'react';

const Page = ({children, className = ''}) => (
  <div className={`mx-[5%] flex flex-col items-center text-center ${className}`}>{children}</div>
);

export default Page;