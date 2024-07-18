import Image from "next/image";

export default function HospedajePage() {
  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-5xl font-bold text-black mb-10">
          Hospedaje Granada
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-40">
          <div className="flex flex-col items-center">
            <Image
              src="/hospedaje-granada.jpg"
              width={500}
              height={500}
              alt="Hospedaje Granada"
              className="rounded-lg shadow-lg"
            />
            <div className="mt-6 text-center">
              <p className="mt-4 text-lg text-gray-700 text-justify">
                El HOSPEDAJE GRANADA está ubicado muy próximo a la Plaza Mayor,
                Palacio de Gobierno, Congreso de la República, ministerios,
                iglesias, centros comerciales, lugares turísticos y culturales.
                <br />
                <br />
                La auténtica hospitalidad que le brindará nuestro personal
                altamente calificado, hará que usted se sienta la persona más
                complacida en su viaje de negocios o vacaciones.
              </p>
              <br />
              <br />
              <ul className="mt-4 text-lg text-gray-700 text-justify">
                <li>
                  Dirección: <strong>Jr. Huancavelica Nº 323</strong> Lima –
                  Perú
                </li>
                <li>Reservaciones al: 947982713 (WhatsApp)</li>
                <li>Email: hospedajegranada@alaspe.pe</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.8722263877769!2d-77.03507398812401!3d-12.046574431947954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c98a43b0c3%3A0xc66859195a1af6c!2sJr.%20Huancavelica%20323!5e0!3m2!1ses-419!2spe!4v1721330857636!5m2!1ses-419!2spe"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
            <div className="flex items-centes justify-center mt-10 flex-col">
              <h1 className="text-2xl font-bold text-black mb-10">
                Precios de habitaciones
              </h1>
              <table className="grid grid-cols-1 grid-rows-1 gap-10 max-w-6xl mx-auto">
                <thead>
                  <tr>
                    <th>Habitaciones</th>
                    <th>Particulares</th>
                    <th>Socios</th>
                    <th>Servicios</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Matrimonial</td>
                    <td>S/. 60</td>
                    <td>S/. 50</td>
                    <td>
                      Cama de dos plazas, baño privado, servicio de TV con cable
                      y Wifi.
                    </td>
                  </tr>
                  <tr>
                    <td>Doble</td>
                    <td>S/. 90</td>
                    <td>S/. 80</td>
                    <td>
                      Cama de dos plazas, cama de una plaza, baño privado,
                      servicio de TV con cable y Wifi.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
