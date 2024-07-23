import PdfButton from "@/app/components/PdfButton";

const list1 = [
  {
    title: "Constitución Política del Perú",
    src: "https://cdn.www.gob.pe/uploads/document/file/198518/Constitucion_Politica_del_Peru_1993.pdf?v=1594239946",
  },
  {
    title: "Ley General de Cooperativas",
    src: "https://www2.congreso.gob.pe/sicr/cendocbib/con4_uibd.nsf/0C8229556E3DC60305257B5C0051906C/$FILE/DECRETO_SUPREMO_Nº_074_90_TR.pdf",
  },
];
const list2 = [
  {
    title: "Estatuto",
    src: "/pdf/asociado/Estatuto.pdf",
  },
  {
    title: "Reglamento de Previsión Social",
    src: "/pdf/asociado/ReglamentoPs.pdf",
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

export default function LegislacionPage() {
  return (
    <>
    <h2 className="flex justify-center m-6 mt-12 font-bold text-2xl lg:text-3xl">Legislación</h2>
      <div className="flex flex-wrap justify-center flex-col gap-12 m-6 lg:mx-72 lg:mb-56">
        <div>
          <ListPdf list={list1} title="" />
        </div>
        <div>
          <ListPdf
            list={list2}
            title=""
          />
        </div>
      </div>
    </>
  );
}
