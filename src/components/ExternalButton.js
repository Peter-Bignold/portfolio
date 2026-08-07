import React from 'react'

const ExternalButton = ({href, icon, iconAlt, children, disabled = false, className = ''}) => {
  const classes = [
    'inline-flex',
    'w-full',
    'items-center',
    'justify-center',
    'rounded-lg',
    'px-5',
    'py-3',
    'text-center',
    'text-xl',
    'font-semibold',
    'shadow-panel',
    disabled ? 'cursor-default bg-slate-800 text-neutral-500' : 'bg-neutral-100 text-slate-950 hover:bg-neutral-300',
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