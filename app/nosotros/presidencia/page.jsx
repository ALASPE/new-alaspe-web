import Image from "next/image";

export default function PresidentePage() {
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
            Presidente del Consejo de Administración
          </h3>
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold text-green-800 mb-6 text-center md:text-left">
            Mensaje del Presidente
          </h1>
          <p className="text-md leading-relaxed text-gray-800">
            En primer lugar hacerles conocer, que he recibido honrosamente el
            encargo de presidir el Consejo de Administración durante el período
            2019 y, a la vez debo comunicarles que nuestro primer compromiso es
            continuar apoyando a nuestros asociados, para contribuir con su
            desarrollo personal y el de sus familias.
            <br />
            <br />
            Estamos actualmente trabajando para mantener la eficiencia y
            pluralidad de nuestros servicios, con el soporte de la dedicación y
            esfuerzo de directivos, delegados, la gerencia general y su equipo
            administrativo.
            <br />
            <br />
            Asimismo nos hemos propuesto introducir innovaciones y buscar nuevas
            formas de cubrir las necesidades más apremiantes de nuestros
            asociados. Para esto nuestro consejo está abierto a recibir todas
            las iniciativas que puedan ayudarnos a cumplir con este objetivo.
            <br />
            <br />
            Invocamos a todos nuestros asociados para que acudan a su
            cooperativa, donde encontrarán siempre los servicios de crédito con
            intereses muy por debajo de la banca comercial. Nuestro Servicentro
            Alaspe actualmente abasteciendo también de gas natural y nuestros
            dos hostales en la ciudad de Lima con tarifas preferenciales para
            los asociados, particularmente aquellos que viajan de provincias a
            la capital por distintas razones.
            <br />
            <br />
            Manifestarles también que continuamos realizando sorteos gratuitos
            anualmente, a través de los cuales hemos otorgado a felices
            afortunados, departamentos, vehículos, artefactos eléctricos y miles
            de soles.
            <br />
            <br />
            Igualmente a disposición de todos ustedes está la Universidad Alas
            Peruanas, con filiales a nivel nacional, en la que pueden estudiar
            nuestros asociados con cuotas muy reducidas por ser nuestra
            cooperativa promotora de ese centro universitario. Estamos siempre a
            vuestro servicio y permítanme finalmente reiterarles mi cordial
            saludo institucional y deseo de bienestar para cada uno de ustedes y
            su familia.
          </p>
        </div>
      </div>
    </div>
  );
}
