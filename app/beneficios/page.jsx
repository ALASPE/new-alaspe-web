import NavBarItem from "../components/NavbarItem";

export default function BenefNav() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-5 gap-12 ">
        <h2 className="text-4xl font-bold text-black flex items-center justify-center">Beneficios</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <NavBarItem
            href="/beneficios/actividades"
            src="/hospedaje-logo.webp"
            alt=""
            title="Actividades"
          />
          <NavBarItem
            href="/beneficios/educacion"
            src="/hospedaje-logo.webp"
            alt=""
            title="Educación"
          />
          <NavBarItem
            href="/beneficios/servicentro"
            src="/hospedaje-logo.webp"
            alt=""
            title="Servicentro"
          />
        </div>
      </div>
    </>
  );
}
