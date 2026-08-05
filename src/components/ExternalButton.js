import React from 'react';

const ExternalButton = ({href, icon, iconAlt, children, disabled = false, className = ''}) => {
  const classes = [
    'inline-flex',
    'w-full',
    'items-center',
    'justify-center',
    'rounded',
    'px-5',
    'py-3',
    'text-center',
    'text-xl',
    'font-semibold',
    'shadow-panel',
    disabled ? 'cursor-default bg-neutral-200 text-neutral-500' : 'bg-neutral-50 text-black hover:bg-neutral-100',
    className,
  ].join(' ');

  const content = (
    <>
      {icon ? <img className="mr-3 h-6 w-6" src={icon} alt={iconAlt ?? ''}></img> : null}
      <span>{children}</span>
    </>
  );

  if (disabled) {
    return <div className={classes}>{content}</div>;
  }

  return (
    <a className={classes} href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
};

export default ExternalButton;