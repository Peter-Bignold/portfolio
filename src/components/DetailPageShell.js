import React from 'react';

import ExternalButton from './ExternalButton.js';
import PageShell from './PageShell.js';

const mediaCaptionClassName = 'm-0 text-xl font-light leading-[1.3] md:text-2xl';

export const DetailPageShell = ({title, subtitle, logo, description, buttons = [], children}) => (
  <PageShell className="pt-[120px]">
    <div className="mb-10 flex flex-col items-center">
      <div className={`mb-10 flex items-center justify-center gap-4 ${logo ? 'flex-col sm:flex-row' : 'flex-col'} animate-fade-in-1`}>
        {logo ? <img className="h-[85px] w-[85px]" alt={`${title} logo`} src={logo}></img> : null}
        <div className={`flex flex-col ${logo ? 'items-center text-center sm:items-start sm:pl-8 sm:text-left' : 'items-center text-center'}`}>
          <h1 className={subtitle ? 'mb-[10px] text-[38px] font-semibold md:text-[50px]' : 'my-4 text-[40px] font-normal md:text-[55px]'}>{title}</h1>
          {subtitle ? <p className="mt-2 text-[28px] font-normal text-neutral-500 md:text-[32px]">{subtitle}</p> : null}
        </div>
      </div>
      <div className="animate-fade-in-2 max-w-[1000px] text-center text-xl font-light leading-[1.3] md:text-2xl">
        {description}
      </div>
    </div>

    {buttons.length ? (
      <div className="mb-10 flex w-full max-w-[1000px] animate-fade-in-2 flex-col items-center">
        {buttons.map((button) => (
          <ExternalButton
            key={button.label}
            href={button.href}
            icon={button.icon}
            iconAlt={button.iconAlt}
            disabled={button.disabled}
            className="my-1"
          >
            {button.label}
          </ExternalButton>
        ))}
      </div>
    ) : null}

    <div className="flex w-full flex-col items-center animate-fade-in-3">{children}</div>
  </PageShell>
);

export const MediaGallery = ({items, layout = 'stack', variant = 'gallery'}) => {
  const containerClassName = layout === 'wrap'
    ? 'flex w-full flex-wrap items-start justify-center'
    : 'flex w-full flex-col items-center';

  return (
    <div className={containerClassName}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const spacingClassName = isLast ? '' : 'mb-5';
        const wrapperClassName = [
          'flex flex-col items-center',
          spacingClassName,
          item.wrapperClassName ?? '',
        ].join(' ').trim();

        if (item.type === 'video') {
          return (
            <div key={item.title} className={wrapperClassName}>
              <div className="w-full max-w-[1000px]">
                <iframe
                  className="mb-[10px] aspect-video w-full rounded-[5px] border-0 bg-transparent"
                  title={item.title}
                  frameBorder="0"
                  allow="fullscreen;"
                  src={item.src}
                ></iframe>
              </div>
              {item.caption ? <p className={mediaCaptionClassName}>{item.caption}</p> : null}
            </div>
          );
        }

        const imageClassName = variant === 'app'
          ? 'mb-[10px] rounded-[5px]'
          : 'w-full max-w-[1000px] rounded-[5px]';

        return (
          <div key={`${item.alt}-${index}`} className={wrapperClassName}>
            <img
              className={item.imageClassName ?? imageClassName}
              alt={item.alt}
              src={item.src}
              width={item.width}
              height={item.height}
            ></img>
            {item.caption ? <p className={mediaCaptionClassName}>{item.caption}</p> : null}
          </div>
        );
      })}
    </div>
  );
};