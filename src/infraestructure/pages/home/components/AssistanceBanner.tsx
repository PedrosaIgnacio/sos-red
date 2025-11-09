import { useEffect, useState, type CSSProperties, type FC } from 'react';

type AssistanceInfoProps = {
  title: string;
  subtitle: string;
  color: CSSProperties['backgroundColor'];
};

const ASSISTANCE_INFO = [
  {
    title: '24hs',
    subtitle: 'a tu disposición',
    color: '#FF97BF',
  },
  {
    title: '+38 años',
    subtitle: 'de experiencia',
    color: '#008648',
  },
  {
    title: '+1 millon',
    subtitle: 'de personas asistidas en el último año',
    color: '#5D3FFF',
  },
  {
    title: '100%',
    subtitle: 'de garantía',
    color: '#333333',
  },
];

const AssistanceInfo: FC<AssistanceInfoProps> = ({ title, subtitle, color }) => {
  return (
    <div
      className={`flex flex-col rounded-4xl items-center justify-center w-xl 2xl:w-3xl h-full transition-all ease-in duration-500`}
      style={{ backgroundColor: color }}
    >
      <h2 className="text-white lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold">{title}</h2>
      <span className="text-white font-light lg:text-lg xl:text-xl 2xl:text-3xl text-center">{subtitle}</span>
    </div>
  );
};

export const AssistanceBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % ASSISTANCE_INFO.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [ASSISTANCE_INFO.length]);

  return (
    <div
      className="w-full flex items-center justify-between rounded-[2.56rem] bg-[#FF4020] p-14 2xl:p-20 gap-12"
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
        <h1 className="text-white font-bold lg:text-4xl xl:text-6xl 2xl:text-8xl">
          Somos personas asistiendo personas.
        </h1>
        <span className="text-white lg:text-xl xl:text-2xl 2xl:text-4xl tracking-widest font-extralight">
          Siempre listos para asistirte porque la verdadera perfección es estar presentes cuando más importa.
        </span>
      </div>

      <AssistanceInfo
        title={ASSISTANCE_INFO[index].title}
        subtitle={ASSISTANCE_INFO[index].subtitle}
        color={ASSISTANCE_INFO[index].color}
      />
    </div>
  );
};
