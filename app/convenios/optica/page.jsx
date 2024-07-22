import ImgDesc from "@/app/components/ImgDesc";

export default function OpticaPage() {
  return (
    <>
      <ImgDesc image="/optica.jpeg" desc="" h="700" w="700" >
        <div className="flex flex-col rounded-lg shadow-lg m-12 p-4 gap-12">
          <div>
            <h3 className="text-[#175935] text-xl font-bold">
            OPTICA LETY
            </h3>
            <p>
              Nuestra cooperativa ha firmado un convenio con Optica Lety,
              empresa dedicada al cuidado de nuestros ojos, con la garantía y
              calidad de servicio. <br/>
              Como parte del convenio, nuestros socios tienen un 20% de
              descuento en monturas y lunas. La medida de vista es totalmente
              gratis.
            </p>
          </div>
          <div>
            <h3 className="text-[#175935] text-xl font-bold">REQUISITOS</h3>
            <ul className="pl-4">
              <li>- Ser socio de la cooperativa.</li>
              <li>
                - Estar al día en tus aportaciones y tener descuento por
                planilla.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#175935] text-xl font-bold">FORMA DE PAGO</h3>
            <p>
            Los pagos se realizarán al CONTADO, directamente en Optica Lety..
            </p>
          </div>
        </div>
      </ImgDesc>
    </>
  );
}
