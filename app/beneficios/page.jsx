import NavBarItem from "../components/NavbarItem";

export default function BenefNav() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-5 gap-12">
        <h2 className="text-4xl font-bold text-black flex items-center justify-center">
          Beneficios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <NavBarItem
            href="/beneficios/actividades"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="Actividades"
          />
          <NavBarItem
            href="/beneficios/educacion"
            src="/hospedaje-logo.webp"
            alt="Educación logo"
            title="Educación"
          />
          <NavBarItem
            href="/beneficios/servicentro"
            src="/hospedaje-logo.webp"
            alt="Servicentro logo"
            title="Servicentro"
          />
        </div>
      </div>
    </>
  );
}
