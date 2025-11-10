import ISOCertificateIcon from '../../../../assets/iso-certificate.svg?react';
import PoliticaDeCalidad from '../../../../assets/politica-de-calidad.pdf';

export const ISOCertificate = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PoliticaDeCalidad;
    link.download = 'Certificado_ISO_9001_2015.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      onClick={handleDownload}
      className="w-full flex items-center justify-between rounded-4xl bg-[#FF4020] p-8 gap-8 cursor-pointer hover:opacity-90 transition"
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
        <h1 className="text-white font-bold text-3xl 2xl:text-4xl">Certificamos ISO 9001:2015 desde hace +10 años</h1>
        <span className="text-white tracking-widest font-extralight text-sm 2xl:text-xl">
          Alcance: Coordinación del servicio de asistencia a vehículos, personas, embarcaciones y hogares, para clientes
          de compañías de seguros y terminales automotrices, desde la toma del servicio hasta la asignación del
          prestador, en todo el país y países limítrofes.
        </span>
      </div>
      <div className="w-5xl 2xl:w-7xl h-fit">
        <ISOCertificateIcon className="w-full" />
      </div>
    </div>
  );
};
