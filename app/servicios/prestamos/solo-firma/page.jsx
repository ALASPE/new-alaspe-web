import Image from "next/image";
import NavBarItem from "@/app/components/NavbarItem";
import PdfButton from "@/app/components/PdfButton";
import PageComp from "@/app/components/PageComp";
import { FaCheckCircle } from "react-icons/fa";

const soloFirmaItems = [
  {
    href: "/pdf/solofirma/formato-ptmo-sfirma-virtual-cpmp.pdf",
    text: "Préstamos a Solo Firma - CAJA PENS. MILITAR POLICIAL",
  },
  {
    href: "/pdf/solofirma/formato-ptmo-sfirma-virtual-ep.pdf",
    text: "Préstamos a Solo Firma - EJERCITO",
  },
  {
    href: "/pdf/solofirma/formato-ptmo-sfirma-virtual-ap.pdf",
    text: "Préstamos a Solo Firma - MARINA",
  },
  {
    href: "/pdf/solofirma/formato-ptmo-sfirma-virtual-fap.pdf",
    text: "Préstamos a Solo Firma - FAP",
  },
  {
    href: "/pdf/solofirma/formato-ptmo-sfirma-virtual-oprefa.pdf",
    text: "Préstamos a Solo Firma - OPREFA",
  },
];

const requirements = [
  "Ser socio de la cooperativa",
  "Socio hábil (estar al día en tus aportaciones y tener descuento por planilla)",
  "Tener una antigüedad como socio no menor de 6 meses y haber aportado igual número de mensualidades consecutivas",
  "No tener saldo de préstamo anterior o haber pagado de tu préstamo vigente más del 50% de sus cuotas programadas por descuento",
  "No ser garante de socio moroso",
  "Presentar copia legible del DNI (la copia con firma y huella dactilar)",
  "Adjuntar última boleta de pago o haberes",
  "Llenar su autorización de descuentos por planilla",
  "Llenar su autorización de préstamo",
  "Tener una cuenta de banco a tu nombre",
  "Tener un correo electrónico",
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
    <PageComp title="Préstamos Solo Firma">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-5">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full">
          <Image
            src="/solofirma-prestamos.jpg"
            width={500}
            height={500}
            alt="Curso cooperativismo"
            className="rounded-lg shadow-lg mb-4"
          />
          <div className="mt-4 w-full">
            {soloFirmaItems.map((item, index) => (
              <PdfButton key={index} href={item.href} text={item.text} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold text-green-700 text-left">
            Requisitos
          </h2>
          <p className="text-md text-gray-700 mt-4 mb-4 text-justify">
            Son préstamos de hasta el 80% de tu aporte. <strong>No necesitas garante.</strong>
            Tasas de interés mensual de 1% Vigente a partir del 1/4/2012 (antes
            1.24%)
          </p>
          <ul className="list-none space-y-4 text-md text-gray-700 text-justify">
            {requirements.map((requirement, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="flex-1">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PageComp title="Otros préstamos">
          {navBarItems.map((item, index) => (
            <NavBarItem
              key={index}
              href={item.href}
              src={item.src}
              alt={item.alt}
              title={item.title}
            />
          ))}
      </PageComp>
    </PageComp>
  );
}
