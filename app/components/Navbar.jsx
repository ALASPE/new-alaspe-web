import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-around items-center px-12 pt-8 pb-12 bg-[#175935]">
          <Image
            src="/logo_alaspe.png"
            width={100}
            height={100}
            alt="Logo Cooperativa"
            className="hidden md:block"
          />
          <h1 className="text-white font-bold text-lg md:text-3xl text-center">
            Cooperativa de Servicios Múltiples Alas Peruanas
          </h1>
          <Link
            className="hidden md:flex bg-[#F74E0F] py-1 px-8 text-white rounded-xl border border-white"
            href="http://190.12.83.18/portal/ConsulNet/default.aspx"
          >
            Acceso a Socios
          </Link>
        </div>
        <div className="bg-[#209F63]">
          <ul className="flex pl-8 text-white text-sm">
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/">
              Inicio
            </Link>
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/servicios">
              Servicios
            </Link>
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/beneficios">
              Beneficios
            </Link>
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/convenios">
              Convenios
            </Link>
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/nosotros">
              Nosotros
            </Link>
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/asociado">
              Asociado
            </Link>
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/comunicado">
              Comunicados
            </Link>
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/contacto">
              Contacto
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
