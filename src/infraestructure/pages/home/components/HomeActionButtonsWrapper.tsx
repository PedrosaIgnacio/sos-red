import { ActionButton } from '../../../components/ActionButton';
import { FaWhatsapp } from 'react-icons/fa';
import { MdLocalPhone } from 'react-icons/md';
import { TbWorldSearch } from 'react-icons/tb';

import { FaCheck } from 'react-icons/fa';

const PHONE_NUMBER_LINK = 'tel:08003336524';
const BUTTONS = [
  {
    title: 'WebApp',
    text: 'Ingresá a la WebApp y solicitá tu servicio',
    color: '#FF4020',
    redirectTo: 'https://tuasistencia.redsos.com.ar/home/login',
    icon: <TbWorldSearch className="w-6 h-6 2xl:w-8 2xl:h-8" color="white" />,
    animation: {
      'data-aos': 'fade-in',
      'data-aos-offset': '200',
      'data-aos-delay': '0',
      'data-aos-duration': '1000',
      'data-aos-easing': 'ease-in-out',
      'data-aos-mirror': 'true',
      'data-aos-once': 'true',
      'data-aos-anchor-placement': 'top-bottom',
    },
  },
  {
    title: 'WhatsApp',
    text: '¡Comunicate con nosotros por WhatsApp!',
    color: '#FF4020',
    icon: <FaWhatsapp className="w-6 h-6 2xl:w-8 2xl:h-8" color="white" />,
    redirectTo: 'https://api.whatsapp.com/send?phone=5491128080012',
    animation: {
      'data-aos': 'fade-in',
      'data-aos-offset': '200',
      'data-aos-delay': '400',
      'data-aos-duration': '1000',
      'data-aos-easing': 'ease-in-out',
      'data-aos-mirror': 'true',
      'data-aos-once': 'true',
      'data-aos-anchor-placement': 'top-bottom',
    },
  },
  {
    title: 'Contacta a tu aseguradora',
    text: 'Encontrá el número de tu aseguradora y comunicate directamente',
    color: '#FF4020',
    icon: <MdLocalPhone className="w-6 h-6 2xl:w-8 2xl:h-8" color="white" />,
    redirectTo: PHONE_NUMBER_LINK,
    animation: {
      'data-aos': 'fade-in',
      'data-aos-offset': '200',
      'data-aos-delay': '200',
      'data-aos-duration': '1000',
      'data-aos-easing': 'ease-in-out',
      'data-aos-mirror': 'true',
      'data-aos-once': 'true',
      'data-aos-anchor-placement': 'top-bottom',
    },
  },
  {
    title: 'Línea Directa',
    text: 'Comunícate con nuestra central de atención las 24 hs.',
    color: '#FF4020',
    icon: <FaCheck className="w-6 h-6 2xl:w-8 2xl:h-8" color="white" />,
    redirectTo: '/linea-directa',
    animation: {
      'data-aos': 'fade-in',
      'data-aos-offset': '200',
      'data-aos-delay': '200',
      'data-aos-duration': '1000',
      'data-aos-easing': 'ease-in-out',
      'data-aos-mirror': 'true',
      'data-aos-once': 'true',
      'data-aos-anchor-placement': 'top-bottom',
    },
  },
];

export const HomeActionButtonsWrapper = () => {
  const handleButtonClick = (redirectTo: string) => {
    window.location.href = redirectTo;
  };

  return (
    <div className="w-full grid grid-cols-2 gap-12 gap-y-16 my-12">
      {BUTTONS.map((item, index) => (
        <div className={`w-full flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`} key={item.text}>
          <div className="flex w-full">
            <ActionButton
              key={item.redirectTo}
              onClick={() => handleButtonClick(item.redirectTo)}
              animationProps={item.animation}
              title={item.title}
              text={item.text}
              color={item.color}
              icon={item.icon}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
