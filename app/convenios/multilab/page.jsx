import ImgDesc from "@/app/components/ImgDesc";

export default function OpticaPage() {
  return (
    <>
      <ImgDesc image="/multilab.jpg" desc="" h="700" w="600">
        <div className="flex flex-col rounded-lg shadow-lg m-12 p-4 gap-6">
          <h3 className="text-[#175935] text-xl font-bold">MULTILAB</h3>
          <p>
            Una nueva opción de laboratorios clínicos, donde tendrá una atención
            esmerada en los exámenes de laboratorio, los cuales se procesan
            rápidamente en el mismo local donde se tomó la prueba. Puede revisar
            los resultados por internet o los puede recoger personalmente en las
            mismas sedes. En Multilab usamos equipos europeos de alta tecnología
            que procesan automáticamente tus exámenes.
          </p>
          <p>
            Descuentos del 10% en los exámenes de laboratorio y Pruebas COVID,
            de acuerdo al tarifario de cada sede.
          </p>
          <p>Contamos con 15 sedes en Lima y Callao.</p>
        </div>
      </ImgDesc>
    </>
  );
}
