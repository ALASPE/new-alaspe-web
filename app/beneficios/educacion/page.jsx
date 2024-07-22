import EduComp from "@/app/components/EduComp";

export default function EducacionPage() {
  return (
    <>
      <div>
        <h2 className="flex justify-center mt-10 pb-5 text-2xl font-bold">
          SISTEMA EDUCATIVO
        </h2>
        <div className="flex flex-col gap-14">
          <EduComp
            photo="/educacion_uap.jpg"
            title="UNIVERSIDAD ALAS PERUANAS"
            desc="Esta institución está comprometida con la educación íntegra y profesional de los futuros hombres y mujeres que velaran por el desarrollo de nuestro país."
            button="Ir a la Página Web de la Universidad"
            link="https://www.uap.edu.pe"
          />
          <EduComp
            photo="/educacion_ist.jpg"
            title="INSTITUTO ALAS PERUANAS"
            desc="El Instituto de Educación Superior Tecnológico Privado Alas Peruanas Lima, es una persona jurídica de derecho privado, integrante del Grupo Empresarial “Alas Peruanas” y como ente promotor la Cooperativa Alas Peruanas."
            button="Ir a la Página Web del Instituto"
            link="https://iesap.edu.pe/piura/"
          />
        </div>
      </div>
    </>
  );
}
