import Image from "next/image";
import NavBarItem from "@/app/components/NavbarItem";
import PdfButton from "@/app/components/PdfButton";
import { FaCheckCircle } from "react-icons/fa";

const promocionalItems = [
  {
    href: "/pdf/ordinario/formato-ptmo-ordi-virtual-cpmp.pdf",
    text: "Préstamos a promocional - CAJA PENS. MILITAR POLICIAL",
  },
  {
    href: "/pdf/ordinario/formato-ptmo-ordi-virtual-ep.pdf",
    text: "Préstamos a promocional - EJERCITO",
  },
  {
    href: "/pdf/ordinario/formato-ptmo-ordi-virtual-ap.pdf",
    text: "Préstamos a promocional - MARINA",
  },
  {
    href: "/pdf/ordinario/formato-ptmo-ordi-virtual-fap.pdf",
    text: "Préstamos a promocional - FAP",
  },
  {
    href: "/pdf/ordinario/formato-ptmo-ordi-virtual-oprefa.pdf",
    text: "Préstamos a promocional - OPREFA",
  },
];

const requirementsSocio = [
  "Llenar la solicitud de ficha de ingreso",
  "Adjuntar copia fotostática del carné de identidad y el DNI (debidamente firmado en la copia).",
  "Llenar solicitud de préstamo adjuntado los siguientes documentos:",
  "Adjuntar las dos (2) últimas liquidaciones de haberes del socio prestatario con firma y huella para verificar la liquidez.",
  "Adjuntar copia del recibo cancelado de luz, agua o teléfono para verificar que los datos consignados coincidan con la solicitud y el pagaré.",
  "Adjuntar fotocopia del carné de identidad personal (CIP) y DNI del socio prestatario.",
  "Tener una cuenta de banco a tu nombre.",
  "Tener correo electrónico.",
  "Llenar un Pagaré",
  "No consignar fechas y otros datos en el pagaré (Ver muestra o consulte con el delegado)",
  "Datos personales y firma del socio solicitante",
  "Un garante (socio con más de seis meses de antigüedad en la cooperativa): datos personales y firma del garante.",
  "Adjuntar copia del carné de Identidad personal y DNI del garante debidamente firmado y las 2 últimas liquidaciones de pago (demostrando liquidez para ser garante).",
  "Para los préstamos solicitados en Lima el garante tendrá que estar presente en las oficinas."
];
const navBarItems = [
  {
    href: "/servicios/prestamos/solo-firma",
    src: "/solofirma-prestamos.jpg",
    alt: "Solo Firma",
    title: "Solo Firma",
  },
  {
    href: "/servicios/prestamos/ordinario",
    src: "/ordinario-prestamos.jpg",
    alt: "Ordinario",
    title: "Ordinario",
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
    <div className="flex flex-col items-center mt-10 w-full px-2 md:px-4">
      <h1 className="text-4xl font-bold text-black mb-10 text-center">
        Préstamos promocional
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-5">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full">
          <Image
            src="/promocional-prestamos.jpg"
            width={500}
            height={500}
            alt="Prestamo promocional"
            className="rounded-lg shadow-lg mb-4"
          />
          <p className="text-lg text-gray-700 mb-4 text-center">
            Ofrecemos préstamos para aquellas personas que desean inscribirse
            como socios en nuestra cooperativa. Estos préstamos son permanentes
            para los nuevos socios que ingresan a la cooperativa y se ofrecen
            según la campaña promocional de la cooperativa. Para acceder a este
            tipo de préstamo, es necesario que la persona cumpla con los
            requisitos para inscribirse como socio y gestionar el préstamo
            correspondiente. La tasa de interés mensual es del 2 %, vigente a
            partir del 1 de abril de 2015.
            <br/>
            <br/>
            Préstamo promocional hasta S/ 3000 para ser descontado en 24 meses a una cuota mensual estimada de S/ 160.
          </p>
          <h2 className="text-2xl font-bold text-black mt-7 mb-4 text-left">
            Nota
          </h2>
          <ul className="list-none space-y-4 text-lg text-gray-700 text-justify">
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span className="flex-1">
                Usted tendrá la posibilidad de reducir el número de meses a
                pagar desde el primer descuento, siempre que cuente con la
                liquidez suficiente. Todos los requisitos son de estricto
                cumplimiento. Caso contrario no se dará trámite a su expediente
                presentado. Si del resultado de la evaluación y verificación de
                los documentos que forman parte del expediente se detectase
                documentos falsos o adulterados, la cooperativa procederá a
                informar a su comando así como a denunciar penalmente.
              </span>
            </li>
          </ul>
          <table className="w-full text-left border-collapse mt-10 mb-5">
            <thead>
              <tr style={{ backgroundColor: "#175935", color: "white" }}>
                <th className="border-b-2 border-gray-200 px-4 py-2">
                  Descripción
                </th>
                <th className="border-b-2 border-gray-200 px-4 py-2">Monto</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-[#209F63] even:bg-white text-black">
                <td className="border-b border-gray-200 px-4 py-2">
                  Préstamo promocional
                </td>
                <td className="border-b border-gray-200 px-4 py-2">S/. 3000</td>
              </tr>
              <tr className="odd:bg-[#209F63] even:bg-white text-black">
                <td className="border-b border-gray-200 px-4 py-2">
                  (-) Aportes
                </td>
                <td className="border-b border-gray-200 px-4 py-2">(600)</td>
              </tr>
              <tr className="odd:bg-[#209F63] even:bg-white text-black">
                <td className="border-b border-gray-200 px-4 py-2">
                  (-) Desgravamen
                </td>
                <td className="border-b border-gray-200 px-4 py-2">(45)</td>
              </tr>
              <tr className="odd:bg-[#209F63] even:bg-white text-black">
                <td className="border-b border-gray-200 px-4 py-2">
                  Neto a recibir
                </td>
                <td className="border-b border-gray-200 px-4 py-2">S/. 2355</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 w-full">
            {promocionalItems.map((item, index) => (
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
    </div>
  );
}
