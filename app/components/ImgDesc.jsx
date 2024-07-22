import Image from "next/image";
import styled from "styled-components";

export default function ImgDesc({ children, h, w,  image, desc }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row rounded-lg shadow-lg m-12 p-4 gap-12">
        <Image src={image} height={h} width={w} alt={desc} />
        <div className="flex flex-col">{children}</div>
      </div>
    </>
  );
}
