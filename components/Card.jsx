export default function Card({ title, description, footer }) {
  return (
    <div className="bg-white text-black rounded-lg p-3 border-solid border-2 border-r-purple-300 border-t-purple-400 border-b-purple-500 border-l-purple-600">
      <h1 className="text-2xl  md:text-3xl font-bold">{title}</h1>
      <p className="text-xl  md:text-2xl">{description}</p>
      <footer className="text-xl">{footer}</footer>
    </div>
  );
}
