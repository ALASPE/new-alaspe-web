import Image from "next/image";
import NavBarItem from "@/app/components/NavbarItem";
import PdfButton from "@/app/components/PdfButton";
import { FaCheckCircle } from "react-icons/fa";

const soloFirmaItems = [
  {
    href: "/pdf/ordinario/formato-ptmo-ordi-virtual-cpmp.pdf",
    text: "Préstamos a Ordinario - CAJA PENS. MILITAR POLICIAL",
  },
  {
    href: "/pdf/ordinario/formato-ptmo-ordi-virtual-ep.pdf",
    text: "Préstamos a Ordinario - EJERCITO",
  },
  {
    href: "/pdf/ordinario/formato-ptmo-ordi-virtual-ap.pdf",
    text: "Préstamos a Ordinario - MARINA",
  },
  {
    href: "/pdf/ordinario/formato-ptmo-ordi-virtual-fap.pdf",
    text: "Préstamos a Ordinario - FAP",
  },
  {
    href: "/pdf/ordinario/formato-ptmo-ordi-virtual-oprefa.pdf",
    text: "Préstamos a Ordinario - OPREFA",
  },
];

const requirementsSocio = [
  "Ser socio de la cooperativa",
  "Tener una antigüedad como socio no menor a 6 meses y haber aportado por planilla igual número de mensualidades consecutivas",
  "No ser garante de socio moroso",
  "No tener saldo de préstamo o haber pagado más del 50% de tus cuotas programadas por descuento, no encontrarse moroso en aportaciones, previsión social y otros servicios; el cual deberá acreditarse con tu estado de cuenta.",
  "Llenar el pagaré y la solicitud a máquina de escribir o letra imprenta legible. En el pagaré no se consignarán fechas, montos, borrones ni enmendaduras y deberán mantenerse en perfecto estado; caso contrario serán rechazados (para su llenado ver modelo de formato o consulte con su delegado).",
  "Presentar DNI, CIP en original y copia de ambos (firmados y huella dactilar a un costado de cada copia)",
  "Presentar las 2 últimas liquidaciones de haberes, donde se demuestre liquidez para solicitar el préstamo y ser garante (firmados y con huella dactilar).",
  "Presentar último recibo de agua, luz o teléfono fijo en original y copia debidamente cancelados. La dirección que se consigna en la solicitud y pagaré deberán ser las mismas del recibo que se adjunta.",
  "El monto a otorgarse puede ser 3, 4 ó 5 veces de tu aporte, el cual estará sujeto a su liquidez.",
  "Estampar tu huella dactilar en la solicitud y pagaré al costado de tu firma.",
  "Tener una cuenta de banco a tu nombre.",
  "Tener correo electrónico.",
];

const requirementsGarante = [
  "Deberán ser socios de la cooperativa y tener una antigüedad no menor a 6 meses (personal contratado o CAS no puede ser garante). Adjuntarán copias de su CIP, DNI y las 2 últimas boletas de pago en la que se demuestre una suficiente liquidez (firmados y huella dactilar a un costado de la copia).",
  "Los garantes no deberán encontrarse morosos en aportaciones, previsión social, préstamos y otros servicios, ni ser garantes de socios morosos.",
  "Estampar tu huella dactilar en el pagaré al costado de su firma.",
];

