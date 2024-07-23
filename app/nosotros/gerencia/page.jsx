import ImgDesc from "@/app/components/ImgDesc";

export default function GerentePage() {
  return (
    <>
      <div className="flex flex-col items-center mt-10 w-full px-2 md:px-4">
        <ImgDesc h={300} w={300} image="/presidente-foto.jpg" desc="Image">
          <h1 className="text-4xl font-bold text-black mb-10 text-center">
            Mensaje del Gerente General
          </h1>
          <div className="flex flex-col gap-8 text-lg text-gray-700">
            <p className="text-justify">
              Señores socios de nuestra cooperativa, queremos por este medio
              brindarles un fuerte y caluroso saludo y agradecerles por seguir
              depositando su confianza en nuestra institución, coadyuvando para
              conseguir nuestro desarrollo empresarial.
              <br />
              <br />
              En estos 52 años de vida institucional, desde 1968, nuestra
              organización a atravesado por diferentes situaciones y realidades
              que le tocó vivir a nuestro país y a nuestros asociados, y dentro
              de las dificultades y problemáticas actuales, seguimos siendo
              líderes en el sector cooperativo y de prestación de servicios.
              <br />
              <br />
              Dentro de la gestión empresarial y los planes programados y
              ejecutados por la gerencia general, hemos obtenido el cumplimiento
              de los objetivos y metas trazadas. Esperamos seguir recibiendo su
              apoyo para mejorar cada día los resultados empresariales.
              <br />
              <br />
              Demostrando una de las ventajas competitivas que nos sustentan, y
              colocándonos a la vanguardia de las tecnologías de información de
              hoy, a través de los servicios de internet, ahora llegamos a
              vosotros para brindarles información de las actividades
              realizadas, de las empresas y negocios en los que incursionamos, y
              consultar por este medio, desde el lugar de su residencia y
              labores, la situación de los servicios que soliciten.
              <br />
              <br />
              Los invitamos a visitar la información de vuestro interés, y
              comunicarse con nosotros a través del correo electrónico, como
              medios adicionales a los que actualmente disponen.
              <br />
              <br />
              Afectuosa y cooperativamente.
              <br />
              <br />
            </p>
            <h3 className="text-[#175935] text-xl font-bold text-center">
              Mag. Martín Antonio Campos Parodi
              <br />
              Gerente General
            </h3>
          </div>
        </ImgDesc>
      </div>
    </>
  );
}
