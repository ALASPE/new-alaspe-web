import NavBarItem from "../components/NavbarItem";

export default function NosotrosNav() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-5 gap-12">
        <h1 className="text-4xl font-bold text-black flex items-center justify-center m-10">
          Nosotros
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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
        </div>
      </div>
    </>
  );
}
