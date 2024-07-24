import Image from "next/image";
import NavBarItem from "@/app/components/NavbarItem";
import PdfButton from "@/app/components/PdfButton";
import PageComp from "@/app/components/PageComp";
import Collapsible from "@/app/components/Desplegable";
import { FaCheckCircle } from "react-icons/fa";

const ordinarioItems = [
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
  {
    title: "Requisitos del socio",
    content: (
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>Ser socio de la cooperativa</li>
        <li>
          Tener una antigüedad como socio no menor a 6 meses y haber aportado
          por planilla igual número de mensualidades consecutivas
        </li>
        <li>No ser garante de socio moroso</li>
        <li>
          No tener saldo de préstamo o haber pagado más del 50% de tus cuotas
          programadas por descuento, no encontrarse moroso en aportaciones,
          previsión social y otros servicios; el cual deberá acreditarse con tu
          estado de cuenta.
        </li>
        <li>
          Llenar el pagaré y la solicitud a máquina de escribir o letra imprenta
          legible. En el pagaré no se consignarán fechas, montos, borrones ni
          enmendaduras y deberán mantenerse en perfecto estado; caso contrario
          serán rechazados (para su llenado ver modelo de formato o consulte con
          su delegado).
        </li>
        <li>
          Presentar DNI, CIP en original y copia de ambos (firmados y huella
          dactilar a un costado de cada copia)
        </li>
        <li>
          Presentar las 2 últimas liquidaciones de haberes, donde se demuestre
          liquidez para solicitar el préstamo y ser garante (firmados y con
          huella dactilar).
        </li>
        <li>
          Presentar último recibo de agua, luz o teléfono fijo en original y
          copia debidamente cancelados. La dirección que se consigna en la
          solicitud y pagaré deberán ser las mismas del recibo que se adjunta.
        </li>
        <li>
          El monto a otorgarse puede ser 3, 4 ó 5 veces de tu aporte, el cual
          estará sujeto a su liquidez.
        </li>
        <li>
          Estampar tu huella dactilar en la solicitud y pagaré al costado de tu
          firma.
        </li>
        <li>Tener una cuenta de banco a tu nombre.</li>
        <li>Tener correo electrónico.</li>
      </ul>
    ),
  },
];

const requirementsGarante = [
  {
    title: "Requisitos del garante",
    content: (
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>Ser socio de la cooperativa</li>
        <li>
          Deberán ser socios de la cooperativa y tener una antigüedad no menor a
          6 meses (personal contratado o CAS no puede ser garante). Adjuntarán
          copias de su CIP, DNI y las 2 últimas boletas de pago en la que se
          demuestre una suficiente liquidez (firmados y huella dactilar a un
          costado de la copia).
        </li>
        <li>
          Los garantes no deberán encontrarse morosos en aportaciones, previsión
          social, préstamos y otros servicios, ni ser garantes de socios
          morosos.
        </li>
        <li>
          Estampar tu huella dactilar en el pagaré al costado de su firma.
        </li>
      </ul>
    ),
  },
];

const requirementsDelegado = [
  {
    title: "Requisitos del delegado",
    content: (
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>Ser socio de la cooperativa</li>
        <li>
          Tener una antigüedad como socio no menor a 6 meses y haber aportado
          por planilla igual número de mensualidades consecutivas
        </li>
        <li>No ser garante de socio moroso</li>
        <li>
          No tener saldo de préstamo o haber pagado más del 50% de tus cuotas
          programadas por descuento, no encontrarse moroso en aportaciones,
          previsión social y otros servicios; el cual deberá acreditarse con tu
          estado de cuenta.
        </li>
        <li>
          Llenar el pagaré y la solicitud a máquina de escribir o letra imprenta
          legible. En el pagaré no se consignarán fechas, montos, borrones ni
          enmendaduras y deberán mantenerse en perfecto estado; caso contrario
          serán rechazados (para su llenado ver modelo de formato o consulte con
          su delegado).
        </li>
        <li>
          Presentar DNI, CIP en original y copia de ambos (firmados y huella
          dactilar a un costado de cada copia)
        </li>
        <li>
          Presentar las 2 últimas liquidaciones de haberes, donde se demuestre
          liquidez para solicitar el préstamo y ser garante (firmados y con
          huella dactilar).
        </li>
        <li>
          Presentar último recibo de agua, luz o teléfono fijo en original y
          copia debidamente cancelados. La dirección que se consigna en la
          solicitud y pagaré deberán ser las mismas del recibo que se adjunta.
        </li>
        <li>
          El monto a otorgarse puede ser 3, 4 ó 5 veces de tu aporte, el cual
          estará sujeto a su liquidez.
        </li>
        <li>
          Estampar tu huella dactilar en la solicitud y pagaré al costado de tu
          firma.
        </li>
        <li>Tener una cuenta de banco a tu nombre.</li>
        <li>Tener correo electrónico.</li>
      </ul>
    ),
  },
];

