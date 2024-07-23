import Image from "next/image";

export default function GerentePage() {
  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full md:w-1/3 flex-col flex justify-center md:justify-start items-center mt-10">
          <Image
            src="/presidente-foto.jpg"
            width={400}
            height={400}
            alt="Presidente de la Cooperativa Alaspe"
            className="rounded-lg shadow-lg mb-4 md:mb-0"
          />
          <h3 className="text-center mt-5 bg-green-700 text-white text-xl font-bold p-3 rounded-lg">
            Mag. Martín Antonio Campos Parodi
            <br />
            Gerente General
          </h3>
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold text-green-800 mb-6 text-center md:text-left">
            Mensaje del Gerente General
          </h1>
          <p className="text-md leading-relaxed text-gray-800">
            Señores socios de nuestra cooperativa, queremos por este medio
            brindarles un fuerte y caluroso saludo y agradecerles por seguir
            depositando su confianza en nuestra institución, coadyuvando para
            conseguir nuestro desarrollo empresarial.
            <br />
            <br />
            En estos 52 años de vida institucional, desde 1968, nuestra
            organización a atravesado por diferentes situaciones y realidades
            que le tocó vivir a nuestro país y a nuestros asociados, y dentro de
            las dificultades y problemáticas actuales, seguimos siendo líderes
            en el sector cooperativo y de prestación de servicios.
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
            vosotros para brindarles información de las actividades realizadas,
            de las empresas y negocios en los que incursionamos, y consultar por
            este medio, desde el lugar de su residencia y labores, la situación
            de los servicios que soliciten.
            <br />
            <br />
            Los invitamos a visitar la información de vuestro interés, y
            comunicarse con nosotros a través del correo electrónico, como
            medios adicionales a los que actualmente disponen.
            <br />
            <br />
            Afectuosa y cooperativamente.
          </p>
        </div>
      </div>
    </div>
  );
}
