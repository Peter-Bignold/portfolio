import React, {useState} from 'react'

const slides = [
  {image: 'bmw1', caption: 'BMW E30 M3'},
  {image: 'harley1', caption: 'Harley Davidson Fatboy'},
  {image: 'mclaren1', caption: 'Mclaren MP4-6'},
  {image: 'ninja1', caption: 'Kawasaki Ninja'},
  {image: 'ferrari1', caption: 'Ferrari 330-P4'},
  {image: 'mazda1', caption: 'Maxda RX-7'},
  {image: 'civic1', caption: 'Honda Civic Si'},
  {image: 'stingray1', caption: 'Chevrolet Corvette'},
]

const Slideshow = () => {
  const [index, setIndex] = useState(0)

  const setSlide = (nextIndex) => {
    if (nextIndex > slides.length - 1) {
      setIndex(0)
      return
    }

    if (nextIndex < 0) {
      setIndex(slides.length - 1)
      return
    }

    setIndex(nextIndex)
  }

  return (
    <div className="mx-[5%] flex flex-col items-center text-center">
      <div className="relative flex max-w-2xl items-center leading-none">
        <div>
          <img
            className="w-full rounded-lg shadow-gallery animate-fade-in-half"
            alt="Gallery"
            src={require(`../assets/images/artwork/${slides[index].image}.jpg`)}
          ></img>
          <div className="absolute bottom-2 w-full pb-3.5 text-xl text-neutral-100 drop-shadow-md md:text-2xl">
            {slides[index].caption}
          </div>
        </div>
        <button
          className="absolute left-0 top-0 flex h-full select-none items-center rounded-l-lg px-6 text-3xl font-bold text-white transition duration-200 hover:bg-black/30"
          type="button"
          onClick={() => setSlide(index - 1)}
        >
          &#10094;
        </button>
        <button
          className="absolute right-0 top-0 flex h-full select-none items-center rounded-r-lg px-6 text-3xl font-bold text-white transition duration-200 hover:bg-black/30"
          type="button"
          onClick={() => setSlide(index + 1)}
        >
          &#10095;
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.image}
            className={[
              'mx-1 inline-block h-4 w-4 rounded-full transition duration-200',
              slideIndex === index ? 'bg-neutral-100' : 'bg-slate-700 hover:bg-slate-500',
            ].join(' ')}
            type="button"
            aria-label={`Show ${slide.caption}`}
            onClick={() => setSlide(slideIndex)}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Slideshow