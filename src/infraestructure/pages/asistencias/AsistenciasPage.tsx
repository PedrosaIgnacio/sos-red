import { useContext, useState } from 'react';
import { Assistances, type Assistance } from './data';
import ModalContext from '../../providers/modal';
import { AssistanceExtraDataPopup } from './components/AssistanceExtraDataPopup';

export const AsistenciasPage = () => {
  const [selectedAssistance, setSelectedAssistance] = useState<Assistance>(Assistances[0]);
  const { showModal } = useContext(ModalContext);
  const handleMouseEnter = (item: Assistance) => {
    setSelectedAssistance(item);
  };

  const handleClickViewMore = () => {
    showModal(<AssistanceExtraDataPopup assistance={selectedAssistance} />, selectedAssistance.modal.title);
  };

  return (
    <div className="flex px-28 2xl:px-30 flex-1 flex-col items-center gap-8 bg-[#EEE3D0]">
      <div className="w-full flex-1 flex py-10 gap-8 2xl:gap-16">
        <div className="flex flex-1 my-10">
          <div className="flex-1 grid grid-cols-5 2xl:grid-cols-6 gap-4">
            <div className="flex flex-col col-span-2 justify-center relative">
              <h1 className="text-[#FF4020] absolute top-0 font-bold text-7xl 2xl:text-9xl">Asistencias</h1>
              {Assistances.map(item => {
                const isCurrent = item.title === selectedAssistance?.title;
                return (
                  <button
                    key={item.title}
                    onMouseEnter={() => handleMouseEnter(item)}
                    className={`rounded-xl flex gap-8 items-center p-4 
                      ${isCurrent && 'bg-[#272725] text-white'}
                      `}
                  >
                    {item.icon}
                    <span className="font-bold text-xl">{item.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="col-span-3 2xl:col-span-4  bg-[#272725] rounded-3xl flex flex-col overflow-hidden shadow-xl">
              <div className={`w-full h-80 2xl:h-120  overflow-hidden transition-opacity duration-300`}>
                <img
                  key={selectedAssistance?.img}
                  src={selectedAssistance?.img}
                  alt={selectedAssistance?.title}
                  className="object-cover w-full h-full rounded-t-3xl animate-fadeIn"
                />
              </div>

              <div className="flex flex-col justify-between p-6 gap-4 flex-1">
                <span className="text-white text-xl 2xl:text-2xl leading-snug">{selectedAssistance.description}</span>
                <div className="flex justify-end">
                  <button
                    onClick={handleClickViewMore}
                    className="rounded-xl text-[#FF3B30] bg-white px-4 py-2 font-bold cursor-pointer 2xl:text-xl"
                  >
                    Ver más →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
