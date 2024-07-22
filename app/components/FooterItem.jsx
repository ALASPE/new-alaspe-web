export default function FooterItem({ children, title }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="bg-[#209F63] w-80 flex justify-center mt-5 py-1">
          {title}
        </h3>
        <div className="pl-5 py-3 text-xs">{children}</div>
      </div>
    </>
  );
}