const navBarItems = [
  {
    href: "/servicios/prestamos/solo-firma",
    src: "/solofirma-prestamos.jpg",
    alt: "Solo Firma",
    title: "Solo Firma",
  },
  {
    href: "/servicios/prestamos/promocional",
    src: "/promocional-prestamos.jpg",
    alt: "Promocional",
    title: "Promocional",
  },
  {
    href: "/servicios/prestamos/campana-escolar",
    src: "/campaña-escolar-prestamos.jpeg",
    alt: "Campaña escolar",
    title: "Campaña escolar",
  },
  {
    href: "/servicios/prestamos/campana-fiestas-patrias",
    src: "/campaña-fiestas-patrias-prestamos.jpg",
    alt: "Campaña fiestas patrias",
    title: "Campaña fiestas patrias",
  },
];

export default function SoloFirmaPage() {
  return (
    <PageComp title="Préstamos Ordinario">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-5">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full">
          <Image
            src="/ordinario-prestamos.jpg"
            width={500}
            height={500}
            alt="Prestamo ordinario"
            className="rounded-lg shadow-lg mb-4"
          />
          <p className="text-md text-gray-700 mt-4 text-justify">
            Son préstamos a mediano y largo plazo, cuyo principal requisito es
            que deben ser garantizados por otros socios de la cooperativa según
            los montos a otorgarse. Es indispensable que el socio cumpla con los
            requisitos solicitados por la cooperativa.
          </p>
          <div className="mt-4 w-full">
            {ordinarioItems.map((item, index) => (
              <PdfButton key={index} href={item.href} text={item.text} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold text-green-700 mt-7 mb-4 text-left">
            Importante
          </h2>
          <ul className="list-none space-y-4 text-md text-gray-700 text-justify">
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
          <table className="w-full text-left border-collapse mt-10 mb-5">
            <thead>
              <tr style={{ backgroundColor: "#175935", color: "white" }}>
                <th className="border-b-2 border-gray-200 px-4 py-2">
                  Monto en soles
                </th>
                <th className="border-b-2 border-gray-200 px-4 py-2">
                  Número de garantes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-[#209F63] even:bg-white text-black">
                <td className="border-b border-gray-200 px-4 py-2">
                  Hasta S/. 3000
                </td>
                <td className="border-b border-gray-200 px-4 py-2">
                  1 garante
                </td>
              </tr>
              <tr className="odd:bg-[#209F63] even:bg-white text-black">
                <td className="border-b border-gray-200 px-4 py-2">
                  De S/. 3001 a S/. 6000
                </td>
                <td className="border-b border-gray-200 px-4 py-2">
                  2 garantes
                </td>
              </tr>
              <tr className="odd:bg-[#209F63] even:bg-white text-black">
                <td className="border-b border-gray-200 px-4 py-2">
                  De S/. 6001 a más
                </td>
                <td className="border-b border-gray-200 px-4 py-2">
                  3 garantes
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 w-full">
            {requirementsSocio.map((section, index) => (
              <Collapsible
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}
            {requirementsGarante.map((section, index) => (
              <Collapsible
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}
            {requirementsDelegado.map((section, index) => (
              <Collapsible
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mb-20">
        <h2 className="text-3xl font-bold text-black mb-8 mt-10 text-center">
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
    </PageComp>
  );
}
