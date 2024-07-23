export default function PageComp({ title, children }) {
  return (
    <>
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-green-700 flex items-center justify-center m-10">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-12">{children}</div>
      </div>
    </>
  );
}
