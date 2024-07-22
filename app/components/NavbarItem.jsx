import Image from "next/image";
import Link from "next/link";

export default function NavBarItem({ href, src, alt, title, text }) {
  return (
    <Link href={href}>
      <div className="p-4 sm:p-6 max-w-xs sm:max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="shrink-0">
          <Image
            className="h-auto w-auto max-w-full max-h-full"
            src={src}
            alt={alt}
            width={250}
            height={250}
          />
        </div>
        <div className="text-base lg:text-lg font-medium text-black text-center">{title}</div>
      </div>
    </Link>
  );
}
