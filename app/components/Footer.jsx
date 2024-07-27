import FooterItem from "./FooterItem";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-gradient-to-r from-green-800 to-green-600 text-white text-sm flex flex-col justify-center items-center gap-4 pb-5 mt-28">
        <div className="flex flex-wrap flex-row gap-10 lg:gap-24 align-center justify-center w-full">
          <FooterItem title="Instituciones de Interes">
            <ul className="flex gap-3 flex-col">
              <Link href="https://www.gob.pe/marina/">
                Marina de Guerra del Perú
              </Link>
              <Link href="https://www.gob.pe/ejercito">Ejército Peruano</Link>
              <Link href="https://www.gob.pe/fap">Fuerza Aérea del Perú</Link>
              <Link href="https://www.gob.pe/marina/">
                Caja de Pensión Militar Policial
              </Link>
            </ul>
          </FooterItem>
          <FooterItem title="Instituciones de Interes">
            <ul className="flex gap-3 flex-col">
              <Link href="https://www.nubefact.com/20101259448">Consulta de Comprobantes</Link>
              <Link href="/asociado/tramites">Formatos para trámites</Link>
              <Link href="/asociado/transparencia">Transparencia</Link>
              <Link href="/asociado/legislacion">Legislación</Link>
            </ul>
          </FooterItem>
          <FooterItem title="Instituciones de Interes">
            <ul className="flex gap-3 flex-col">
              <li>Dirección: Jr. Pachacútec 2052 - Jesús María - Lima</li>
              <li>Teléfonos 988440963 / 471 5207 / 471 6022 / 471 7135</li>
              <li>Horario : Lu-Vi 10:00-17:00</li>
              <li>Email : cooperativa@alaspe.pe</li>
            </ul>
          </FooterItem>
        </div>
        <div className="bg-[#209F63] py-2 px-5 my-5">
          2024 Cooperativa de Servicios Múltiples Alas Peruanas ® | Todos los
          derechos reservados
        </div>
      </div>
    </>
  );
}
