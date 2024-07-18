import NavBarItem from "@/app/components/NavbarItem";

export default function HospedajePage() {
    return (
      <>
        <h1 className="text-4xl font-bold text-black flex items-center justify-center m-10">
          Hospedaje
        </h1>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 grid-rows-1 gap-10 place-items-center max-w-xxl mx-auto">
            <NavBarItem
              href="/servicios/hospedaje/granada"
              src="/hospedaje-granada.jpg"
              alt=""
              title="Hospedaje granada"
            />
            <NavBarItem
              href="/servicios/hospedaje/virreyes"
              src="/hospedaje-virreyes.jpg"
              alt=""
              title="Hostal virreyes"
            />
          </div>
        </div>
      </>
    );
  }
  