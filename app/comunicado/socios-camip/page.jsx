import Image from "next/image";
import NavBarItem from "@/app/components/NavbarItem";
import PdfButton from "@/app/components/PdfButton";
import Collapsible from "@/app/components/Desplegable";

const camipItems = [
  {
    href: "/pdf/comunicados/autor_desc-cpmp.pdf",
    text: "Carta Declaratoria de Beneficiarios",
  },
];

const requisitosData = [
  {
    title: "Realiza los siguientes pasos:",
    content: (
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>
          Solicita el formato de autorización de descuento para CAMIP (en la
          cooperativa, a tu delegado o descargalo en el boton de PDF)
        </li>
        <li>
          Llena correctamente los datos solicitados en la autorización (se
          recomienda utilizar lapicero azul), no te olvides que debes firmar y
          poner tu huella dactilar
        </li>
        <li>
          Adjunta una copia simple del DNI, firmando y registrando tambien tu
          huella dactilar
        </li>
        <li>
          Envíanos la Autorización y la copia del DNI a las Oficinas de tu
          Cooperativa
        </li>
      </ul>
    ),
  },
];

const navBarItems = [
  {
    href:"/comunicado/historial",
    src:"/hospedaje-logo.webp",
    alt:"Historial",
    title:"Historial",
  },
  {
    href:"/comunicado/pagos-en-bancos",
    src:"/prestamos-logo.webp",
    alt:"Pagos en bancos",
    title:"Pagos en bancos",
  },
];

export default function SocioCAMIPPage() {
  return (
    <div className="flex flex-col items-center mt-10 w-full px-2 md:px-4">
      <h1 className="text-2xl font-bold text-black mb-10 text-center">
        SOCIOS DE LA CAJA DE PENSIONES MILITAR POLICIAL (CAMIP)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-5">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full">
          <Image
            src="/camip-logo.jpg"
            width={500}
            height={500}
            alt="Curso cooperativismo"
            className="rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700 mt-4 mb-4 text-justify">
            Si ya pasaste al Retiro y ahora eres pensionista de la Caja de
            Pensiones Militar Policial (CAMIP), para continuar con tus
            descuentos de planilla, debes firmar una nueva Autorización de
            Descuentos (Formato CAMIP) y presentarla en tu cooperativa.
          </p>
          <div className="mt-4 w-full">
            {camipItems.map((item, index) => (
              <PdfButton key={index} href={item.href} text={item.text} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-lg w-full">
          {requisitosData.map((section, index) => (
            <Collapsible
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
          <p className="text-lg text-gray-700 mt-4 mb-4 text-justify font-bold">
            Todos los meses nosotros trámitamos ante CAMIP las nuevas
            autorizaciones de descuentos presentadas por nuestros socios
          </p>
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
