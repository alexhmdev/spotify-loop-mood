export default function Card({ title, children, footer }) {
  return (
    <div className="bg-slate-300 dark:bg-white text-black rounded-lg p-3 border-solid border-2 border-r-purple-300 border-t-purple-400 border-b-purple-500 border-l-purple-600">
      <h1 className="text-2xl  md:text-3xl font-bold mb-4">{title}</h1>
      <div className="text-xl  md:text-2xl m-2">{children}</div>
      <footer className="text-xl">{footer}</footer>
    </div>
  );
}
