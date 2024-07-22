import Image from "next/image";
import NavBarItem from "@/app/components/NavbarItem";
import Collapsible from "@/app/components/Desplegable";
import AudioPlayer from "@/app/components/AudioPlayer";

const Objetivos = [
  {
    title: "Objetivos",
    content: (
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>
          Constituir una organización socioeconómica de carácter social, que
          brinde servicios múltiples a sus socios y a la comunidad, con la
          finalidad de elevar las condiciones económicas, sociales y culturales
          de los mismos.
        </li>
        <li>
          Promover la doctrina y filosofía cooperativas así como la educación
          para el desarrollo y el hábito de ahorro en sus miembros.
        </li>
        <li>
          Otorgar en las mejores condiciones en forma directa o indirecta todo
          tipo de servicios a favor de sus socios y la comunidad.
        </li>
        <li>
          Fomentar y brindar educación cooperativa a sus socios y familiares de
          estos, a través de una constante y permanente capacitación.
        </li>
        <li>
          Implementar otros servicios o actividades económicas con fines de
          previsión y asistencia social y otras análogas en beneficio de sus
          socios.
        </li>
        <li>
          Implementar otros servicios accesorios y/o por acuerdo del
          Consejo de Administración o Asamblea General.
        </li>
        <li>Fomentar la creación de micro y pequeñas empresas entre sus socios.</li>
        <li>
          Propiciar la integración entre los socios de la cooperativa con el
          sector cooperativo y la comunidad en general.
        </li>
      </ul>
    ),
  },
];

const Medios = [
  {
    title: "Medios",
    content: (
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>Recibir aportes económicos de sus socios.</li>
        <li>Recibir aportes económicos de sus socios.</li>
        <li>
          Gestionar créditos, obtener apoyo financiero y de otro tipo, de parte
          de cualquier entidad bancaria, instituciones financieras o de
          cualquier tipo de institución de crédito del país o del extranjero,
          así como realizar inversiones productivas que le permite desarrollar a
          plenitud sus actividades y sus objetivos.
        </li>
        <li>
          Contar con reglamentos que regulen sus actividades asociativas y
          operativas.
        </li>
        <li>Brindar apoyo financiero a los asociados.</li>
        <li>
          Desarrollar y ejecutar programas de educación cooperativa para sus
          socios, familiares de estos y la comunidad en general
        </li>
        <li>
          Integrase económica y cooperativamente con otras organizaciones afines
          de agrado superior.
        </li>
        <li>
          Realizar actividad propia de otros tipos de cooperativas, siempre que
          sea accesorias o complementarios y compatibles a su objeto y que
          contribuyan al logro de los objetivos institucionales.
        </li>
        <li>
          Adquirir, conservar y vender acciones, participaciones, bonos y toda
          clase de valores que tengan cotización en bolsa, emitidas por
          sociedades establecidas dentro y fuera del país. Así mismo podrá ser
          socia de otras cooperativas, constituir sociedades, adquirir acciones
          y participaciones de sociedades que tenga por objeto brindar servicios
          a sus socios y a la comunidad, no siendo necesario en esta último caso
          que las acciones y participaciones se encuentren cotizadas en bolsas.
        </li>
        <li>
          La cooperativa podrá celebrar contratos de asociación en participación
          y cualquier otro tipo de contratos típicos o atípicos con las
          entidades del sector público o privado, siempre que sean necesarios o
          convenientes para la realización de sus fines, con sujeción a las
          condiciones que establezca la Asamblea General a propuesta del Concejo
          de Administración.
        </li>
        <li>
          Adquirir los bienes muebles e inmuebles necesarios para el desarrollo
          de sus actividades. Fomentar y practicar la integración cooperativa a
          nivel nacional e internacional.
        </li>
      </ul>
    ),
  },
];

const Himno = [
  {
    title: "Letra de himno alaspe",
    content: (
      <div className="text-center text-lg text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          HIMNO COOPERATIVA ALAS PERUANAS
        </h2>
        <p className="font-bold">I</p>
        <p>Liderazgo, educación y disciplina</p>
        <p>Es el lema de nuestra institución</p>
        <p>Cooperativa "Alas Peruanas"</p>
        <p>Fundada por Hombres de Honor</p>
        <br />
        <p className="font-bold">II</p>
        <p>Sobre la base de principios y valores</p>
        <p>Y un solo espíritu de hermandad</p>
        <p>Vamos unidos hacia el futuro</p>
        <p>Con transparencia, honestidad e igualdad</p>
        <br />
        <p className="font-bold">III</p>
        <p>Un sentimiento democrático une</p>
        <p>A Fuerza Aérea, Ejército y Marina</p>
        <p>Sin diferencia de clases o razas</p>
        <p>Para lograr nuestra común superación</p>
        <br />
        <p className="font-bold">IV</p>
        <p>Somos herencia milenaria del incario</p>
        <p>Cooperativa pionera del Perú</p>
        <p>Fundamento esencial de su grandeza</p>
        <p>El gran legado que por siempre nos dejó</p>
        <br />
        <p className="font-bold">V</p>
        <p>Cooperativa "Alas Peruanas"</p>
        <p>Que acepta retos de cualquier magnitud</p>
        <p>En la toma de decisiones</p>
        <p>Que aseguran el control del capital</p>
        <br />
        <p className="font-bold">VI</p>
        <p>Cooperativa "Alas Peruanas"</p>
        <p>Por brindarles a tus socios bienestar</p>
        <p>Más allá de lo que un día soñaron</p>
        <p>Tú eres lider, cooperativo del Perú</p>
        <br />
        <p>COOPERATIVA "ALAS PERUANAS"</p>
        <p>Orgullo de nuestra nación</p>
      </div>
    ),
  },
];

