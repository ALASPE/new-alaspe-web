import Image from "next/image";
import Link from "next/link";

export default function NavBarItem({ href, src, alt, title, text }) {
  return (
    <Link href={href}>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="shrink-0">
          <Image
            className="h-250 w-250"
            src={src}
            alt={alt}
            width={250}
            height={250}
          />
        </div>
        <div className="text-xl font-medium text-black">{title}</div>
      </div>
    </Link>
  );
}
