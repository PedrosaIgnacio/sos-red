import InstagramIcon from '../../assets/instagram.svg?react';
import PhoneIcon from '../../assets/phone.svg?react';
import LinkedinIcon from '../../assets/linkedin.svg?react';

const INSTAGRAM_ACCOUNT_LINK = 'https://www.instagram.com/sosreddeasistencia?igsh=MnNyNWVjZjYxcG84';
const LINKEDIN_ACCOUNT_LINK = 'https://www.linkedin.com/company/red-sos-de-asistencia/';
const PHONE_NUMBER_LINK = 'tel:08003336524';
const CANCELLATION_REQUEST = 'https://retailgestion.redsos.com.ar/solicitud-baja/2';
const REGRET_BUTTON = 'https://retailgestion.redsos.com.ar/solicitud-baja/1';

export const Footer = () => {
  return (
    <div className="bg-[#FF4020] w-full flex flex-col pt-10">
      <div className="flex items-center justify-center gap-4">
        <a
          href={CANCELLATION_REQUEST}
          className="text-[#FF4020] font-semibold text-base 2xl:text-2xl bg-[#FFFFFF] rounded-xl p-3"
        >
          BOTÓN DE BAJA
        </a>
        <a
          href={REGRET_BUTTON}
          className="text-[#FF4020] font-semibold text-base 2xl:text-2xl bg-[#FFFFFF] rounded-xl p-3"
        >
          BOTÓN DE ARREPENTIMIENTO
        </a>
      </div>
      <div className="w-full justify-between flex px-20">
        <div className="flex flex-col p-4 flex-1">
          <span className="text-white font-medium text-base 2xl:text-2xl m-0.5">Contactanos</span>
          <a
            target="_blank"
            href={INSTAGRAM_ACCOUNT_LINK}
            className="flex text-white font-medium text-base 2xl:text-2xl items-center"
          >
            <InstagramIcon />
            <span>sosreddeasistencia</span>
          </a>
          <a
            target="_blank"
            href={LINKEDIN_ACCOUNT_LINK}
            className="flex text-white font-medium text-base 2xl:text-2xl items-center"
          >
            <LinkedinIcon className="w-[20px] h-[20px] m-0.5" />
            <span>SOS Red de Asistencia</span>
          </a>
          <a
            target="_blank"
            href={PHONE_NUMBER_LINK}
            className="flex text-white font-medium text-base 2xl:text-2xl items-center"
          >
            <PhoneIcon className="w-[20px] h-[20px] m-0.5" />
            <span>sosreddeasistencia</span>
          </a>
        </div>
        <div className="flex-1 text-end flex flex-col items-end justify-center p-4">
          <span className="text-white font-normal text-base 2xl:text-2xl">© 2025. Todos los derechos reservados</span>
          <span className="text-white font-normal text-base 2xl:text-2xl">
            Política de privacidad - Política de Cookies
          </span>
        </div>
      </div>
    </div>
  );
};
