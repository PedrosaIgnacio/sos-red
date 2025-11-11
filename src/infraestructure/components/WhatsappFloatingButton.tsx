import { FaWhatsapp } from 'react-icons/fa';

export const WhatsappFloatingButton = () => {
  return (
    <button
      className="
        absolute 
        bottom-6 
        right-6 
        bg-green-500 
        hover:bg-green-600 
        text-white 
        rounded-full 
        p-3
        cursor-pointer
        shadow-lg 
        transition-all 
        duration-300 
        flex 
        items-center 
        justify-center
      "
      onClick={() => window.open('https://wa.me/5491128080012', '_blank')}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={32} />
    </button>
  );
};
