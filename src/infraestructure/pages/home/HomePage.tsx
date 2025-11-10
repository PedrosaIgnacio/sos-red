import { AssistanceBanner } from './components/AssistanceBanner';
import { HomeSlider } from './components/HomeSlider';
import { SectionSeparator } from './components/SectionSeparator';
import Communication from '../../../assets/communcation.png';
import { InstitutionalVideo } from './components/InstitutionalVideo';
import { ISOCertificate } from './components/ISOCertificate';
import { HomeActionButtonsWrapper } from './components/HomeActionButtonsWrapper';
import { NewsCTA } from '../../components/NewsCTA';
import { AssistancesCTA } from '../../components/AsisstancesCTA';

export const HomePage = () => {
  return (
    <div className="w-full flex flex-col bg-[#EEE3D0]">
      <section className="bg-[#EEE3D0] w-full flex mb-10 2xl:my-10 px-28">
        <div className="grid grid-cols-1 w-full">
          <div className="h-[500px] 2xl:h-[775px] flex items-center">
            <HomeSlider />
          </div>
          <AssistanceBanner />
        </div>
      </section>
      <SectionSeparator />
      <div className="relative top-28 z-100">
        <AssistancesCTA />
      </div>
      <section className="bg-[#EEE3D0] w-full flex flex-col justify-center my-10 2xl:my-20 px-28 ">
        <div className="grid grid-cols-[1fr_380px] xl:grid-cols-[1fr_500px] 2xl:grid-cols-[1fr_550px] justify-center items-center mb-10 2xl:mb-20">
          <div className="relative -left-36 z-90 2xl:-left-84">
            <img
              src={Communication}
              alt={`communication-image`}
              data-aos="slide-right"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
              className={`w-full h-fit object-contain rounded-r-full shadow-[9.33px_9.33px_13.32px_0px_#000000BF]`}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            <h3 className="text-[#FF4020] font-bold text-5xl 2xl:text-7xl text-end tracking-wider leading-snug">
              Comunicate con nosotros de manera rápida y fácil.
            </h3>
          </div>
        </div>
        <HomeActionButtonsWrapper />
      </section>
      <div className="relative py-10 top-12 z-100">
        <NewsCTA />
      </div>
      <section className="bg-[#EEE3D0] w-full flex flex-col justify-center my-10 px-28">
        <InstitutionalVideo />
      </section>
      <section className="bg-[#EEE3D0] w-full flex flex-col justify-center my-10 px-28">
        <ISOCertificate />
      </section>
    </div>
  );
};
