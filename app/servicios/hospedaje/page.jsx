import NavBarItem from "@/app/components/NavbarItem";

export default function HospedajePage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-5 gap-12">
        <h1 className="text-4xl font-bold text-green-700 flex items-center justify-center mt-10">
          Hospedaje
        </h1>
        <div className="flex flex-wrap justify-center gap-12">
          <NavBarItem
            href="/servicios/hospedaje/granada"
            src="/hospedaje-granada.jpg"
            alt="Hospedaje granada"
            title="Hospedaje Granada"
          />
          <NavBarItem
            href="/servicios/hospedaje/virreyes"
            src="/hospedaje-virreyes.jpg"
            alt="Hostal virreyes"
            title="Hostal Virreyes"
          />
        </div>
      </div>
    </>
  );
}
