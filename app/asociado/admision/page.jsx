import PdfButton from "@/app/components/PdfButton";
import Image from "next/image";

const pdf = [
  {
    title: "Ficha de Ingreso",
    src: "/pdf/asociado/",
  },
  {
    title: "Ficha Familiar",
    src: "/pdf/asociado/",
  },
  {
    title: "Formato de Autorización de Descuento por Planilla - MARINA",
    src: "/pdf/asociado/",
  },
  {
    title: "Formato de Autorización de Descuento por Planilla - EJERCITO",
    src: "/pdf/asociado/",
  },
  {
    title: "Formato de Autorización de Descuento por Planilla - FAP",
    src: "/pdf/asociado/",
  },
  {
    title:
      "Formato de Autorización de Descuento por Planilla - CAJA DE PENSION MILITAR POLICIAL",
    src: "/pdf/asociado/",
  },
];

export default function AdmisionPage() {
  return (
    <>
      <div className="flex flex-col gap-10 p-2 mx-4 rounded-lg shadow-lg">
        <h2 className="flex justify-center text-xl lg:text-2xl font-bold mt-10 text-[#175935]">
          AFILIACIÓN - SOCIOS NUEVOS
        </h2>
        <div className="flex justify-center">
          <Image src="/admision.jpg" height="1000" width="800" alt="" />
        </div>
        <div className="flex flex-col gap-6 rounded-lg shadow-lg p-2">
          <h3 className="font-bold text-[#175935]">
            Requisitos para ser Socio
          </h3>
          <ul className="flex flex-col gap-6 pl-4">
            <li>
              Pueden ser socios de la cooperativa, todo personal que esté
              vinculado a las Fuerzas Armadas del Perú en calidad de servidores
              civiles o militares, activos, en retiro o cesantes con derecho a
              pensión del sector ministerio de defensa y de las bases,
              dependencias y unidades de la Fuerza Aérea del Perú, Marina de
              Guerra del Perú, y Ejército del Perú. Así mismo pueden ser socios
              los cónyuges y herederos del socio fallecido siempre y cuando
              gocen de dicha pensión incluso los que pertenecen a la Caja de
              Pensiones Militar Policial.
            </li>
            <li>Llenar una solicitud de ingreso (Dpto.de Educacion)</li>
            <li>Firmar la autorización de descuentos</li>
            <li>
              Adjuntar una copia de su CIP, DNI y boleta de pago (personal
              civil)
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 rounded-lg shadow-lg p-2">
          <h3 className="font-bold text-[#175935]">¿Qué son los Aportes?</h3>
          <p>
            Es el capital que usted va acumulando en forma mensual. La cuota
            mínima es de S/ 20 mensuales.
          </p>
        </div>
        <div className="flex flex-col gap-6 rounded-lg shadow-lg p-2">
          <h3 className="font-bold text-[#175935]">
            ¿Qué es la Previsión Social?
          </h3>
          <p>
            Es un seguro que cubre al socio por fallecimiento de familiares. La
            cuota mensual es de S/ 15.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-[#175935]">
            ¿Cuánto me descontarán mensualmente por Planilla?
          </h3>
          <div className="flex flex-col md:flex-row gap-24">
            <table className="m-3 text-sm lg:text-base border-black border shadow-lg">
              <thead className="bg-[#BDD287] border-black border">
                <tr className="">
                  <th className="border-black border w-72">Concepto</th>
                  <th className="border-black border w-36">Monto</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-black border">
                  <td className="border-black border pl-1">Aportes</td>
                  <td className="border-black border pl-1">S/ 20</td>
                </tr>
                <tr className="border-black border">
                  <td className="border-black border pl-1">Previsión Social</td>
                  <td className="border-black border pl-1">S/ 15</td>
                </tr>
                <tr className="border-black border">
                  <td className="border-black border pl-1">Inscripción</td>
                  <td className="border-black border pl-1">S/ 10</td>
                </tr>
                <tr className="border-black border">
                  <td className="border-black border pl-1">Total</td>
                  <td className="border-black border pl-1">S/ 45</td>
                </tr>
              </tbody>
            </table>

            <table className="m-3 text-sm lg:text-base border-black border shadow-lg">
              <thead className="bg-[#BDD287] border-black border">
                <tr>
                  <th className="border-black border w-72">Concepto</th>
                  <th className="border-black border w-36">Monto</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-black border">
                  <td className="border-black border pl-1">Aportes</td>
                  <td className="border-black border pl-1">S/ 20</td>
                </tr>
                <tr className="border-black border">
                  <td className="border-black border pl-1">Previsión Social</td>
                  <td className="border-black border pl-1">S/ 15</td>
                </tr>
                <tr className="border-black border">
                  <td className="border-black border pl-1">Total</td>
                  <td className="border-black border pl-1">S/ 35</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-4 shadow-lg rounded-lg max-w-2xl ">
          <h3 className="font-bold text-[#175935] text-lg">Documentos a presentar</h3>
          <div className="flex flex-col max-w-2xl text-sm m-4">
            {pdf.map((pdf, index) => (
              <PdfButton key={index} href={pdf.src} text={pdf.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
