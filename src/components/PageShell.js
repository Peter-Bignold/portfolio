import React from 'react';

const PageShell = ({children, className = ''}) => (
  <div className={`mx-[5%] flex flex-col items-center text-center ${className}`}>{children}</div>
);

export default PageShell;