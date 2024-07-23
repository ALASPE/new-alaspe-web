import NavBarItem from "../components/NavbarItem";
import PageComp from "../components/PageComp";

export default function NosotrosNav() {
  return (
    <>
      <PageComp title="Nosotros">
        <NavBarItem
          href="/nosotros/cooperativa"
          src="/hospedaje-logo.webp"
          alt="Cooperativa"
          title="Cooperativa"
        />
        <NavBarItem
          href="/nosotros/directorio"
          src="/merch-logo.webp"
          alt="Directorio"
          title="Directorio"
        />
        <NavBarItem
          href="/nosotros/presidencia"
          src="/prestamos-logo.webp"
          alt="Presidencia"
          title="Presidencia"
        />
        <NavBarItem
          href="/nosotros/gerencia"
          src="/prestamos-logo.webp"
          alt="Gerencia"
          title="Gerencia"
        />
      </PageComp>
    </>
  );
}
