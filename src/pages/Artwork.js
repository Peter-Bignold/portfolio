import React from 'react';
import ArtworkCard from 'components/ArtworkCard.js';
import Page from 'components/Page.js';

const Artwork = () => {
  const artwork = [
    {to: 'bmw', image: require('assets/images/artwork/preview_bmw1.jpg'), title: 'BMW E30 M3 (DTM)'},
    {to: 'harley', image: require('assets/images/artwork/preview_harley1.jpg'), title: 'Harley Davidson Fatboy'},
    {to: 'mclaren', image: require('assets/images/artwork/preview_mclaren1.jpg'), title: 'Mclaren MP4-6'},
    {to: 'ninja', image: require('assets/images/artwork/preview_ninja1.jpg'), title: 'Kawasaki Ninja'},
    {to: 'civic', image: require('assets/images/artwork/preview_civic1.jpg'), title: 'Honda Civic Si'},
    {to: 'ferrari', image: require('assets/images/artwork/preview_ferrari1.jpg'), title: 'Ferrari 330 P4'},
    {to: 'mazda', image: require('assets/images/artwork/preview_mazda1.jpg'), title: 'Mazda RX-7'},
    {to: 'stingray', image: require('assets/images/artwork/preview_stingray1.jpg'), title: 'Chevrolet Corvette Stingray'},
    {to: 'gtx', image: require('assets/images/artwork/preview_gtx1.jpg'), title: 'Plymouth GTX'},
    {to: 'beetle', image: require('assets/images/artwork/preview_beetle1.jpg'), title: 'Volkswagen Beetle'},
    {to: 'guitar', image: require('assets/images/artwork/preview_guitar1.jpg'), title: 'Simon & Patrick Songsmith'},
  ];

  return (
    <Page className="pb-10">
      <div className="mb-10 flex flex-col items-center">
        <h1 className="mt-[120px] mb-[10px] text-[50px] font-normal animate-fade-in-1 md:text-[80px]">Digital Artwork</h1>
        <h2 className="text-[20px] font-light text-neutral-400 animate-fade-in-2 md:text-[30px]">Rendered in Blender Cycles and Unreal Engine 5</h2>
      </div>
      <div className="flex flex-wrap items-center justify-center animate-move-up">
        {artwork.map((item) => (
          <ArtworkCard key={item.to} to={item.to} image={item.image} title={item.title}></ArtworkCard>
        ))}
      </div>
    </Page>
  )
}

export default Artwork;