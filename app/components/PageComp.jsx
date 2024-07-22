export default function PageComp({ title, children }) {
  return (
    <>
      <h2 className="text-3xl lg:text-4xl font-bold text-black flex items-center justify-center m-10">{title}</h2>
      <div className="flex flex-wrap justify-center gap-12">{children}</div>
    </>
  );
}
