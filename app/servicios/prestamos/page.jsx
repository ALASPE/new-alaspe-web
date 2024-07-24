import NavBarItem from "@/app/components/NavbarItem";
import PageComp from "@/app/components/PageComp";

const prestamosItems = [
  { href: "/servicios/prestamos/solo-firma", image: "/solofirma-prestamos.jpg", text: "Sola Firma" },
  { href: "/servicios/prestamos/ordinario", image: "/ordinario-prestamos.jpg", text: "Ordinario" },
  { href: "/servicios/prestamos/promocional", image: "/promocional-prestamos.jpg", text: "Promocional" },
  { href: "/servicios/prestamos/campana-escolar", image: "/campaña-escolar-prestamos.jpeg", text: "Campaña escolar" },
  { href: "/servicios/prestamos/campana-fiestas-patrias", image: "/campaña-fiestas-patrias-prestamos.jpg", text: "Campaña fiestas patrias" },
];

export default function PrestamosPage() {
  return (
     <PageComp title="Prestamos">
          {prestamosItems.map((item, index) => (
            <NavBarItem
              key={index}
              href={item.href}
              src={item.image}
              title={item.text}
            />
          ))}
    </PageComp>
  );
}
