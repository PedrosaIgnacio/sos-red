import { useEffect, useState } from 'react';
import Banner1 from '../../../../assets/banner-1.png';
import Banner2 from '../../../../assets/banner-2.png';
import Banner3 from '../../../../assets/banner-3.png';

export const HomeSlider = () => {
  const images = [Banner1, Banner2, Banner3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full flex h-full">
      <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
        {images.map((src, i) => {
          const diff = (i - index + images.length) % images.length;

          let positionClass = '';
          if (diff === 0) {
            positionClass = 'translate-x-0 scale-130 2xl:scale-130 z-30 shadow-[12.7px_12.7px_19.05px_0px_#0000001A] ';
          } else if (diff === 1) {
            positionClass = 'translate-x-[60%] scale-90 z-20 opacity-70';
          } else if (diff === 2) {
            positionClass = '-translate-x-[60%] scale-90 z-10 opacity-70';
          }

          return (
            <img
              key={i}
              src={src}
              alt={`banner-${i + 1}`}
              className={`absolute w-1/2 h-fit object-contain rounded-2xl transition-all duration-700 ease-in-out ${positionClass}`}
            />
          );
        })}
      </div>
    </div>
  );
};
