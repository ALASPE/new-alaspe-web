import NavBarItem from "../components/NavbarItem";
import PageComp from "../components/PageComp";

export default function AsocNav() {
  return (
    <>
      <PageComp title="Asociados">
        <NavBarItem
          href="/asociado/admision"
          src="/hospedaje-logo.webp"
          alt="Admisión"
          title="Requisitos para Afiliación"
        />
        <NavBarItem
          href="/asociado/tramites"
          src="/hospedaje-logo.webp"
          alt="Admisión"
          title="Trámites"
        />
        <NavBarItem
          href="/asociado/legislacion"
          src="/hospedaje-logo.webp"
          alt="Admisión"
          title="Legislación"
        />
      </PageComp>
    </>
  );
}
