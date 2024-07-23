import NavBarItem from "@/app/components/NavbarItem";

const consejoAdministracion = [
  {
    href: "#",
    src: "/presidente-foto.jpg",
    alt: "Mg. Campos Parodi Martín Antonio",
    title: "Mg. Campos Parodi Martín Antonio",
    text: "Presidente",
  },
  {
    href: "#",
    src: "/vicepresidente-foto.jpg",
    alt: "Econ. Pinto Rodríguez Raúl",
    title: "Econ. Pinto Rodríguez Raúl",
    text: "Vicepresidente",
  },
  {
    href: "#",
    src: "/secretario-foto.jpg",
    alt: "Lic. Muchotrigo Matías Nazario Lorenzo",
    title: "Lic. Muchotrigo Matías Nazario Lorenzo",
    text: "Secretario",
  },
  {
    href: "#",
    src: "/primer-vocal-foto.jpg",
    alt: "Dr. Tasayco Monje Enrique Marvel",
    title: "Dr. Tasayco Monje Enrique Marvel",
    text: "1er Vocal",
  },
  {
    href: "#",
    src: "/segundo-vocal-foto.jpg",
    alt: "Dr. Román Castillo Lautaro",
    title: "Dr. Román Castillo Lautaro",
    text: "2do Vocal",
  },
  {
    href: "#",
    src: "/tercer-vocal-foto.jpg",
    alt: "Mg. Matías Loza Esteban Ydelfonso",
    title: "Mg. Matías Loza Esteban Ydelfonso",
    text: "3er Vocal",
  },
];

const consejoVigilancia = [
  {
    href: "#",
    src: "/vigilancia-presidente-foto.jpg",
    alt: "Sr. Lancho Sánchez Pedro Fidel",
    title: "Sr. Lancho Sánchez Pedro Fidel",
    text: "Presidente - Consejo de Vigilancia",
  },
  {
    href: "#",
    src: "/vigilancia-vicepresidente-foto.jpg",
    alt: "Sr. Gonzales Piña Juan Eduardo",
    title: "Sr. Gonzales Piña Juan Eduardo",
    text: "Vicepresidente - Consejo de Vigilancia",
  },
  {
    href: "#",
    src: "/vigilancia-secretario-foto.jpg",
    alt: "Mg. Cabrera Hurtado Modesto",
    title: "Mg. Cabrera Hurtado Modesto",
    text: "Secretario - Consejo de Vigilancia",
  },
];

const comiteElectoral = [
  {
    href: "#",
    src: "/comite-electoral-presidente-foto.jpg",
    alt: "Dr. Vasquez Salas Juan",
    title: "Dr. Vasquez Salas Juan",
    text: "Presidente - Comité Electoral",
  },
  {
    href: "#",
    src: "/comite-electoral-vicepresidente-foto.jpg",
    alt: "Sra. González Espinoza Mercedes",
    title: "Sra. González Espinoza Mercedes",
    text: "Vicepresidente - Comité Electoral",
  },
  {
    href: "#",
    src: "/comite-electoral-secretario-foto.jpg",
    alt: "Sr. Valladares Quispe Daniel Aurelio",
    title: "Sr. Valladares Quispe Daniel Aurelio",
    text: "Secretario - Comité Electoral",
  },
];

const comiteEducacion = [
  {
    href: "#",
    src: "/comite-educacion-presidente-foto.jpg",
    alt: "Econ. Pinto Rodríguez Raúl Tomas",
    title: "Econ. Pinto Rodríguez Raúl Tomas",
    text: "Presidente - Comité de Educación",
  },
  {
    href: "#",
    src: "/comite-educacion-vicepresidente-foto.jpg",
    alt: "Sr. Asin Donayre Carlos Martín",
    title: "Sr. Asin Donayre Carlos Martín",
    text: "Vicepresidente - Comité de Educación",
  },
  {
    href: "#",
    src: "/comite-educacion-secretario-foto.jpg",
    alt: "Sr. Avilés Panduro César Augusto",
    title: "Sr. Avilés Panduro César Augusto",
    text: "Secretario - Comité de Educación",
  },
  {
    href: "#",
    src: "/comite-educacion-vocal-foto.jpg",
    alt: "Sra.Castro de Correa Betty",
    title: "Sra.Castro de Correa Betty",
    text: "Vocal",
  },
];

const apoyoFinanciero = [
  {
    href: "#",
    src: "/apoyo-financiero-presidente-foto.jpg",
    alt: "Mg. Dolly Pinedo Jessica Milagros",
    title: "Mg. Dolly Pinedo Jessica Milagros",
    text: "Presidente - Apoyo Financiero",
  },
  {
    href: "#",
    src: "/apoyo-financiero-vicepresidente-foto.jpg",
    alt: "Sr. García Purizaca Félix",
    title: "Sr. García Purizaca Félix",
    text: "Vicepresidente - Apoyo Financiero",
  },
  {
    href: "#",
    src: "/apoyo-financiero-secretario-foto.jpg",
    alt: "Sr. Córdova Feijóo Rolando Augusto",
    title: "Sr. Córdova Feijóo Rolando Augusto",
    text: "Secretario - Apoyo Financiero",
  },
];

const gerenteGeneral = [
  {
    href: "#",
    src: "/presidente-foto.jpg",
    alt: "Mg. Campos Parodi Martín Antonio",
    title: "Mg. Campos Parodi Martín Antonio",
    text: "Gerente General",
  },
];

export default function DirectorioPage() {
  return (
    <div className="flex flex-col items-center mt-10 w-full px-2 md:px-4">
      <h1 className="text-4xl font-bold text-black mb-10 text-center">
        Directorio
      </h1>
      <h2 className="text-3xl font-semibold text-black mb-8 mt-10 text-center">
        Consejo de Administración
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full mb-5 justify-items-center">
        {consejoAdministracion.map((item, index) => (
          <NavBarItem
            key={index}
            href={item.href}
            src={item.src}
            alt={item.alt}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>

      <h2 className="text-3xl font-semibold text-black mb-8 mt-10 text-center">
        Consejo de Vigilancia
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full mb-5 justify-items-center">
        {consejoVigilancia.map((item, index) => (
          <NavBarItem
            key={index}
            href={item.href}
            src={item.src}
            alt={item.alt}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>

      <h2 className="text-3xl font-semibold text-black mb-8 mt-10 text-center">
        Comité Electoral
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full mb-5 justify-items-center">
        {comiteElectoral.map((item, index) => (
          <NavBarItem
            key={index}
            href={item.href}
            src={item.src}
            alt={item.alt}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>

      <h2 className="text-3xl font-semibold text-black mb-8 mt-10 text-center">
        Comité de Educación
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full mb-5 justify-items-center">
        {comiteEducacion.map((item, index) => (
          <NavBarItem
            key={index}
            href={item.href}
            src={item.src}
            alt={item.alt}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>

      <h2 className="text-3xl font-semibold text-black mb-8 mt-10 text-center">
        Apoyo Financiero
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full mb-5 justify-items-center">
        {apoyoFinanciero.map((item, index) => (
          <NavBarItem
            key={index}
            href={item.href}
            src={item.src}
            alt={item.alt}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>

      <h2 className="text-3xl font-semibold text-black mb-8 mt-10 text-center">
        Gerente General
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full mb-5 justify-items-center">
        {gerenteGeneral.map((item, index) => (
          <NavBarItem
            key={index}
            href={item.href}
            src={item.src}
            alt={item.alt}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}
