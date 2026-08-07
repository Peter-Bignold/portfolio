import React from 'react'

const ExternalButton = ({href, icon, iconAlt, children, disabled = false, className = ''}) => {
  const classes = [
    'inline-flex',
    'w-full',
    'items-center',
    'justify-center',
    'rounded-lg',
    'px-5',
    'pt-3 pb-2.5',
    'text-center',
    'text-xl',
    'font-normal',
    'shadow-panel',
    disabled ? 'cursor-default bg-slate-800 text-neutral-500' : 'border-slate-800 bg-slate-800/50 hover:bg-slate-800',
    className,
  ].join(' ')

  const content = (
    <>
      {icon ? <img className="mr-3 h-6 w-6" src={icon} alt={iconAlt ?? ''}></img> : null}
      <span>{children}</span>
    </>
  )
  if (disabled) {
    return <div className={classes}>{content}</div>
  }

  return (
    <a className={classes} href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  )
}

export default ExternalButton