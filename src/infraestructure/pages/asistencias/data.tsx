import SaludBienestarIcon from '../../../assets/salud-bienestar.svg?react';
import MovilidadIcon from '../../../assets/movilidad.svg?react';
import MultiasistenciaIcon from '../../../assets/multiasistencia.svg?react';
import HogarIcon from '../../../assets/hogar.svg?react';
import Hogar from '../../../assets/HOGAR.jpg';
import Movilidad from '../../../assets/MOVILIDAD.png';
import Multiasistencia from '../../../assets/MULTIASISTENCIA.jpg';
import Salud from '../../../assets/SALUD.jpg';
import type { JSX } from 'react';

export interface AssistanceModalContent {
  title: string;
  description: string;
}

export type Assistance = {
  title: string;
  icon: JSX.Element;
  img: string;
  description: string;
  modal: {
    title: string;
    description: string;
    content: AssistanceModalContent[];
  };
};

export const Assistances: Assistance[] = [
  {
    title: 'Salud y Bienestar',
    icon: <SaludBienestarIcon />,
    img: Salud,
    description:
      'Soluciones integrales para cuidar tu salud física, emocional y social. Atención médica, telemedicina, programas de bienestar y acompañamiento personalizado.',
    modal: {
      title: 'Cuidarte es nuestra prioridad',
      description:
        'La asistencia Salud y Bienestar está enfocada en ofrecerte un servicio completo, moderno y accesible para cuidar tu salud en todas sus dimensiones.',
      content: [
        {
          title: 'Asistencia médica y prevención',
          description:
            'Contamos con atención médica domiciliaria, telemedicina, orientación sanitaria y envío de profesionales para emergencias o consultas de rutina. También ofrecemos cobertura en protección en la vía pública, ideal para quienes se desplazan a diario y necesitan atención inmediata ante accidentes o urgencias.',
        },
        {
          title: 'Bienestar y estilo de vida',
          description:
            'Además de la atención médica, desarrollamos programas de Estilo de Vida (Wellness): asesoramiento nutricional, actividad física, salud mental y control de hábitos saludables. También brindamos servicios especiales para la tercera edad, promoviendo una vida activa, acompañada y segura.',
        },
        {
          title: 'Siempre cerca, siempre disponibles',
          description:
            'Con tecnología, empatía y una red nacional de especialistas, SOS Asistencia garantiza que tu bienestar esté siempre en buenas manos.',
        },
      ],
    },
  },
  {
    title: 'Movilidad',
    icon: <MovilidadIcon />,
    img: Movilidad,
    description:
      'Asistencia integral para todo tipo de vehículos. Servicios de urgencia, mantenimiento y cobertura nacional las 24 hs, para que siempre sigas en movimiento.',
    modal: {
      title: 'Movilidad sin interrupciones',
      description:
        'La asistencia Movilidad está diseñada para acompañarte en cualquier trayecto, brindando cobertura total ante imprevistos y necesidades de transporte. Desde autos y motos hasta camiones, embarcaciones o vehículos eléctricos, contamos con un sistema de asistencia que se adapta a cada tipo de movilidad.',
      content: [
        {
          title: 'Cobertura completa para cada vehículo',
          description:
            'Incluye servicios de auxilio mecánico, remolques, asistencia en ruta, cambio de neumáticos, carga de batería o combustible, y acompañamiento ante siniestros. También abarca asistencia náutica, cobertura para flotas de camiones y soporte para movilidad sustentable (bicicletas y monopatines eléctricos), con atención especializada y soluciones técnicas certificadas.',
        },
        {
          title: 'Tecnología y experiencia',
          description:
            'Gracias a nuestra red nacional de prestadores y herramientas digitales, cada solicitud se gestiona en tiempo real, asegurando respuesta inmediata, trazabilidad y seguridad en todo momento. Porque tu camino no puede esperar, y nosotros tampoco.',
        },
      ],
    },
  },
  {
    title: 'Multiasistencia',
    icon: <MultiasistenciaIcon />,
    img: Multiasistencia,
    description:
      'La experiencia más completa: una asistencia flexible que combina diferentes servicios para adaptarse a las necesidades de cada cliente.',
    modal: {
      title: 'Una asistencia que se adapta a vos',
      description:
        'La Multiasistencia (Experiencia Full) integra distintos servicios de todas las familias de productos, creando soluciones personalizadas según el perfil y la necesidad de cada cliente.',
      content: [
        {
          title: 'Todo en un mismo lugar',
          description:
            'Podés combinar prestaciones de Movilidad, Hogar y Salud y Bienestar, formando una cobertura a medida para personas, familias o empresas. Incluye servicios técnicos, administrativos, legales y de bienestar, con un solo punto de contacto y gestión integral.',
        },
        {
          title: 'Flexibilidad y personalización',
          description:
            'Cada producto se diseña de forma modular y escalable, lo que permite ampliar o modificar las coberturas según las circunstancias o la evolución del usuario.',
        },
        {
          title: 'Experiencia 360°',
          description:
            'Con Multiasistencia, simplificamos la gestión de todos tus servicios en una sola plataforma, con atención humana, soporte digital y seguimiento continuo. Porque entendemos que no hay dos personas iguales, y por eso tu asistencia tampoco debería serlo.',
        },
      ],
    },
  },
  {
    title: 'Hogar',
    icon: <HogarIcon />,
    img: Hogar,
    description:
      'Cuidamos tu casa con servicios rápidos y confiables. Mantenimiento, emergencias y asistencia técnica cuando más la necesitás.',
    modal: {
      title: 'Tu hogar, siempre protegido',
      description:
        'La asistencia Hogar está pensada para resolver cualquier inconveniente doméstico, desde emergencias hasta mantenimiento preventivo. Nuestro objetivo es que tu casa funcione de manera segura, cómoda y sin interrupciones.',
      content: [
        {
          title: 'Soluciones a tu medida',
          description:
            'Incluye servicios de plomería, electricidad, gas, cerrajería, vidriería y climatización, junto con el mantenimiento y reparación de electrodomésticos. Además, incorporamos asistencia domiciliaria integral, ideal para resolver urgencias y prevenir futuros inconvenientes.',
        },
        {
          title: 'Mas allá de lo técnico',
          description:
            'También ofrecemos programas de tecnología y ciberseguridad, y asistencia para mascotas, porque entendemos que el hogar abarca mucho más que paredes: es un espacio de bienestar integral. En SOS Asistencia transformamos cada imprevisto en una solución rápida, segura y humana.',
        },
      ],
    },
  },
];
