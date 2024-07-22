import Image from "next/image";
import NavBarItem from "@/app/components/NavbarItem";

export default function HospedajePage() {
  return (
    <>
      <div className="flex flex-col items-center mt-10 w-full px-4">
        <h1 className="text-5xl font-bold text-black mb-10 text-center">
          Hospedaje Granada
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-5">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full">
            <Image
              src="/hospedaje-granada.jpg"
              width={500}
              height={500}
              alt="Hospedaje Granada"
              className="rounded-lg shadow-lg"
            />
            <div className="mt-6 text-center w-full">
              <p className="mt-4 text-lg text-gray-700 text-justify">
                El HOSPEDAJE GRANADA está ubicado muy próximo a la Plaza Mayor,
                Palacio de Gobierno, Congreso de la República, ministerios,
                iglesias, centros comerciales, lugares turísticos y culturales.
              </p>
              <ul className="mt-4 text-lg text-gray-700 text-justify">
                <li>
                  Dirección: <strong>Jr. Huancavelica Nº 323</strong> Lima –
                  Perú
                </li>
                <li>Reservaciones al: 947982713 (WhatsApp)</li>
                <li>Email: hospedajegranada@alaspe.pe</li>
              </ul>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.8722263877769!2d-77.03507398812401!3d-12.046574431947954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c98a43b0c3%3A0xc66859195a1af6c!2sJr.%20Huancavelica%20323!5e0!3m2!1ses-419!2spe!4v1721330857636!5m2!1ses-419!2spe"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg mt-10"
            ></iframe>
          </div>

          <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-bold text-black mb-4 text-left">
              Precios de habitaciones
            </h2>
            <table className="w-full text-left border-collapse mb-5">
              <thead>
                <tr style={{ backgroundColor: "#175935", color: "white" }}>
                  <th className="border-b-2 border-gray-200 px-4 py-2">
                    Habitaciones
                  </th>
                  <th className="border-b-2 border-gray-200 px-4 py-2">
                    Particulares
                  </th>
                  <th className="border-b-2 border-gray-200 px-4 py-2">Socios</th>
                  <th className="border-b-2 border-gray-200 px-4 py-2">
                    Servicios
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-[#209F63] even:bg-white text-black">
                  <td className="border-b border-gray-200 px-4 py-2">Matrimonial</td>
                  <td className="border-b border-gray-200 px-4 py-2">S/. 60</td>
                  <td className="border-b border-gray-200 px-4 py-2">S/. 50</td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    Cama de dos plazas, baño privado, servicio de TV con cable y Wifi.
                  </td>
                </tr>
                <tr className="odd:bg-[#209F63] even:bg-white text-black">
                  <td className="border-b border-gray-200 px-4 py-2">Doble</td>
                  <td className="border-b border-gray-200 px-4 py-2">S/. 90</td>
                  <td className="border-b border-gray-200 px-4 py-2">S/. 80</td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    Cama de dos plazas, cama de una plaza, baño privado, servicio de TV con cable y Wifi.
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-5 mt-5 bg-white p-6 rounded-lg shadow-lg">
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 text-left">
                  Nuestras Habitaciones
                </h2>
                <ul className="list-disc pl-5 text-lg text-gray-700">
                  <li>Habitaciones confortables</li>
                  <li>Tv. cable</li>
                  <li>Habitación matrimonial</li>
                  <li>Habitación doble</li>
                  <li>Baño privado, agua caliente y fría</li>
                  <li>Caja de seguridad</li>
                  <li>Teléfono propio en cada habitación</li>
                  <li>Wifi gratis</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 text-left">
                  Servicios
                </h2>
                <ul className="list-disc pl-5 text-lg text-gray-700">
                  <li>Hospedaje las 24 horas</li>
                  <li>Servicio de comedor</li>
                  <li>Sala de descanso</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start justify-start flex-col bg-white p-6 rounded-lg shadow-lg w-full mt-5">
              <div className="mb-5">
                <h2 className="text-2xl font-bold text-black mb-4 text-left">
                  Condiciones para Acogerse a la Tarifa Socio
                </h2>
                <ul className="list-disc pl-5 text-lg text-gray-700">
                  <li>El socio debe estar al día en sus aportaciones y previsión social</li>
                  <li>El socio no debe ser moroso</li>
                  <li>El beneficio es para el socio titular y conyuge</li>
                  <li>Deberá presentar su CIP y TIF respectivamente</li>
                  <li>Los precios incluyen IGV</li>
                  <li>Sujeto a disponibilidad</li>
                  <li>Para las reservas deberá cancelar por anticipado y no es reembolsable</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 text-left">Nota</h2>
                <ul className="list-disc pl-5 text-lg text-gray-700">
                  <li>Los socios de la FFAA. deberán presentar su CIP y DNI (y dejar copia de ambos documentos).</li>
                  <li>La cancelación del servicio será por adelantado</li>
                  <li>Nuestros precios incluyen IGV</li>
                  <li>El día hotelero termina a las 12:00 m.</li>
                  <li>Solo podrán ser socios los miembros del EP, FAP y AP.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mb-20">
          <h2 className="text-3xl font-bold text-black mb-8 mt-10 text-center">
            Otros Hospedajes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4">
            <NavBarItem
              href="/servicios/hospedaje/virreyes"
              src="/hospedaje-virreyes.jpg"
              alt="Hostal Virreyes"
              title="Hostal Virreyes"
            />
          </div>
        </div>
      </div>
    </>
  );
}
