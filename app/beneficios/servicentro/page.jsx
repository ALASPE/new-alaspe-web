import Image from "next/image";

export default function ServicentroPage() {
  return (
    <>
      <div>
        <h2 className="flex justify-center mt-12 font-bold text-2xl"></h2>
        <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row rounded-lg shadow-lg m-14 py-6 px-12 justify-between items-center">
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-green-800 font-bold">
                PRODUCTOS PARA TU VEHICULO
              </h3>
              <ul className="pl-8">
                <li>- Gasohol Premium</li>
                <li>- Gasohol Regular</li>
                <li>- Diesel DB S50</li>
                <li>- GLP - Gas Licuado de Petróleo</li>
                <li>- GNV - Gas natural</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-800 font-bold">SERVICIOS</h3>
              <ul className="pl-8">
                <li>- Lavado de autos</li>
                <li>- Llantería</li>
                <li>- Lubricantes</li>
                <li>- Oleocentro</li>
              </ul>
            </div>
          </div>
          <Image src="/grifo1.jpg" height={400} width={450} alt="Grifo" />
        </div>
        <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row rounded-lg shadow-lg m-14 py-6 px-12 justify-between items-center">
          <div className="">
            <h3 className="text-green-800 font-bold">
              PRODUCTOS PARA TU VEHICULO
            </h3>
            <ul className="pl-8">
              <li>- Gasohol Premium</li>
              <li>- Gasohol Regular</li>
              <li>- Diesel DB S50</li>
              <li>- GLP - Gas Licuado de Petróleo</li>
              <li>- GNV - Gas natural</li>
            </ul>
          </div>
          <Image src="/grifo2.jpg" height={400} width={450} alt="Grifo" />
        </div>
      </div>
    </>
  );
}
