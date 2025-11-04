import { ActionButton } from '../../../components/ActionButton';

const BUTTONS = [
  {
    title: 'WebApp',
    text: 'Ingresá a la WebApp y solicitá tu servicio',
    color: '#5C3FFF',
    redirectTo: 'https://tuasistencia.redsos.com.ar/home/login',
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
    color: '#008648',
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
    title: 'Línea Directa',
    text: 'Encontrá tu aseguradora para llamarnos',
    color: '#FF97BF',
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
    <div className="w-full flex justify-between gap-8 xl:gap-20">
      {BUTTONS.map(item => (
        <ActionButton
          key={item.redirectTo}
          onClick={() => handleButtonClick(item.redirectTo)}
          animationProps={item.animation}
          title={item.title}
          text={item.text}
          color={item.color}
        />
      ))}
    </div>
  );
};
