import { ActionButton } from '../../../components/ActionButton';

const BUTTONS = [
  {
    title: 'Talento y Cultura',
    text: 'Buscamos nuevos talentos, envianos tu CV',
    color: '#5C3FFF',
    redirectTo: 'https://sos-red-asistencia.pandape.computrabajo.com',
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
    title: 'Prestadores y Proveedores',
    text: 'Sé parte de nuestra red de prestadores',
    color: '#008648',
    redirectTo: 'https://forms.gle/URroP3cHs2Q7zPsH6',
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
    title: 'Consultas y sugerencias',
    text: 'Trabajamos en tus comentarios sobre nuestros servicios',
    color: '#FF97BF',
    redirectTo: 'https://tuportal.redsos.com.ar/form',
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

export const ContactanosActionButtonsWrapper = () => {
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
