import NavBarItem from "../components/NavbarItem";
import PageComp from "../components/PageComp";

export default function ServiciosNav() {
  return (
    <>
      <PageComp title="Servicios">
        <NavBarItem
          href="/servicios/hospedaje"
          src="/hospedaje-logo.webp"
          alt="Hospedaje logo"
          title="Hospedaje"
        />
        <NavBarItem
          href="/servicios/merch"
          src="/merch-logo.webp"
          alt="Merch logo"
          title="Merch"
        />
        <NavBarItem
          href="/servicios/prestamos"
          src="/prestamos-logo.webp"
          alt="Prestamos logo"
          title="Préstamos"
        />
        <NavBarItem
          href="/servicios/curso-cooperativismo"
          src="/curso-logo.webp"
          alt="Curso Cooperativismo logo"
          title="Curso Cooperativismo"
        />
        <NavBarItem
          href="/servicios/prevision-social"
          src="/prevision-logo.webp"
          alt="Previsión Social logo"
          title="Previsión Social"
        />
      </PageComp>
    </>
  );
}
