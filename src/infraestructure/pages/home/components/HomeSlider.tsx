import { useEffect, useState } from 'react';
import Banner1 from '../../../../assets/banner-1.png';
import Banner2 from '../../../../assets/banner-2.png';
import Banner3 from '../../../../assets/banner-3.png';
import Banner4 from '../../../../assets/banner-4.png';

export const HomeSlider = () => {
  const images = [Banner1, Banner2, Banner3, Banner4];
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
          switch (diff) {
            case 0: // Imagen activa (centro)
              positionClass =
                'translate-x-0 scale-130 2xl:scale-130 z-30 shadow-[12.7px_12.7px_19.05px_0px_#0000001A] opacity-100';
              break;
            case 1: // Siguiente (derecha)
              positionClass = 'translate-x-[60%] scale-90 z-20 opacity-70';
              break;
            case images.length - 1: // Anterior (izquierda)
              positionClass = '-translate-x-[60%] scale-90 z-10 opacity-70';
              break;
            default:
              // Las demás imágenes quedan fuera de vista
              positionClass = 'opacity-0 scale-75 translate-x-0 z-0';
              break;
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
