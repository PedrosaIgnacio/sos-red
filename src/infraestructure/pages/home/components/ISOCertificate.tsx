import ISOCertificateIcon from '../../../../assets/iso-certificate.svg?react';

export const ISOCertificate = () => {
  return (
    <div
      className="w-full flex items-center justify-between rounded-4xl bg-[#FF4020] p-8 gap-8"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-white font-bold text-3xl 2xl:text-4xl">
          Certificamos normas IRAM ISO 9001:2015 desde hace +10 años
        </h1>
        <span className="text-white tracking-widest font-extralight text-sm 2xl:text-xl">
          Alcance: Coordinación del servicio de asistencia a personas, vehículos, hogar y embarcaciones, para compañías
          de seguros y terminales automotrices (asociados y clientes de éstas), contemplando los procesos necesarios
          para gestionar la solicitud del cliente hasta la asignación de la asistencia en todo el país y países
          limítrofes, desde las tres sedes de la empresa (Buenos Aires, Rosario y Córdoba).
        </span>
      </div>
      <div className="w-5xl 2xl:w-7xl h-fit">
        <ISOCertificateIcon className="w-full" />
      </div>
    </div>
  );
};
