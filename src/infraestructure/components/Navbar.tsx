import { Link, useNavigate } from 'react-router-dom';
import SOSLogo from '../../assets/SOS-red-de-asistencia.svg?react';

const NAVBAR_ITEMS = [
  // {
  //   path: '/nosotros',
  //   label: 'Nosotros',
  // },
  {
    path: '/asistencias',
    label: 'Asistencias',
  },
  {
    path: '/novedades',
    label: 'Novedades',
  },
  {
    path: '/contactanos',
    label: 'Contactanos',
  },
  {
    path: 'https://www.sosenergy.com.ar/',
    label: 'Sos Energy',
  },
  {
    path: 'https://tuportal.redsos.com.ar/login',
    label: 'Portal Corporativo',
  },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');
  };
  return (
    <div className="bg-[#FF4020] w-full h-20 flex items-center pl-28 justify-between pr-7 shadow-[7px_7px_10px_0px_#000000BF] z-10">
      <SOSLogo className="h-3/5 w-fit cursor-pointer" onClick={handleGoHome} />
      <div className="hidden xl:flex gap-16">
        {NAVBAR_ITEMS.map(element => (
          <div key={element.path}>
            <Link
              to={element.path}
              {...(element.path.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="font-semibold text-base text-white 2xl:text-lg">{element.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
