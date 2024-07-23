import NavBarItem from "../components/NavbarItem";
import PageComp from "../components/PageComp";

export default function ComunicNav() {
  return (
    <>
      <PageComp title="Comunicados">
        <NavBarItem
          href="/comunicado/historial"
          src="/hospedaje-logo.webp"
          alt="Historial"
          title="Historial"
        />
        <NavBarItem
          href="/comunicado/socios-camip"
          src="/merch-logo.webp"
          alt="Socio CAMIP"
          title="Socios CAMIP"
        />
        <NavBarItem
          href="/comunicado/pagos-en-bancos"
          src="/prestamos-logo.webp"
          alt="Pagos en bancos"
          title="Pagos en bancos"
        />
      </PageComp>
    </>
  );
}