const requirementsDelegado = [
  "Ser socio de la cooperativa",
  "Tener una antigüedad como socio no menor a 6 meses y haber aportado por planilla igual número de mensualidades consecutivas",
  "No ser garante de socio moroso",
  "No tener saldo de préstamo o haber pagado más del 50% de tus cuotas programadas por descuento, no encontrarse moroso en aportaciones, previsión social y otros servicios; el cual deberá acreditarse con tu estado de cuenta.",
  "Llenar el pagaré y la solicitud a máquina de escribir o letra imprenta legible. En el pagaré no se consignarán fechas, montos, borrones ni enmendaduras y deberán mantenerse en perfecto estado; caso contrario serán rechazados (para su llenado ver modelo de formato o consulte con su delegado).",
  "Presentar DNI, CIP en original y copia de ambos (firmados y huella dactilar a un costado de cada copia)",
  "Presentar las 2 últimas liquidaciones de haberes, donde se demuestre liquidez para solicitar el préstamo y ser garante (firmados y con huella dactilar).",
  "Presentar último recibo de agua, luz o teléfono fijo en original y copia debidamente cancelados. La dirección que se consigna en la solicitud y pagaré deberán ser las mismas del recibo que se adjunta.",
  "El monto a otorgarse puede ser 3, 4 ó 5 veces de tu aporte, el cual estará sujeto a su liquidez.",
  "Estampar tu huella dactilar en la solicitud y pagaré al costado de tu firma.",
  "Tener una cuenta de banco a tu nombre.",
  "Tener correo electrónico.",
];

const navBarItems = [
  {
    href: "/servicios/prestamos/ordinario",
    src: "/ordinario-prestamos.jpg",
    alt: "Ordinario",
    title: "Ordinario",
  },
  {
    href: "/servicios/prestamos/promocional",
    src: "/promocional-prestamos.jpg",
    alt: "Promocional",
    title: "Promocional",
  },
  {
    href: "/servicios/prestamos/campaña-escolar",
    src: "/campaña-escolar-prestamos.jpeg",
    alt: "Campaña escolar",
    title: "Campaña escolar",
  },
  {
    href: "/servicios/prestamos/campaña-fiestas-patrias",
    src: "/campaña-fiestas-patrias-prestamos.jpg",
    alt: "Campaña fiestas patrias",
    title: "Campaña fiestas patrias",
  },
];

export default function SoloFirmaPage() {
  return (
    <div className="flex flex-col items-center mt-10 w-full">
      <h1 className="text-4xl font-bold text-black mb-10">
        Préstamos Ordinario
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-5 px-4">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full">
          <Image
            src="/ordinario-prestamos.jpg"
            width={500}
            height={500}
            alt="Curso cooperativismo"
            className="rounded-lg shadow-lg mb-4"
          />
          <p className="text-lg text-gray-700 mb-4 text-center">
            Son préstamos a mediano y largo plazo, cuyo principal requisito es
            que deben ser garantizados por otros socios de la cooperativa según
            los montos a otorgarse. Es indispensable que el socio cumpla con los
            requisitos solicitados por la cooperativa.
          </p>
          <h2 className="text-2xl font-bold text-black mt-7 mb-4 text-left">
            Importante
          </h2>
          <ul className="list-none space-y-4 text-lg text-gray-700 text-justify">
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span className="flex-1">
                Todos los requisitos son de estricto cumplimiento. Caso
                contrario no se dará trámite a su expediente presentado. Sí del
                resultado de la evaluación y verificación de los documentos que
                forman parte del expediente, se detectase documentos falsos o
                adulterados la cooperativa procederá a informar a su comando así
                como a denunciar penalmente.
              </span>
            </li>
          </ul>
          <div className="mt-4 w-full">
            {soloFirmaItems.map((item, index) => (
              <PdfButton key={index} href={item.href} text={item.text} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold text-black mb-4 text-left">
            Requisitos del socio
          </h2>
          <ul className="list-none space-y-4 text-lg text-gray-700 text-justify">
            {requirementsSocio.map((requirement, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="flex-1">{requirement}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-black mt-7 mb-4 text-left">
            Requisitos de los garantes
          </h2>
          <ul className="list-none space-y-4 text-lg text-gray-700 text-justify">
            {requirementsGarante.map((requirement, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="flex-1">{requirement}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-black mt-7 mb-4 text-left">
            Requisitos del delegado o socio coordinador
          </h2>
          <ul className="list-none space-y-4 text-lg text-gray-700 text-justify">
            {requirementsDelegado.map((requirement, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="flex-1">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mb-20">
        <h2 className="text-3xl font-bold text-black mb-8 mt-10">
          Otros préstamos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full px-4">
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
