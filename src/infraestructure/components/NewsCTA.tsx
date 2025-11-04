import Image from '../../assets/SALUD.jpg';

export const NewsCTA = () => {
  return (
    <section
      className="flex flex-col md:flex-row rounded-2xl overflow-hidden bg-[#0E1117] text-white shadow-xl absolute bottom-0 right-5 left-5 mx-auto border border-gray-300"
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="md:w-1/3 relative">
        <img src={Image} alt="Novedades" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 from-[#3B82F6]/70 to-[#9333EA]/70 mix-blend-multiply"></div>
      </div>

      <div className="md:w-2/3 p-10 flex flex-col justify-center">
        <p className="text-blue-400 font-medium mb-2">Últimas novedades</p>
        <h2 className="text-4xl font-bold mb-4">Conocé lo más reciente de nuestro equipo</h2>
        <p className="text-gray-300 mb-8">
          Enterate de las últimas publicaciones, logros y actualizaciones que compartimos en nuestra cuenta de LinkedIn.
        </p>

        <a
          href="#novedades"
          className="inline-block bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg text-white font-semibold w-fit"
        >
          Ir a Novedades
        </a>
      </div>
    </section>
  );
};
