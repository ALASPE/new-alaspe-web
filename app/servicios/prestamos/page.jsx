import NavBarItem from "@/app/components/NavbarItem";

const prestamosItems = [
  { href: "/servicios/prestamos/solo-firma", image: "/solofirma-prestamos.jpg", text: "Sola Firma" },
  { href: "/servicios/prestamos/ordinario", image: "/ordinario-prestamos.jpg", text: "Ordinario" },
  { href: "/servicios/prestamos/promocional", image: "/promocional-prestamos.jpg", text: "Promocional" },
  { href: "/servicios/prestamos/campana-escolar", image: "/campaña-escolar-prestamos.jpeg", text: "Campaña escolar" },
  { href: "/servicios/prestamos/campana-fiestas-patrias", image: "/campaña-fiestas-patrias-prestamos.jpg", text: "Campaña fiestas patrias" },
];

export default function PrestamosPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-black flex items-center justify-center m-10">
        Prestamos
      </h1>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-4 grid-rows-1 gap-10 place-items-center max-w-xxl mx-auto">
          {prestamosItems.map((item, index) => (
            <NavBarItem
              key={index}
              href={item.href}
              src={item.image}
              title={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
