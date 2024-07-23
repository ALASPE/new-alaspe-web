import NavBarItem from "../components/NavbarItem";

export default function ComunicNav() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-5 gap-12">
        <h1 className="text-4xl font-bold text-black flex items-center justify-center m-10">
          Comunicados
        </h1>
        <div className="flex flex-wrap justify-center gap-12">
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
        </div>
      </div>
    </>
  );
}
