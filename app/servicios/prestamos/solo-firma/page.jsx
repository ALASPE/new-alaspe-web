import Image from "next/image";
import NavBarItem from "@/app/components/NavbarItem";

export default function SoloFirmaPage() {
  return (
    <>
      <div className="flex flex-col items-center mt-10 w-full">
        <h1 className="text-5xl font-bold text-black mb-10">
          Prestamos Solo Firma
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-5 px-4">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full">
            <Image
              src="/solofirma-prestamos.jpg"
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
              <h2 className="text-2xl font-bold text-black mb-4">
                Formas de pago
              </h2>
              <div className="grid grid-rows-1 md:grid-cols-1 gap-10 w-full mb-5 mt-5 bg-white p-6 rounded-lg shadow-lg">
                <div>
                  
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">
                    Requisitos
                  </h2>
                  <ul className="list-disc pl-5 text-lg text-gray-700">
                    <li>Ser socio de la cooperativa</li>
                    <li>Socio hábil (estar al día en tus aportaciones y tener descuento por planilla)</li>
                    <li>Tener una antigüedad como socio no menor de 6 meses y haber aportado igual número de mensualidades consecutivas</li>
                    <li>No tener saldo de préstamo anterior o haber pagado de tu préstamo vigente más del 50% de sus cuotas programadas por descuento</li>
                    <li>No ser garante de socio moroso</li>
                    <li>Presentar copia legible del DNI (la copia con firma y huella dactilar)</li>
                    <li>Adjuntar última boleta de pago o haberes.</li>
                    <li>Llenar su autorización de descuentos por planilla</li>
                    <li>Llenar su autorización de préstamo</li>
                    <li>Tener una cuenta de banco a tu nombre</li>
                    <li>Tener un correo electrónico</li>
                  </ul>
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
