import Image from "next/image";
import NavBarItem from "@/app/components/NavbarItem";
import PageComp from "@/app/components/PageComp";
import PdfButton from "@/app/components/PdfButton";
import { FaCheckCircle } from "react-icons/fa";

const campanaItems = [
  {
    href: "/pdf/campaña-escolar/formato-ptmo-camp-virtual-cpmp.pdf",
    text: "Préstamos a Campaña escolar - CAJA PENS. MILITAR POLICIAL",
  },
  {
    href: "/pdf/campaña-escolar/formato-ptmo-camp-virtual-ep.pdf",
    text: "Préstamos a Campaña escolar - EJERCITO",
  },
  {
    href: "/pdf/campaña-escolar/formato-ptmo-camp-virtual-ap.pdf",
    text: "Préstamos a Campaña escolar - MARINA",
  },
  {
    href: "/pdf/campaña-escolar/formato-ptmo-camp-virtual-fap.pdf",
    text: "Préstamos a Campaña escolar - FAP",
  },
  {
    href: "/pdf/campaña-escolar/formato-ptmo-camp-virtual-oprefa.pdf",
    text: "Préstamos a Campaña escolar - OPREFA",
  },
];

const requirements = [
  "Ser socio hábil.",
  "Acreditar capacidad de endeudamiento.",
  "No tener deuda de préstamo, aportes y previsión social .",
  "No ser moroso ni garante de socio(s) moroso(s).",
  "Copia del DNI con firma y huella dactilar.",
  "Dos últimas boletas de pago de haberes o pensión con firma y huella dactilar.",
  "Llenar los formatos indicados para el préstamo.",
  "Tener una cuenta de banco a tu nombre",
  "Tener un correo electrónico",
  "El trámite se podrá realizar en forma presencial y/o mediante el correo de crédito@alaspe.pe",
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
    href: "/servicios/prestamos/solo-firma",
    src: "/solofirma-prestamos.jpg",
    alt: "Solo Firma",
    title: "Solo Firma",
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
    <PageComp title="Préstamos Campaña escolar">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-5">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full">
          <Image
            src="/campaña-escolar-prestamos.jpeg"
            width={500}
            height={500}
            alt="Campaña escolar prestamos"
            className="rounded-lg mb-4"
          />
          <div className="mt-4 w-full">
            {campanaItems.map((item, index) => (
              <PdfButton key={index} href={item.href} text={item.text} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold text-green-700 text-left">
            Requisitos
          </h2>
          <p className="text-md text-gray-700 mt-4 mb-4 text-justify">
            Nuestra Cooperativa Alas Peruanas otorgará un PRÉSTAMO POR CAMPAÑA
            ESCOLAR a todos los socios que cuenten con capacidad de pago. El
            monto de crédito puede ser de S/ 1,000 o S/ 1,500, con una tasa de
            interés mensual de 2.0 % a rebatir. El plazo de recuperación del
            préstamo es de 12 o 14 meses.
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
      </PageComp>
  );
}
