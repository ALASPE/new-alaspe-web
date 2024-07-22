import Image from "next/image";
import NavBarItem from "@/app/components/NavbarItem";
import PdfButton from "@/app/components/PdfButton";
import Collapsible from "@/app/components/Desplegable";

const previsionItems = [
  {
    href: "/pdf/prevision/Carta-declaratoria-de-beneficiarios-frente-reverso.pdf",
    text: "Carta Declaratoria de Beneficiarios",
  },
  {
    href: "/pdf/prevision/declaracion_jurada.pdf",
    text: "Ficha de Fallecimiento",
  },
  {
    href: "/pdf/prevision/DJ_titularidad_cuenta_bancaria.pdf",
    text: "Solicitud de Subsidio",
  },
  {
    href: "/pdf/prevision/f-fallecimiento.pdf",
    text: "Declaración Jurada",
  },
  {
    href: "/pdf/prevision/solicitud_subsidio.pdf",
    text: "Declaración Jurada (Titularidad de cta. bancaria)",
  },
];

const requisitosData = [
  {
    title: "Requisitos para Solicitar el Beneficio",
    content: (
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>Haberse inscrito como socio antes de los 61 años de edad.</li>
        <li>
          El plazo máximo para solicitar el servicio de Previsión Social es de 6
          meses contados a partir del día siguiente de ocurrido el deceso.
        </li>
        <li>
          El trámite y cobro es personal o con poder específico Fuera de
          Registro y DNI legalizado del apoderado. Así mismo, se adjuntará la
          boleta de venta o recibo de honorarios de la Notaría.
        </li>
        <li>
          Antes de ocurrido el deceso, el socio deberá estar al día en sus
          descuentos y obligaciones, caso contrario se le abonará las avas
          partes de las cuotas canceladas.
        </li>
        <li>
          A la fecha del deceso tener una antigüedad mínima de 6 meses como
          socio.
        </li>
        <li>
          Para acogerse al beneficio por fallecimiento del hijo menor de edad,
          la condición es que el hijo haya nacido vivo y su muerte se produzca
          en una edad menor de 18 años.
        </li>
        <li>
          En caso de omisión de uno de los nombres o apellidos o éstos estén
          errados en las partidas de nacimiento, matrimonio, defunción o DNI,
          previamente se hará la rectificación del documento respectivo (vía
          notarial o judicial).
        </li>
        <li>
          De existir dos o más familiares que soliciten el beneficio por una
          misma persona, cada uno, presentará en forma individual su expediente
          con todos los requisitos que el reglamento exige.
        </li>
        <li>
          La apertura de la carta declaratoria por fallecimiento del socio, se
          hará a solicitud y en presencia de la cónyuge e hijos, acreditando el
          deceso y el parentesco.
        </li>
        <li>
          Si, el socio mantuviera deudas morosas por descuentos u obligaciones
          con la cooperativa; al momento de otorgarse el beneficio se procederá
          a deducir de la liquidación y se abonará a los rubros
          correspondientes.
        </li>
        <li>
          Al monto del subsidio se deducirá el 1.5% por concepto de gastos
          administrativos.
        </li>
        <li>
          El socio o beneficiario, cancelarán en forma obligatoria el saldo
          restante del costo anual de previsión social, para tener derecho a
          este servicio.
        </li>
      </ul>
    ),
  },
];

