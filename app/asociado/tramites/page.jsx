import PdfButton from "@/app/components/PdfButton";

const prevSoc = [
  {
    title: "Carta Declaratoria de Beneficiarios",
    src: "/pdf/asociado/CartaDeclaratoria.pdf",
  },
  {
    title: "Ficha de Fallecimiento",
    src: "/pdf/asociado/FichaFallecimiento.pdf",
  },
  {
    title: "Solicitud de Subsidio",
    src: "/pdf/asociado/SolicitudSubsidio.pdf",
  },
  {
    title: "Declaración Jurada",
    src: "/pdf/asociado/DeclaracionJurada.pdf",
  },
  {
    title: "Declaración Jurada (Titularidad de cta. bancaria)",
    src: "/pdf/asociado/DeclaracionJuradaBanco.pdf",
  },
];

const autorizacion = [
  {
    title: "Autorización de Descuentos - MARINA",
    src: "/pdf/asociado/DescuentosMarina.pdf",
  },
  {
    title: "Autorización de Descuentos - EJÉRCITO",
    src: "/pdf/asociado/DescuentosEjercito.pdf",
  },
  {
    title: "Autorización de Descuentos - FAP",
    src: "/pdf/asociado/DescuentosFAP.pdf",
  },
  {
    title: "Autorización de Descuentos - OPREFA",
    src: "/pdf/asociado/DescuentosOPREFA.pdf",
  },
  {
    title: "Autorización de Descuentos - CAJA PENS. MILITAR POLICIAL",
    src: "/pdf/asociado/DescuentosCPMP.pdf",
  },
];

const educacion = [
  {
    title: "Ficha de Ingreso",
    src: "/pdf/asociado/FichaIngreso.pdf",
  },
  {
    title: "Ficha Familiar",
    src: "/pdf/asociado/FichaFamiliar.pdf",
  },
  {
    title: "Solicitud de Renuncia",
    src: "/pdf/asociado/SolicitudRenuncia.pdf",
  },
];

const retiros = [
  {
    title: "Retiro de Pago Anticipado",
    src: "/pdf/asociado/RetiroAnticipado.pdf",
  },
  {
    title: "Solicitud para cobrar premio de Sorteo",
    src: "/pdf/asociado/SolicitudSorteo.pdf",
  },
  {
    title: "Solicitud de Variación de Cuota",
    src: "/pdf/asociado/SolicitudSorteo.pdf",
  },
];

const ListPdf = ({ list, title }) => {
  return (
    <>
      <div className="flex flex-col gap-4 shadow-lg text-sm md:text-base p-4 rounded-lg">
        <h1 className="flex justify-center items-center font-bold">{title}</h1>
        <div className="lg:px-16">
          {list.map((list, index) => (
            <PdfButton key={index} href={list.src} text={list.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default function TramitesPage() {
  return (
    <>
      <div className="flex flex-wrap flex-col md:grid grid-cols-2 gap-8 m-6 md:p-12">
        <div>
          <ListPdf list={prevSoc} title="PREVISIÓN SOCIAL" />
        </div>
        <div>
          <ListPdf
            list={autorizacion}
            title="AUTORIZACIÓN DE DESCUENTOS POR PLANILLAS: GENÉRICAS"
          />
        </div>
        <div>
          <ListPdf list={educacion} title="EDUCACIÓN" />
        </div>
        <div>
          <ListPdf list={retiros} title="RETIROS Y OTROS" />
        </div>
      </div>
    </>
  );
}
