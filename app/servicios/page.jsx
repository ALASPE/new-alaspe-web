import NavBarItem from "../components/NavbarItem";

export default function ServiciosNav() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-5 gap-12">
        <h1 className="text-4xl font-bold text-black flex items-center justify-center m-10">
          Servicios
        </h1>
        <div className="flex flex-wrap justify-center gap-12">
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
            title="Prestamos"
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
        </div>
      </div>
    </>
  );
}
