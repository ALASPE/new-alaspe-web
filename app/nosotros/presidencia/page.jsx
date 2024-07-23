import ImgDesc from "@/app/components/ImgDesc";

export default function PresidentePage() {
  return (
    <>
      <div className="flex flex-col items-center mt-10 w-full px-2 md:px-4">
        <ImgDesc h={300} w={300} image="/presidente-foto.jpg" desc="Image">
          <h1 className="text-4xl font-bold text-black mb-10 text-center">
            Mensaje del Presidente
          </h1>
          <div className="flex flex-col gap-8 text-lg text-gray-700">
            <p className="text-justify">
              En primer lugar hacerles conocer, que he recibido honrosamente el
              encargo de presidir el Consejo de Administración durante el
              período 2019 y, a la vez debo comunicarles que nuestro primer
              compromiso es continuar apoyando a nuestros asociados, para
              contribuir con su desarrollo personal y el de sus familias.
              <br />
              <br />
              Estamos actualmente trabajando para mantener la eficiencia y
              pluralidad de nuestros servicios, con el soporte de la dedicación
              y esfuerzo de directivos, delegados, la gerencia general y su
              equipo administrativo.
              <br />
              <br />
              Asimismo nos hemos propuesto introducir innovaciones y buscar
              nuevas formas de cubrir las necesidades más apremiantes de
              nuestros asociados. Para esto nuestro consejo está abierto a
              recibir todas las iniciativas que puedan ayudarnos a cumplir con
              este objetivo.
              <br />
              <br />
              Invocamos a todos nuestros asociados para que acudan a su
              cooperativa, donde encontrarán siempre los servicios de crédito
              con intereses muy por debajo de la banca comercial. Nuestro
              Servicentro Alaspe actualmente abasteciendo también de gas natural
              y nuestros dos hostales en la ciudad de Lima con tarifas
              preferenciales para los asociados, particularmente aquellos que
              viajan de provincias a la capital por distintas razones.
              <br />
              <br />
              Manifestarles también que continuamos realizando sorteos gratuitos
              anualmente, a través de los cuales hemos otorgado a felices
              afortunados, departamentos, vehículos, artefactos eléctricos y
              miles de soles.
              <br />
              <br />
              Igualmente a disposición de todos ustedes está la Universidad Alas
              Peruanas, con filiales a nivel nacional, en la que pueden estudiar
              nuestros asociados con cuotas muy reducidas por ser nuestra
              cooperativa promotora de ese centro universitario. Estamos siempre
              a vuestro servicio y permítanme finalmente reiterarles mi cordial
              saludo institucional y deseo de bienestar para cada uno de ustedes
              y su familia.
              <br />
              <br />
            </p>
            <h3 className="text-[#175935] text-xl font-bold text-center">
              Mag. Martín Antonio Campos Parodi
              <br />
              Presidente del Consejo de Administración
            </h3>
          </div>
        </ImgDesc>
      </div>
    </>
  );
}
