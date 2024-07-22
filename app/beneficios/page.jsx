import NavBarItem from "../components/NavbarItem";
import PageComp from "../components/PageComp";

export default function BenefNav() {
  return (
    <>
      <PageComp title="Beneficios">
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
      </PageComp>
    </>
  );
}