const navBarItems = [
  {
    href: "/servicios/prestamos/",
    src: "/prestamos-logo.webp",
    alt: "Prestamos",
    title: "Prestamos",
  },
  {
    href: "/servicios/merch",
    src: "/merch-logo.webp",
    alt: "Merchandising",
    title: "Merchandising",
  },
  {
    href: "/servicios/hospedaje",
    src: "/hospedaje-logo.webp",
    alt: "Hospedaje",
    title: "Hospedaje",
  },
  {
    href: "/servicios/curso-cooperativismo",
    src: "/curso-logo.webp",
    alt: "Curso cooperativismo",
    title: "Curso cooperativismo",
  },
];

export default function CooperativaPage() {
  return (
    <div className="flex flex-col items-center mt-10 w-full px-2 md:px-4">
      <h1 className="text-4xl font-bold text-black mb-10 text-center">
        Cooperativa de Servicios Multiples Alas Peruanas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-5">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full">
          <Image
            src="/cooperativa-logo.jpg"
            width={500}
            height={500}
            alt="Cooperativa Alaspe"
            className="rounded-lg shadow-lg mb-4"
          />
          <p className="text-lg text-gray-700 mb-4 text-justify">
            La Cooperativa de Servicios Múltiples Alas Peruanas fue fundada el
            14 de diciembre de 1968, por un grupo de entusiastas miembros de la
            Fuerza Aérea del Perú, somos una institución con 52 años de
            servicio, brindando solidaridad y ayuda mutua a sus más de 33,000
            asociados de nuestra Fuerza Armada a nivel nacional. La cooperativa
            se constituyó con el tipo de ahorro y crédito el 14 de diciembre de
            1968, fue reconocida oficialmente por Resolución Núm. 053-69
            Instituto Nacional de Cooperativas INCOOP, el 11 de marzo de 1969 e
            inscrita en Registros Públicos de Lima en el Tomo I, Asiento 1 Folio
            429, se adecuó al Decreto Legislativo Núm. 085, obteniendo su
            constancia de adecuación del INCOOP con fecha 7 de Julio de 1982,
            quedando inscrita en el Tomo II, Asiento 5 fojas 531 del Libro de
            Cooperativas de los Registros Públicos de Lima. En la Asamblea
            General Extraordinaria realizada el 18 de diciembre de 1999 se
            aprobó el cambio de tipo a Cooperativa de Servicios Especiales Alas
            Peruanas, aclarada posteriormente mediante la Asamblea General
            Extraordinaria celebrada el 18 de Marzo del 2000 e Inscrita en la
            Partida Registral Núm. 11020420, del Registro de Personas Jurídicas.
            Posteriormente, conforme a la modificatoria según el acta de la
            Asamblea Extraordinaria celebrada el 26 de Setiembre del año 2009 se
            cambio el tipo a Cooperativa de Servicios Múltiples Alas Peruanas,
            que es la que tiene vigencia hasta la fecha.
          </p>
          <h2 className="text-2xl font-bold text-black mb-4 text-left">
            Misión
          </h2>
          <p>
            Constituir una organización empresarial líder en el país, sustentada
            en la filosofía y doctrina cooperativista, con el propósito de
            lograr servicios de calidad para sus asociados y el desarrollo del
            movimiento cooperativo nacional.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 text-left">
            Visión
          </h2>
          <p>
            Brindar servicios de calidad a nuestros asociados, orientado a
            lograr un mejor nivel social, económico, cultural y empresarial.
          </p>
          <div className="mt-4 w-full">
            {Objetivos.map((section, index) => (
              <Collapsible
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}

            {Medios.map((section, index) => (
              <Collapsible
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-lg w-full">
          <AudioPlayer
            src="/himno_alaspe.mp3"
            title="Himno Cooperativa Alas Peruanas"
          />
          {Himno.map((section, index) => (
            <Collapsible
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-center mb-20">
        <h2 className="text-3xl font-bold text-black mb-8 mt-10 text-center">
          Otros préstamos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
          {navBarItems.map((item, index) => (
            <NavBarItem
              key={index}
              href={item.href}
              src={item.src}
              alt={item.alt}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
