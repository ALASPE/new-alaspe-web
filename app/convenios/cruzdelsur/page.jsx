import ImgDesc from "@/app/components/ImgDesc";
import PdfButton from "@/app/components/PdfButton";

export default function CruzdelSurPage() {
  return (
    <>
      <ImgDesc image="/cruz_sur.jpg" desc="" h="600" w="1000">
        <div className="flex flex-col rounded-lg shadow-lg m-12 p-4 gap-12">
          <div>
            <h3 className="text-[#175935] text-xl font-bold">
              EMPRESA DE TRANSPORTES CRUZ DEL SUR
            </h3>
            <p>
              Nuestra cooperativa ha firmado un convenio con la Empresa de
              Transportes Cruz del Sur, obteniendo descuentos exclusivos en
              todas sus agencias y a nivel nacional para nuestros socios y sus
              familiares directos. Cruz del Sur es una empresa peruana con 60
              años de experiencia brindando servicios de calidad en el
              transportes de pasajeros y con destinos nacionales e
              internacionales.
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
              Para la aplicación del presente convenio los pagos se realizarán
              al contado al momento de la compra de sus pasajes en forma
              presencial en las ventanillas de las agencias de Cruz del Sur.
            </p>
          </div>
        </div>
      </ImgDesc>
    </>
  );
}
