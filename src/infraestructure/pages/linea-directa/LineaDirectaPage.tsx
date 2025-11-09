import { useMemo } from 'react';
import { CLIENTS } from './clients';

type Client = {
  name: string;
  phoneNumbers: string[];
};

const NUM_COLS = 4;

const splitIntoColumns = (arr: Client[], numCols: number): Client[][] => {
  const columns: Client[][] = Array.from({ length: numCols }, () => []);
  const perCol = Math.ceil(arr.length / numCols);

  for (let i = 0; i < arr.length; i++) {
    const colIndex = Math.floor(i / perCol);
    columns[colIndex].push(arr[i]);
  }

  return columns;
};

export const LineaDirectaPage = () => {
  const groupedClients = useMemo(() => splitIntoColumns(CLIENTS, NUM_COLS), []);

  return (
    <div className="flex flex-col gap-10 py-10 bg-[#EEE3D0]">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-[#FF4020] text-4xl text-center">Linea Directa por cliente</h2>
        <div className="text-center max-w-2xl font-normal">
          <span className="text-xl">
            Nuestros clientes son nuestros mejores referentes y conforman una extensa nómina que representa nuestro
            mayor orgullo ¡Haga clic en cualquiera de los números para llamar al instante!
          </span>
        </div>
      </div>
      <div className="flex justify-center gap-8 px-20">
        {groupedClients.map((group, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-8">
            {group.map((c, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <h3 className="text-xl text-[#FF4020] text-center">{c.name}</h3>
                {c.phoneNumbers.map((p: string, i: number) => {
                  const pNumber = p.split('').join();
                  const refNumber = `tel:${pNumber}`;
                  return (
                    <a href={refNumber} key={i} className="text-xl text-[#5C3FFF] cursor-pointer">
                      {p}
                    </a>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
