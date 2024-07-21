import NavBarItem from "@/app/components/NavbarItem";

const merchItems = [
  { image: "/buzos-merch.jpg", text: "BUZOS" },
  { image: "/polos-merch.jpg", text: "POLOS" },
  { image: "/poleras-merch.jpg", text: "POLERAS" },
  { image: "/gorras-merch.jpg", text: "GORRAS" },
  { image: "/mochilas-merch.jpg", text: "MOCHILAS" },
  { image: "/canguros-merch.jpg", text: "CANGUROS" },
  { image: "/folders-merch.jpg", text: "FOLDERS" },
  { image: "/maletines-merch.jpg", text: "MALETINES" },
  { image: "/peluches-merch.jpg", text: "PELUCHE" },
];

export default function MerchPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 mt-8">
        Ventas y merchandising
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {merchItems.map((item, index) => (
          <NavBarItem
            key={index}
            href=""
            src={item.image}
            alt={item.text}
            title={item.text}
          />
        ))}
      </div>
    </div>
  );
}
