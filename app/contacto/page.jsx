import Image from "next/image";
import PageComp from "../components/PageComp";

export default function ContactNav() {
  return (
    <>
   
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-green-700 flex items-center justify-center m-10">Contacto</h1>
        <div className="flex flex-col lg:flex-row m-8 p-4 gap-8 rounded-lg shadow-lg">
          <div>
            <Image src="/contacto.png" height={900} width={1200} alt="holi" />
          </div>
          <div className="flex flex-col gap-3 mt-8">
            <p>
              Nuestra oficina principal se encuentra ubicada en el Jr.
              Pachacutec 2052 - Jesús María - Lima, como referencia estamos en
              el cruce de la Av. Salaverry con la Av. San Felipe, en la entrada
              al Circulo Militar.
            </p>
            <p>Nuestros datos principales para contacto, son los siguientes:</p>
            <p className="ml-12">
              - Teléfonos 988440963 / 471-6022 / 471-7135 Fax 471 3364
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <table className="m-3 text-1xs md:text-sm lg:text-base border-black border shadow-lg">
            <thead className="bg-[#BDD287] border-black border">
              <tr>
                <th className="border-black border">Oficinas</th>
                <th className="border-black border">Operaciones</th>
                <th className="border-black border">Responsable</th>
                <th className="border-black border">Correo</th>
                <th className="border-black border">Nros.Whatsapp</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-black border">
                <td className="border-black border pl-1">Cuentas Corrientes</td>
                <td className="border-black border pl-1">
                  Retiro de Ahorros
                  <br />
                  Retiro de Pago Anticipado
                </td>
                <td className="border-black border pl-1">Diana Becerra</td>
                <td className="border-black border pl-1 text-blue-900">
                  <a href="mailto:ctasctes@alaspe.pe">ctasctes@alaspe.pe</a>
                </td>
                <td className="border-black border pl-1">982 809 650</td>
              </tr>
              <tr className="border-black border">
                <td className="border-black border pl-1">
                  Crédito y morosidad
                </td>
                <td className="border-black border pl-1">
                  Préstamos ordinarios
                  <br />
                  Préstamos a sola firma
                </td>
                <td className="border-black border pl-1">
                  Lourdes Castillo
                  <br />
                  Emilio Guzman
                </td>
                <td className="border-black border pl-1 text-blue-900">
                  <a href="mailto:credito@alaspe.pe">credito@alaspe.pe</a>
                </td>
                <td className="border-black border pl-1">989 142 046</td>
              </tr>
              <tr className="border-black border">
                <td className="border-black border pl-1">Cobranzas</td>
                <td className="border-black border pl-1">
                  Gestión de cobranzas
                </td>
                <td className="border-black border pl-1">Emilio Guzman</td>
                <td className="border-black border pl-1 text-blue-900">
                  <a href="mailto:cobranza@alaspe.pe">cobranza@alaspe.pe</a>
                </td>
                <td className="border-black border pl-1">982 559 829</td>
              </tr>
              <tr className="border-black border">
                <td className="border-black border pl-1">Previsión Social</td>
                <td className="border-black border pl-1">
                  Consulta de trámites para Subsidios por Fallecimiento de
                  Socios y Familiares
                </td>
                <td className="border-black border pl-1">Rosario Contreras</td>
                <td className="border-black border pl-1 text-blue-900">
                  <a href="mailto:prevision@alaspe.pe">prevision@alaspe.pe</a>
                </td>
                <td className="border-black border pl-1">989 142 055</td>
              </tr>
              <tr>
                <td className="border-black border pl-1">Educación</td>
                <td className="border-black border pl-1">
                  Admisión de Socios Nuevos
                  <br />
                  Trámites para Renuncia
                </td>
                <td className="border-black border pl-1">Jesús Paredes</td>
                <td className="border-black border pl-1 text-blue-900">
                  <a href="mailto:educacion@alaspe.pe">educacion@alaspe.pe</a>
                </td>
                <td className="border-black border pl-1">989 142 051</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between my-12 mx-4 md:mx-24">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.7331474307234!2d-77.04555865686561!3d-12.082150300249362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f9e96bd5ad%3A0x1b821a39eb044ba8!2sJir%C3%B3n%20Pachacutec%202052%2C%20Jes%C3%BAs%20Mar%C3%ADa%2015072!5e0!3m2!1ses-419!2spe!4v1686416056572!5m2!1ses-419!2spe"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
