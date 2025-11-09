import { ContactanosActionButtonsWrapper } from './components/ContactanosActionButtonWrapper';
import { OurHeadquarters } from './components/OurHeadquarters';

export const ContactanosPage = () => {
  return (
    <div className="w-full flex flex-col bg-[#EEE3D0]">
      <section className="w-full flex my-10 px-28 flex-col gap-8 items-center">
        <h1 className="text-[#FF4020] font-bold text-7xl">Ponete en contacto</h1>
        <ContactanosActionButtonsWrapper />
      </section>
      <section className="w-full flex my-10 px-28 flex-col gap-8 items-center">
        <h1 className="text-[#FF4020] font-bold text-7xl">Nuestras sedes</h1>
        <OurHeadquarters />
      </section>
    </div>
  );
};
