import React from 'react';

const SkillChip = ({children}) => (
  <div className="m-[5px] flex max-h-10 rounded-[15px] bg-neutral-300 px-[15px] py-[5px] text-center">
    <p className="m-0 mt-[5px] text-base font-light md:text-xl">{children}</p>
  </div>
);

export default SkillChip;