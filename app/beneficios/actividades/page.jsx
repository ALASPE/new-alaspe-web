import Image from "next/image";
import Link from "next/link";

export default function ActividadesPage() {
  return (
    <>
      <div>
        <h2 className="flex justify-center mt-10 text-2xl font-bold">
          ACTIVIDADES Y CURSOS - 2020
        </h2>
        <div className="flex flex-col lg:grid grid-cols-2 gap-6 justify-center items-center rounded-lg shadow-lg m-4 p-5">
          <div className="rounded-lg shadow-lg p-5">
            <Image
              src="/act-banner.jpg"
              height={700}
              width={800}
              alt="Banner Sorteo"
            />
          </div>
          <div className="flex flex-col gap-4 justify-between rounded-lg shadow-lg h-full p-8">
            <h3 className="flex justify-center bg-blue-600 text-white font-bold text-sm rounded-sm py-2">
              SORTEO GRATUITO ALASPE - 2020
            </h3>
            <p>
              El 18 de diciembre 2020 a las 15:00 hrs se llevó a caba nuestro
              sorteo alaspe 2020, debido a las situación de pandemia, el sorteo
              se realizó en forma virtual, en presencia de un notario público,
              el presidente del comité de vigilancia y delegados representantes
              de cada fuerza armada.
            </p>
            <p>
              Felicitamos a nuestros
              <span className="font-bold"> 730 ganadores de S/ 300 </span> a
              nivel nacional.
            </p>
            <div className="flex flex-col">
              <Link href="https://onlive.pe/cooperativa-alas-peruanas/">
                Trasmisión del sorteo
              </Link>
              <Link href="">Relación de ganadores</Link>
              <Link href="">Formato para cobrar el premio</Link>
            </div>
            <div>
              <p className="bg-[#FFFF00] p-1 font-bold">
                Los premios se depositarán en la cuenta bancaria del socio a
                partir del 15 de Enero del 2021. Inicia tu trámite y envianos el
                formato para cobrar tu premio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
