// import { useEffect, useRef, useState } from 'react';
// import CloseIcon from '../../assets/x.svg?react';

// export const AssistancesCTA = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(true);
//   const [animationClass, setAnimationClass] = useState('');

//   const handleCloseCTA = () => {
//     setIsVisible(false);
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAnimationClass('fade-left-in');

//           const timeout = setTimeout(() => {
//             setAnimationClass('fade-right-out');
//           }, 6000);

//           return () => clearTimeout(timeout);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={ref}
//       className={`fade-out-left flex flex-col md:flex-row rounded-2xl overflow-hidden bg-[#EDE2CF] text-white shadow-xl absolute bottom-8 left-28 right-28 mx-auto border border-gray-300 z-100 ${animationClass} ${
//         isVisible ? '' : 'hidden'
//       }`}
//     >
//       <div className="w-full p-8 flex">
//         <div className="w-full flex flex-col justify-center">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-[#FF4020] font-medium mb-2 text-sm">Asistencias, coberturas y servicios</p>
//               <h2 className="text-2xl font-bold mb-2 text-black">Tu red de asistencia, siempre ahí</h2>
//               <p className="text-gray-500 mb-2 text-sm">Descubrí cómo estamos para vos, estés donde estés.</p>
//             </div>
//             <a
//               href="/asistencias"
//               className="inline-block bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg text-white font-semibold w-fit"
//             >
//               Conocer asistencias
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-2 right-2">
//         <button onClick={handleCloseCTA}>
//           <CloseIcon className="text-black" />
//         </button>
//       </div>
//     </section>
//   );
// };

import { useEffect, useRef, useState } from 'react';
import CloseIcon from '../../assets/x.svg?react';

export const AssistancesCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [animationClass, setAnimationClass] = useState('');

  const handleCloseCTA = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Solo animación de entrada
          setAnimationClass('fade-left-in');
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`flex flex-col md:flex-row rounded-2xl overflow-hidden bg-[#EDE2CF] text-white shadow-xl absolute bottom-8 left-28 right-28 mx-auto border border-gray-300 z-100 ${animationClass} ${
        isVisible ? '' : 'hidden'
      }`}
    >
      <div className="w-full p-8 flex">
        <div className="w-full flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#FF4020] font-medium mb-2 text-sm">Asistencias, coberturas y servicios</p>
              <h2 className="text-2xl font-bold mb-2 text-black">Tu red de asistencia, siempre ahí</h2>
              <p className="text-gray-500 mb-2 text-sm">Descubrí cómo estamos para vos, estés donde estés.</p>
            </div>
            <a
              href="/asistencias"
              className="inline-block bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg text-white font-semibold w-fit"
            >
              Conocer asistencias
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-2">
        <button onClick={handleCloseCTA}>
          <CloseIcon className="text-black" />
        </button>
      </div>
    </section>
  );
};
