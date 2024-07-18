import NavBarItem from "../components/NavbarItem";

export default function ServiciosNav() {
  return (
    <>
      <h1 className="text-4xl font-bold text-black flex items-center justify-center m-10">Servicios</h1>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-5 grid-rows-2 gap-10 place-items-center max-w-xxl mx-auto">
          <NavBarItem
            href="/servicios/hospedaje"
            src="/hospedaje-logo.webp"
            alt=""
            title="Hospedaje"
          />
          <NavBarItem
            href="/servicios/merch"
            src="/merch-logo.webp"
            alt=""
            title="Merch"
          />
          <NavBarItem
            href="/servicios/prestamos"
            src="/prestamos-logo.webp"
            alt=""
            title="Prestamos"
          />
          <NavBarItem
            href="/servicios/curso-cooperativismo"
            src="/curso-logo.webp"
            alt=""
            title="Curso Cooperativismo"
          />
          <NavBarItem
            href="/servicios/prevision"
            src="/prevision-logo.webp"
            alt=""
            title="Previsión Social"
          />
        </div>
      </div>
    </>
  );
}
