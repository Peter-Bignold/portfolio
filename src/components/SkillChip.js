import React from 'react';

const SkillChip = ({children}) => (
  <div className="m-[5px] flex max-h-10 rounded-[15px] border border-slate-800 bg-slate-800/50 backdrop-blur px-[15px] py-[5px] text-center">
    <p className="m-0 mt-[5px] text-base font-light text-neutral-200 md:text-xl">{children}</p>
  </div>
);

export default SkillChip;