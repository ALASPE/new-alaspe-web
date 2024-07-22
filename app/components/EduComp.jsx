import Image from "next/image";
import Link from "next/link";

export default function EduComp({ photo, title, desc, button, link }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row rounded-lg shadow-lg mx-5 p-2">
        <div className="basis-1/4 flex items-center justify-center">
          <Image src={photo} height={400} width={400} alt={title} />
        </div>
        <div className="basis-3/4 rounded-lg shadow-lg flex flex-col gap-4 px-6 pt-10">
          <h3 className="text-green-900 font-bold">{title}</h3>
          <p>{desc}</p>
          <Link
            href={link}
            className="flex justify-center text-white bg-red-600 py-1 px-3 mb-2 max-w-72 text-sm rounded-sm"
          >
            {button}
          </Link>
        </div>
      </div>
    </>
  );
}
