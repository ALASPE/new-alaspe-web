import Image from "next/image";
import NavBarItem from "@/app/components/NavbarItem";

export default function CursoPage() {
  return (
    <>
      <div className="flex flex-col items-center mt-10 w-full">
        <h1 className="text-5xl font-bold text-black mb-10">
          Curso de cooperativismo
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-5 px-4">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full">
            <Image
              src="/curso-cooperativismo.jpg"
              width={500}
              height={500}
              alt="Curso cooperativismo"
              className="rounded-lg shadow-lg"
            />
            <div className="mt-6 text-center w-full">
              <p className="mt-4 text-lg text-gray-700 text-justify">
                Con la finalidad de divulgar la doctrina del cooperativismo y
                llegar a todos los lugares del país; desde hace varios años
                nuestra cooperativa viene impartiendo el curso de Cooperativismo
                a Distancia.
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.443702878381!2d-77.05082881480416!3d-12.08174751200259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8fa127ff8a1%3A0xb8de607466690ea4!2sCooperativa%20de%20Servicios%20M%C3%BAltiples%20Alas%20Peruanas!5e0!3m2!1ses-419!2spe!4v1721363138885!5m2!1ses-419!2spe"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg mt-5"
            ></iframe>
          </div>

          <div className="flex items-center justify-top flex-col bg-white p-6 rounded-lg shadow-lg w-full">
            <div className="flex items-center justify-top flex-col bg-white p-6 rounded-lg shadow-lg w-full mt-5">
              <h2 className="text-2xl font-bold text-black mb-4">
                Formas de pago
              </h2>

              <table className="w-full text-left border-collapse mb-5">
                <thead>
                  <tr style={{ backgroundColor: "#175935", color: "white" }}>
                    <th className="border-b-2 border-gray-200 px-4 py-2">
                      Categoria
                    </th>
                    <th className="border-b-2 border-gray-200 px-4 py-2">
                      Costo
                    </th>
                    <th className="border-b-2 border-gray-200 px-4 py-2">
                      Modalidad
                    </th>
                    <th className="border-b-2 border-gray-200 px-4 py-2">
                      Nro. de cuotas
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-[#209F63] even:bg-white text-black">
                    <td className="border-b border-gray-200 px-4 py-2">
                      Socios
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      S/. 45
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      Al crédito
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      3 cuotas de S/. 15
                    </td>
                  </tr>
                  <tr className="odd:bg-[#209F63] even:bg-white text-black">
                    <td className="border-b border-gray-200 px-4 py-2">
                      Particulares
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      S/. 100
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      Al contado
                    </td>
                    <td className="border-b border-gray-200 px-4 py-2">
                      Un solo pago
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-10 w-full mb-5 mt-5 bg-white p-6 rounded-lg shadow-lg">
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">
                    Requisitos
                  </h2>
                  <ul className="list-disc pl-5 text-lg text-gray-700">
                    <li>Ficha de inscripción</li>
                    <li>Estado de cuentas corrientes (socios)</li>
                    <li>DNI (Particulares)</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">
                    Informes y matricula
                  </h2>
                  <ul className="list-disc pl-5 text-lg text-gray-700">
                    <li>Cooperativa de Servicios Múltiples Alas Peruanas</li>
                    <li>Departamento de Educación</li>
                    <li>Sra. Jesús Paredes – Celular 989142051</li>
                    <li>Email educacion@alaspe.pe</li>
                    <li>Jr. Pachacutec Nº 2052 – Jesús María</li>
                    <li>Teléfonos : 471 5207 / 471-6022 / 471-7135 / Fax: 471-3364. (Anexos 105, 106)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mb-20">
          <h2 className="text-3xl font-bold text-black mb-8 mt-10">
            Otros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full px-4">
            <NavBarItem
              href="/servicios/prestamos"
              src="/prestamos-logo.webp"
              alt="Prestamos"
              title="Prestamos"
            />
            <NavBarItem
              href="/servicios/prevision-social"
              src="/prevision-logo.webp"
              alt="Prevision"
              title="Previsión social"
            />
            <NavBarItem
              href="/servicios/hospedaje"
              src="/hospedaje-logo.webp"
              alt="Hospedaje"
              title="Hospedaje"
            />
            <NavBarItem
              href="/servicios/merch"
              src="/merch-logo.webp"
              alt="Merch"
              title="Merchandising"
            />
          </div>
        </div>
      </div>
    </>
  );
}
