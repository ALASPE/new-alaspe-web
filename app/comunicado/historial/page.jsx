import Image from "next/image";
import NavBarItem from "@/app/components/NavbarItem";
import PdfButton from "@/app/components/PdfButton";

const historialItems = [
  {
    href: "/pdf/comunicados/2021_01.pdf",
    text: "Ampliación Entrega Panetones - 12/01/2021",
  },
  {
    href: "/pdf/comunicados/2021_02.pdf",
    text: "Atención Virtual - 29/01/2021",
  },
  {
    href: "/pdf/comunicados/2021_03.pdf",
    text: "Atención Virtual - 23/02/2021",
  },
  {
    href: "/pdf/comunicados/2021_04.pdf",
    text: "Incremento de Prevision Social - 16/04/2021",
  },
];

const historialItems2 = [
  {
    href: "/pdf/comunicados/2021_05.pdf",
    text: "Prevision Social - Trámites Subsidio - 29/05/2021",
  },
  {
    href: "/pdf/comunicados/2021_06.pdf",
    text: "Fumigación de Local - 26/07/2021",
  },
  {
    href: "/pdf/comunicados/2021_07.pdf",
    text: "Mant.Sist. y Capacitación Personal - 30/08/2021",
  },
];

const navBarItems = [
  {
    href: "/comunicado/historial",
    src: "/hospedaje-logo.webp",
    alt: "Historial",
    title: "Historial",
  },
  {
    href: "/comunicado/pagos-en-bancos",
    src: "/prestamos-logo.webp",
    alt: "Pagos en bancos",
    title: "Pagos en bancos",
  },
];

export default function HistorialPage() {
  return (
    <div className="flex flex-col items-center mt-10 w-full px-2 md:px-4">
      <h1 className="text-2xl font-bold text-black mb-10 text-center">
        Historial de Comunicados ALASPE
      </h1>
      <Image
        src="/historial-logo.png"
        width={500}
        height={500}
        alt="Curso cooperativismo"
        className="rounded-lg mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-5">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full">
          <div className="mt-4 w-full">
            {historialItems.map((item, index) => (
              <PdfButton key={index} href={item.href} text={item.text} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full">
          <div className="mt-4 w-full">
            {historialItems2.map((item, index) => (
              <PdfButton key={index} href={item.href} text={item.text} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mb-20">
        <h2 className="text-3xl font-bold text-black mb-8 mt-10 text-center">
          Otros comunicados
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
