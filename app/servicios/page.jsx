import NavBarItem from "../components/NavbarItem";

export default function ServiciosNav() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-5 gap-12 ">
        <h1 className="text-4xl font-bold text-black flex items-center justify-center m-10">
          Servicios
        </h1>
        <div className="grid grid-cols-2 grid-rows-3 lg:flex lg:flex-row gap-12">
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
          <div className="lg:basis-1/5 col-span-2">
          <NavBarItem
            href="/servicios/prevision"
            src="/prevision-logo.webp"
            alt=""
            title="Previsión Social"
          />
          </div>
        </div>
      </div>
    </>
  );
}
