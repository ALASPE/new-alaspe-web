import Image from "next/image";
import Link from "next/link";

export default function NavBarItem({ href, src, alt, title, text }) {
  return (
    <Link href={href}>
      <div className="p-4 sm:p-6 max-w-xs sm:max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="shrink-0">
          <div className="relative w-56 h-56">
            <Image
              className="object-contain"
              src={src}
              alt={alt}
              layout="fill"
              sizes="100%"
            />
          </div>
        </div>
        <div className="text-base lg:text-lg font-medium text-black text-center">{title}</div>
        <p className="text-gray-600">{text}</p>
      </div>
    </Link>
  );
}