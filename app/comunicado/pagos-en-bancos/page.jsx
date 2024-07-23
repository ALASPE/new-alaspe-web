import Image from "next/image";
import NavBarItem from "@/app/components/NavbarItem";
import Collapsible from "@/app/components/Desplegable";

const requisitosData = [
  {
    title: "Realiza los siguientes pasos:",
    content: (
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>
          Deposita en la Cuenta BCP de la Cooperativa , con los siguientes
          datos:
          <ul>
            <li>Cuenta Corriente en Soles Nro. : 193-076-9440-0-20</li>
            <li>Código Interbancario (CCI) Nro. : 002-193-000769440020-16</li>
          </ul>
        </li>
        <li>Escanear el voucher del depósito</li>
        <li>
          Envíanos el voucher a nuestro correo ctasctes@alaspe.pe para
          actualizar tu Estado de Cuentas, consignando tus datos personales
          (nombre, CIP, DNI) y el concepto de pago (aporte, préstamos, previsión
          social, etc.)
        </li>
      </ul>
    ),
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

export default function PagosPage() {
  return (
    <div className="flex flex-col items-center mt-10 w-full px-2 md:px-4">
      <h1 className="text-2xl font-bold text-black mb-10 text-center">
        FACILIDADES DE PAGO
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-5">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full">
          <Image
            src="/pagos-bancos-logo.jpg"
            width={500}
            height={500}
            alt="Curso cooperativismo"
            className="rounded-lg mb-4"
          />
        </div>

        <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-lg w-full">
          <p className="text-lg text-gray-700 mt-4 mb-4 text-justify font-bold">
            No incurras en morosidad, ahora puedes realizar tus pagos de
            aportes, préstamos, previsión social y otros compromisos en nuestra
            cuenta del Banco de Crédito (BCP).
          </p>
          {requisitosData.map((section, index) => (
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
