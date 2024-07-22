import ImgDesc from "@/app/components/ImgDesc";
import PdfButton from "@/app/components/PdfButton";

export default function ClinicaPage() {
  return (
    <>
      <ImgDesc image="/anto_raimo.jpg" desc="Image" h="300" w="300">
        <div className="flex flex-col gap-8">
          <h3 className="text-[#175935] text-xl font-bold">
            CLINICA ANTONIO RAIMONDI
          </h3>
          <p>
            Informamos a nuestros asociados que la Cooperativa Alas Peruanas ha
            realizado un convenio con la Clínica Antonio Raimondi, clínica de
            atención especializada en el cuidado de la salud mediante un
            servicio integral y seguro con profesionales de calidad,
            diagnósticos certeros, resultados confiables y tecnología de primer
            nivel, logrando así, el bienestar de nuestros socios y sus
            familiares con una tarifa especial en todas sus especialidades y
            servicios.
          </p>
          <p>
            La clínica está ubicada en: Jr. Antonio Raimondi N° 143 La Victoria
          </p>
          <p>
            Teléfono: 01-6115300
            <br />
            Email: informes@clinicaraimondi.com.pe
          </p>
        </div>
      </ImgDesc>
      <div className="flex flex-col rounded-lg shadow-lg m-12 p-4 gap-12">
        <div>
          <h3 className="text-[#175935] text-xl font-bold">REQUISITOS</h3>
          <ul className="pl-4">
            <li>
              - Ser socio activo, estar al día en sus pagos como socio alaspe
            </li>
            <li>
              - Carnet de identidad y DNI del socio para identificación como
              socio alaspe y sus familiares con carnet familiar y DNI.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#175935] text-xl font-bold">FORMA DE PAGO</h3>
          <p>
            Los pagos se realizarán al contado al momento de la atención en la
            clínica, previa cita, adquiriendo la TARJETA DE ATENCION VIP, que
            tiene un costo de S/. 2.00, el cual le hará acreedor de los
            descuentos en convenio con la cooperativa.
          </p>
          <p>
            <span className="font-bold">Nota:</span> La clínica no atiende casos
            de COVID-19
          </p>
        </div>
        <div>
          <h3 className="text-[#175935] text-xl font-bold">Descargas</h3>
          <div className="w-80">
            <PdfButton href="/pdf/convenios/tarifario.pdf" text="Tarifario de Consultas - Convenio" />
          </div>
        </div>
      </div>
    </>
  );
}
