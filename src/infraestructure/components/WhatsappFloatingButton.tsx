// import { FaWhatsapp } from 'react-icons/fa';

// export const WhatsappFloatingButton = () => {
//   return (
//     <button
//       className="
//         absolute
//         bottom-6
//         right-6
//         bg-green-500
//         hover:bg-green-600
//         text-white
//         rounded-full
//         p-3
//         cursor-pointer
//         shadow-lg
//         transition-all
//         duration-300
//         flex
//         items-center
//         justify-center
//       "
//       onClick={() => window.open('https://wa.me/5491128080012', '_blank')}
//       aria-label="Contactar por WhatsApp"
//     >
//       <FaWhatsapp size={32} />
//     </button>
//   );
// };

import { FaWhatsapp } from 'react-icons/fa';

export const WhatsappFloatingButton = () => {
  return (
    <button
      className="
        fixed
        bottom-6
        right-6
        bg-green-500
        hover:bg-green-600
        text-white
        rounded-full
        p-4
        shadow-lg
        transition-all
        duration-300
        flex
        items-center
        justify-center
        z-50
      "
      onClick={() => window.open('https://wa.me/549XXXXXXXXXX', '_blank')}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </button>
  );
};
