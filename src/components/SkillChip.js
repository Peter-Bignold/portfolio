import React from 'react'

const SkillChip = ({children}) => (
  <div className="m-1 flex max-h-10 rounded-lg border border-slate-800 bg-slate-800/50 backdrop-blur px-4 py-1.5 text-center">
    <p className="mt-0.5 text-base font-light text-neutral-200 md:text-xl">{children}</p>
  </div>
)

export default SkillChip