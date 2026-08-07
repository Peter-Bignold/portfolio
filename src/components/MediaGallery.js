import React from 'react'

const mediaCaptionClassName = 'm-0 text-xl font-light md:text-2xl'

const MediaGallery = ({items, layout = 'stack', variant = 'gallery'}) => {
  const containerClassName = layout === 'wrap'
    ? 'flex w-full flex-wrap items-start justify-center'
    : 'flex w-full flex-col items-center'

  return (
    <div className={containerClassName}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        const spacingClassName = isLast ? '' : 'mb-5'
        const wrapperClassName = [
          'flex flex-col items-center',
          spacingClassName,
          item.wrapperClassName ?? '',
        ].join(' ').trim()

        if (item.type === 'video') {
          return (
            <div key={item.title} className={wrapperClassName}>
              <div className="w-full max-w-5xl">
                <iframe
                  className="mb-2.5 aspect-video w-full rounded border-0 bg-transparent"
                  title={item.title}
                  frameBorder="0"
                  allow="fullscreen;"
                  src={item.src}
                ></iframe>
              </div>
              {item.caption ? <p className={mediaCaptionClassName}>{item.caption}</p> : null}
            </div>
        )
      }

        const imageClassName = variant === 'app'
          ? 'mb-2.5 rounded'
          : 'w-full max-w-5xl rounded'

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
        )
      })}
    </div>
  )
}

export default MediaGallery