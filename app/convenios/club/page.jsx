import Image from "next/image";
import Slider from "./../../components/Slider.jsx";

export default function OpticaPage() {
  const images = ["/cancha-1.jpeg", "/cancha-2.jpeg", "/cancha-3.jpeg"];

  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row rounded-lg shadow-lg m-12 p-4 gap-8 justify-center">
          <div className="w-full lg:w-1/5 flex justify-center items-center">
            <Slider images={images} w="500" h="500" />
          </div>
          <div className="lg:w-4/5 flex flex-col gap-4 md:pt-12">
            <h3 className="text-[#175935] text-xl font-bold">
              CLUB LOS ÁNGELES
            </h3>
            <p>
              ¡Descubre el paraíso en el Centro Campestre Los Ángeles
              Chaclacayo! Experimenta la serenidad de la naturaleza y tomate un
              descanso. Para nuestros socios y sus familiares directos cuentan
              con acceso gratuito a las instalaciones del club desde las 9:30
              hasta las 17:00 hrs (Full day). Ofrecemos hospedaje, área de
              camping, piscinas, juegos para niños, áreas deportivas y más,
              reserva ahora y disfruta del beneficio que te ofrece la
              Cooperativa Alas Peruanas.
            </p>
            <p>
              Dirección: Av. Nicolas Ayllón 3235-3245 – Chaclacayo <br />
              Contáctanos: 948637895 / 948637889
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
