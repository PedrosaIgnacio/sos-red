import { useState, type JSX } from 'react';

type Headquarter = {
  title: string;
  address: string;
  phoneNumber?: string;
  email: string;
  map: JSX.Element;
};

const Headquarters: Headquarter[] = [
  {
    title: 'Sede Córdoba',
    address: 'Sagrada Familia 502',
    phoneNumber: '351 553 6000',
    email: 'recepcioncba@redsos.com.ar',
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.707886230566!2d-64.23620152358762!3d-31.394617174271822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298cf1ded922d%3A0xd81ed3dac1e4dc8c!2sAv.%20Sagrada%20Familia%20502%2C%20X5003FGL%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1761926108280!5m2!1ses!2sar"
        width="500"
        height="500"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    title: 'Sede Buenos Aires',
    address: 'Luna 49',
    email: 'recepcionbue@redsos.com.ar',
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.706000276953!2d-58.403281823481706!3d-34.63686917294235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb114945bca5%3A0x38e65d5c947bf926!2sLuna%2049%2C%20C1437%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1761926151176!5m2!1ses!2sar"
        width="500"
        height="500"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    title: 'Sede Buenos Aires',
    address: 'Av. Libertador 6350, Piso 4',
    email: 'recepcionbue@redsos.com.ar',
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.998614952086!2d-58.453304924602065!3d-34.55359045485204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb4321257489d%3A0x2a5636733e4c5e6e!2sAv.%20del%20Libertador%206350%20piso%204%2C%20C1428ART%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1762695718299!5m2!1ses!2sar"
        width="500"
        height="500"
        loading="lazy"
      ></iframe>
    ),
  },
  {
    title: 'Sede Rosario',
    address: 'Carballo 194, Piso 1',
    email: 'recepcionros@redsos.com.ar',
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.0604428158626!2d-60.66687762353876!3d-32.92300127360291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b654ae16bc21a1%3A0xadcddd71fe834ae!2sAv.%20Carballo%20194%2C%20S2013CTV%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1761926172509!5m2!1ses!2sar"
        width="500"
        height="500"
        loading="lazy"
      ></iframe>
    ),
  },
];

export const OurHeadquarters = () => {
  const [selectedHeadquarter, setSelectedHeadquarter] = useState<Headquarter>(Headquarters[0]);
  const handleSelectHeadquarter = (h: Headquarter) => {
    setSelectedHeadquarter(h);
  };
  return (
    <div className="w-full grid grid-cols-2 gap-32">
      <div className="flex flex-col gap-8 items-center">
        {Headquarters.map((h, i) => (
          <div
            key={`${i}-${h.title}`}
            className="flex flex-col text-lg 2xl:text-xl cursor-pointer hover:bg-gray-300 px-3 py-2 rounded-xl"
            onClick={() => handleSelectHeadquarter(h)}
          >
            <span className="font-bold">{h.title}</span>
            <span>{h.address}</span>
            <span>{h.phoneNumber}</span>
            <span>{h.email}</span>
          </div>
        ))}
      </div>
      <div className="h-full items-center flex">{selectedHeadquarter?.map}</div>
    </div>
  );
};
