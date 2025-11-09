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
    footer?: string;
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
      title: 'Cuidamos tu bienestar físico, emocional y social.',
      description:
        'Atendemos tu salud con soluciones inmediatas, digitales y presenciales. Desde una consulta médica hasta un acompañamiento integral, te brindamos la atención que necesitás sin importar dónde te encuentres.',
      // content: [
      //   {
      //     title: 'Asistencia médica y prevención',
      //     description:
      //       'Contamos con atención médica domiciliaria, telemedicina, orientación sanitaria y envío de profesionales para emergencias o consultas de rutina. También ofrecemos cobertura en protección en la vía pública, ideal para quienes se desplazan a diario y necesitan atención inmediata ante accidentes o urgencias.',
      //   },
      //   {
      //     title: 'Bienestar y estilo de vida',
      //     description:
      //       'Además de la atención médica, desarrollamos programas de Estilo de Vida (Wellness): asesoramiento nutricional, actividad física, salud mental y control de hábitos saludables. También brindamos servicios especiales para la tercera edad, promoviendo una vida activa, acompañada y segura.',
      //   },
      //   {
      //     title: 'Siempre cerca, siempre disponibles',
      //     description:
      //       'Con tecnología, empatía y una red nacional de especialistas, SOS Asistencia garantiza que tu bienestar esté siempre en buenas manos.',
      //   },
      // ],
      content: [
        {
          title: 'Atención médica online (telemedicina las 24 hs).',
          description: '',
        },
        {
          title: 'Envío de medicamentos y productos sanitarios a domicilio.',
          description: '',
        },
        {
          title: 'Envío de ambulancia o enfermera según necesidad.',
          description: '',
        },
        {
          title: 'Programas de bienestar y acompañamiento psicológico.',
          description: '',
        },
        {
          title: 'Asesoramiento nutricional personalizado.',
          description: '',
        },
        {
          title: 'Cobertura odontológica y descuentos en farmacia y ortopedia.',
          description: '',
        },
        {
          title: 'Segunda opinión médica y asistencia psicológica telefónica.',
          description: '',
        },
      ],
      footer: 'Tu salud, siempre cuidada con un sistema ágil, humano y cercano.',
    },
  },
  {
    title: 'Movilidad',
    icon: <MovilidadIcon />,
    img: Movilidad,
    description:
      'Asistencia integral para todo tipo de vehículos. Servicios de urgencia, mantenimiento y cobertura nacional las 24 hs, para que siempre sigas en movimiento.',
    modal: {
      title: 'Te acompañamos en cada kilómetro del camino',
      description:
        'Sabemos que tu movilidad no puede esperar. Contamos con una red nacional de grúas, mecánicos y servicios para resolver cualquier imprevisto con tu vehículo, moto o bici, estés donde estés.',
      // content: [
      //   {
      //     title: 'Cobertura completa para cada vehículo',
      //     description:
      //       'Incluye servicios de auxilio mecánico, remolques, asistencia en ruta, cambio de neumáticos, carga de batería o combustible, y acompañamiento ante siniestros. También abarca asistencia náutica, cobertura para flotas de camiones y soporte para movilidad sustentable (bicicletas y monopatines eléctricos), con atención especializada y soluciones técnicas certificadas.',
      //   },
      //   {
      //     title: 'Tecnología y experiencia',
      //     description:
      //       'Gracias a nuestra red nacional de prestadores y herramientas digitales, cada solicitud se gestiona en tiempo real, asegurando respuesta inmediata, trazabilidad y seguridad en todo momento. Porque tu camino no puede esperar, y nosotros tampoco.',
      //   },
      // ],
      content: [
        {
          title: 'Mecánica ligera, cambio de batería y lubricentro móvil.',
          description: '',
        },
        {
          title: 'Envío de grúa o traslado de vehículos (autos, motos y camiones).',
          description: '',
        },
        {
          title: 'Asistencia para bicicletas o monopatines ante roturas o pinchaduras.',
          description: '',
        },
        {
          title: 'Servicio de cerrajería automotriz y delivery de llaves.',
          description: '',
        },
        {
          title: 'Auto sustituto o remise en casos especiales.',
          description: '',
        },
        {
          title: 'Mecánico online y mesa de ayuda.',
          description: '',
        },
        {
          title: 'Asistencia legal y médica ante accidentes o robos.',
          description: '',
        },
      ],
      footer: 'Tu vehículo, siempre en movimiento con la red más completa del país.',
    },
  },
  {
    title: 'Multiasistencia',
    icon: <MultiasistenciaIcon />,
    img: Multiasistencia,
    description:
      'La experiencia más completa: una asistencia flexible que combina diferentes servicios para adaptarse a las necesidades de cada cliente.',
    modal: {
      title: 'Una red de soluciones para tu día a día.',
      description:
        'Pensada para simplificar tu rutina, nuestra Multiasistencia abarca desde emergencias domésticas hasta servicios de mantenimiento, tecnología o bienestar.',
      content: [
        {
          title: 'Reparaciones de plomería, electricidad, gas, cerrajería y vidriería.',
          description: '',
        },
        {
          title: 'Servicios adicionales: jardinería, piletas, mudanzas, fumigación y albañilería.',
          description: '',
        },
        {
          title: 'Asistencia tecnológica remota y asesoramiento en ciberseguridad.',
          description: '',
        },
        {
          title: 'Personal doméstico y soporte en tareas del hogar.',
          description: '',
        },
        {
          title: 'Videollamadas veterinarias, envío de alimentos y guardería de mascotas.',
          description: '',
        },
        {
          title: 'Concierge Wellness: asesoramiento nutricional, psicológico y de bienestar.',
          description: '',
        },
      ],
      footer: 'Porque siempre hay algo que resolver, y nosotros estamos siempre ahí, para ayudarte.',
      // content: [
      //   {
      //     title: 'Todo en un mismo lugar',
      //     description:
      //       'Podés combinar prestaciones de Movilidad, Hogar y Salud y Bienestar, formando una cobertura a medida para personas, familias o empresas. Incluye servicios técnicos, administrativos, legales y de bienestar, con un solo punto de contacto y gestión integral.',
      //   },
      //   {
      //     title: 'Flexibilidad y personalización',
      //     description:
      //       'Cada producto se diseña de forma modular y escalable, lo que permite ampliar o modificar las coberturas según las circunstancias o la evolución del usuario.',
      //   },
      //   {
      //     title: 'Experiencia 360°',
      //     description:
      //       'Con Multiasistencia, simplificamos la gestión de todos tus servicios en una sola plataforma, con atención humana, soporte digital y seguimiento continuo. Porque entendemos que no hay dos personas iguales, y por eso tu asistencia tampoco debería serlo.',
      //   },
      // ],
    },
  },
  {
    title: 'Hogar',
    icon: <HogarIcon />,
    img: Hogar,
    description:
      'Cuidamos tu casa con servicios rápidos y confiables. Mantenimiento, emergencias y asistencia técnica cuando más la necesitás.',
    modal: {
      title: 'Protección, mantenimiento y asistencia completa para tu casa.',
      description:
        'Transformamos la asistencia en una experiencia segura y confiable. Te conectamos con expertos para resolver urgencias, prevenir fallas y proteger lo que más querés: tu hogar y tu tranquilidad.',
      content: [
        {
          title: 'Reparaciones urgentes: plomería, electricidad, cerrajería, vidriería y gas.',
          description: '',
        },
        {
          title: 'Mantenimiento preventivo y reparación de electrodomésticos.',
          description: '',
        },
        {
          title: 'Puesta a punto de climatización: aires acondicionados y artefactos de gas.',
          description: '',
        },
        {
          title: 'Protección personal y legal ante robos o daños en el domicilio.',
          description: '',
        },
        {
          title: 'Asesoramiento profesional para reinserción laboral en caso de desempleo.',
          description: '',
        },
        {
          title: 'Asistencia médica y emocional para vos o tu familia ante emergencias domésticas.',
          description: '',
        },
      ],
      footer: 'Tu hogar siempre protegido, con soluciones confiables y profesionales a un llamado de distancia.',
      // content: [
      //   {
      //     title: 'Soluciones a tu medida',
      //     description:
      //       'Incluye servicios de plomería, electricidad, gas, cerrajería, vidriería y climatización, junto con el mantenimiento y reparación de electrodomésticos. Además, incorporamos asistencia domiciliaria integral, ideal para resolver urgencias y prevenir futuros inconvenientes.',
      //   },
      //   {
      //     title: 'Mas allá de lo técnico',
      //     description:
      //       'También ofrecemos programas de tecnología y ciberseguridad, y asistencia para mascotas, porque entendemos que el hogar abarca mucho más que paredes: es un espacio de bienestar integral. En SOS Asistencia transformamos cada imprevisto en una solución rápida, segura y humana.',
      //   },
      // ],
    },
  },
];
