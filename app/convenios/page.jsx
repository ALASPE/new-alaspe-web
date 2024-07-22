import NavBarItem from "../components/NavbarItem";

export default function ConveniosNav() {
  return (
    <>
    <h1>convenios</h1>
      <div className="flex">
      <NavBarItem
            href="/convenios/clinica"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="Clínica Antonio Raimondi"
          />
      <NavBarItem
            href="/convenios/cruzdelsur"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="Cruz del Sur"
          />
      <NavBarItem
            href="/convenios/optica"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="Óptica Lety"
          />
      <NavBarItem
            href="/convenios/multilab"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="MultiLab"
          />
      <NavBarItem
            href="/convenios/club"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="Club los Ángeles de Chiclayo"
          />
      </div>
    </>
  );
}