const montosFallecimiento = [
  {
    title: "Nuevos montos por fallecimiento",
    content: (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-green-100 text-left border-collapse mt-5 mb-5">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="border-b-2 border-gray-200 px-4 py-2">Fallecimiento de</th>
              <th className="border-b-2 border-gray-200 px-4 py-2">Subsidio</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-[#209F63] even:bg-green-50 text-black">
              <td className="border-b border-gray-200 px-4 py-2">Socios</td>
              <td className="border-b border-gray-200 px-4 py-2">S/ 5500</td>
            </tr>
            <tr className="odd:bg-[#209F63] even:bg-green-50 text-black">
              <td className="border-b border-gray-200 px-4 py-2">Conyuge</td>
              <td className="border-b border-gray-200 px-4 py-2">S/ 5500</td>
            </tr>
            <tr className="odd:bg-[#209F63] even:bg-green-50 text-black">
              <td className="border-b border-gray-200 px-4 py-2">Hijos menores de 18 años</td>
              <td className="border-b border-gray-200 px-4 py-2">S/ 5500</td>
            </tr>
            <tr className="odd:bg-[#209F63] even:bg-green-50 text-black">
              <td className="border-b border-gray-200 px-4 py-2">Padres del socio</td>
              <td className="border-b border-gray-200 px-4 py-2">S/ 2750</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
];

const fallecimientoSocio = [
  {
    title: "Fallecimiento de socio",
    content: (
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>
          Llenar correctamente los formatos de solicitud de subsidio y ficha
          única (en letra de imprenta, sin borrones ni enmendaduras)
        </li>
        <li>Acta de defunción ORIGINAL</li>
        <li>
          Partida de nacimiento de los hijos beneficiarios, expedida en un plazo
          no mayor de 3 meses (original o copia legalizada)
        </li>
        <li>
          Partida de matrimonio civil, expedida en un plazo no mayor de 3 meses
          (original o copia legalizada)
        </li>
        <li>
          Sucesión intestada definitiva inscrita en RRPP, en original (en caso
          de no existir la carta declaratoria de beneficiarios).
        </li>
        <li>
          Boleta de venta o recibo de pago por derecho de nicho, tumba o
          constancia de entierro o acta de cremación (original o copia
          legalizada).
        </li>
        <li>DNI del socio (copia simple)</li>
        <li>DNI de c/u de los beneficiarios (copias legalizadas)</li>
        <li>Boleta de venta o recibo de la notaría por las legalizaciones.</li>
        <li>
          Adjuntar voucher de su cuenta bancaria y código interbancario (CCI)
        </li>
      </ul>
    ),
  },
];

const fallecimientoHM18 = [
  {
    title: "Fallecimiento de hijo menor de 18 años",
    content: (
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>
          Llenar correctamente los formatos de solicitud de subsidio, ficha
          única y declaración jurada (letra de imprenta, sin borrones ni
          enmendaduras)
        </li>
        <li>Acta de defunción ORIGINAL</li>
        <li>Partida de nacimiento del hijo (original o copia legalizada)</li>
        <li>
          Boleta de venta o recibo de pago por derecho de nicho, tumba o
          constancia de entierro o acta de cremación (original o copia
          legalizada).
        </li>
        <li>DNI del socio (copia legalizada)</li>
        <li>DNI del familiar fallecido (copia simple)</li>
        <li>Boleta de venta o recibo de la notaría por las legalizaciones.</li>
        <li>
          Adjuntar voucher de su cuenta bancaria y código interbancario (CCI).
        </li>
      </ul>
    ),
  },
];

const fallecimientoPadres = [
  {
    title: "Fallecimiento de padres",
    content: (
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>
          Llenar correctamente los formatos de solicitud de subsidio, ficha
          única y declaración jurada (letra de imprenta, sin borrones ni
          enmendaduras)
        </li>
        <li>Acta de defunción ORIGINAL</li>
        <li>
          Partida de nacimiento del socio expedida en un plazo no mayor de 3
          meses de antigüedad (original o copia legalizada)
        </li>
        <li>
          Boleta de venta o recibo de pago por derecho de nicho, tumba o
          constancia de entierro o acta de cremación (original o copia
          legalizada).
        </li>
        <li>DNI del socio (copia legalizada)</li>
        <li>DNI del familiar fallecido (copia simple)</li>
        <li>Boleta de venta o recibo de la notaría por las legalizaciones.</li>
        <li>
          Adjuntar voucher de su cuenta bancaria y código interbancario (CCI).
        </li>
      </ul>
    ),
  },
];

const condonacionPrestamo = [
  {
    title: "Condonación de préstamo",
    content: (
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>
          Este servicio consiste en la condonación del saldo total del préstamo
          que tuviese el socio al momento del fallecimiento. La condonación no
          incluye a los préstamos hipotecarios ya sea en moneda nacional o
          extranjera y, serán cobrados a los beneficiarios o herederos de
          acuerdo a las leyes vigentes.
        </li>
        <li>
          El socio deberá estar al día en sus obligaciones con la cooperativa,
          antes de ocurrido el deceso, este servicio no alcanza al socio moroso
          en su préstamo u otros servicios.
        </li>
      </ul>
    ),
  },
];

const legalizacionCartas = [
  {
    title: "Servicio de legalización de cartas declaratorias",
    content: (
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <p>Para la legalización deberá seguir los siguientes pasos:</p>
        <li>
          Abonar la suma de S/ 20 por concepto de legalización en las
          ventanillas de Cuentas Corrientes de la cooperativa.
        </li>
        <li>
          Llenar correctamente el formato de carta declaratoria (letra de
          imprenta, sin borrones ni enmendaduras)
        </li>
        <li>Adjuntar la copia de DNI (vigente)</li>
        <li>El trámite es personal o por intermedio de su delegado.</li>
      </ul>
    ),
  },
];

const disposicionesGenerales = [
  {
    title: "Disposiciones Generales",
    content: (
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>
          En caso que el beneficiario forzoso, sea menor de edad y no tenga
          representatividad legal, el monto que le corresponde por el servicio
          de previsión social, será depositado en una cuenta bancaria de ahorros
          y permanecerá intangible, hasta que cumpla su mayoría de edad, salvo
          mandato judicial.
        </li>
        <li>
          Al desaparecer la calidad de socio hábil, por renuncia o separación de
          acuerdo al reglamento, estatuto y la ley de cooperativas; no se
          devolverá íntegra ni parcialmente, el monto de las cuotas pagadas por
          el servicio de previsión social.
        </li>
        <li>
          La cooperativa se reserva el derecho de suspender los beneficios
          derivados de los servicios de previsión social, por dolo o mala fe; es
          decir la conciencia y la voluntad de sacar ventajas económicas a
          sabiendas de que la documentación presentada es falsa o adulterada
        </li>
        <li>
          Comprobado el delito, la cooperativa procederá a la separación del
          socio e iniciar las acciones legales correspondientes, para recuperar
          los montos otorgados por previsión social indebidamente cobrados de
          sus haberes e interponer la acción penal y civil correspondiente y
          dando parte a su Comando, cuando éste se encuentre en actividad o de
          licencia, del acto doloso cometido ante la cooperativa para su proceso
          administrativo.
        </li>
        <li>
          La cooperativa no reconoce los beneficios de los servicios de
          previsión social por fallecimiento de socios y familiares por causas
          derivadas de catástrofes, como terremotos, maremotos, guerra y pestes;
          a excepción de muerte por actos terroristas.
        </li>
        <li>
          Al fallecimiento del socio, su cónyuge puede ser socio de la
          cooperativa, siempre que tenga derecho a pensión en su institución.
        </li>
        <li>
          La Oficina de Previsión Social, no estará obligada a recepcionar las
          solicitudes que no cuenten con la documentación completa.
        </li>
      </ul>
    ),
  },
];

const navBarItems = [
  {
    href: "/servicios/prestamos/ordinario",
    src: "/ordinario-prestamos.jpg",
    alt: "Ordinario",
    title: "Ordinario",
  },
  {
    href: "/servicios/prestamos/promocional",
    src: "/promocional-prestamos.jpg",
    alt: "Promocional",
    title: "Promocional",
  },
  {
    href: "/servicios/prestamos/solo-firma",
    src: "/solofirma-prestamos.jpg",
    alt: "Solo Firma",
    title: "Solo Firma",
  },
  {
    href: "/servicios/prestamos/campana-fiestas-patrias",
    src: "/campaña-fiestas-patrias-prestamos.jpg",
    alt: "Campaña fiestas patrias",
    title: "Campaña fiestas patrias",
  },
];

export default function PrevSocPage() {
  return (
    <div className="flex flex-col items-center mt-10 w-full px-2 md:px-4">
      <h1 className="text-4xl font-bold text-black mb-10 text-center">
        Previsión Social
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-5">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full">
          <Image
            src="/prevision-social.jpg"
            width={500}
            height={500}
            alt="Curso cooperativismo"
            className="rounded-lg shadow-lg mb-4"
          />
          <p className="text-lg text-gray-700 mb-4 text-center">
            La Cooperativa Alas Peruanas establece, el sistema de Previsión
            Social autofinanciado dentro del marco de bienestar social
            cooperativo. El servicio de Previsión Social por fallecimiento, se
            crea y sustenta, mediante la participación solidaria de los socios o
            herederos que continúen en calidad de socios, a través de un monto
            económico que es aprobado por la Asamblea General de Delegados,
            previo informe técnico de la gerencia. Será descontado todo el año
            en forma obligatoria (S/15 de enero a diciembre). El socio nuevo
            adquiere el derecho del servicio de Previsión Social, después de
            haber cotizado seis (6) meses consecutivos.
          </p>
          <div className="mt-4 w-full">
            {previsionItems.map((item, index) => (
              <PdfButton key={index} href={item.href} text={item.text} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold text-black mb-4 text-left">
            Requisitos
          </h2>
          {requisitosData.map((section, index) => (
            <Collapsible
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}

          {montosFallecimiento.map((section, index) => (
            <Collapsible
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}

          <h2 className="text-2xl font-bold text-black mb-4 text-left">
            Documentos a presentar
          </h2>
          {fallecimientoSocio.map((section, index) => (
            <Collapsible
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}

          {fallecimientoHM18.map((section, index) => (
            <Collapsible
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}

          {fallecimientoPadres.map((section, index) => (
            <Collapsible
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
          <h2 className="text-2xl font-bold text-black mb-4 text-left">
            Otras consideraciones
          </h2>
          {condonacionPrestamo.map((section, index) => (
            <Collapsible
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}

          {legalizacionCartas.map((section, index) => (
            <Collapsible
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}

          {disposicionesGenerales.map((section, index) => (
            <Collapsible
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-center mb-20">
        <h2 className="text-3xl font-bold text-black mb-8 mt-10 text-center">
          Otros préstamos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
          {navBarItems.map((item, index) => (
            <NavBarItem
              key={index}
              href={item.href}
              src={item.src}
              alt={item.alt}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
