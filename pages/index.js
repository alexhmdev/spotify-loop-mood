import Card from '../components/Card';
export default function Home() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="text-center">
        <h1 className=" text-6xl md:text-8xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r dark:from-purple-400 dark:to-pink-600 from-blue-400 to-purple-600">
          Loop & Mood
        </h1>
        <div className="text-2xl md:text-3xl mt-3 font-semibold">
          Show your current loop on spotify and share your mood with your
          friends
        </div>
      </div>
      <div className="w-3/4 md:w-1/3">
        <Card
          title="Hola"
          description="This is the card description: Id aliqua laborum amet laboris eiusmod duis consequat ex duis Lorem reprehenderit. Laboris sit deserunt ullamco enim amet nostrud aliquip eiusmod magna. Excepteur ipsum consequat irure est quis ipsum dolore nulla consequat dolore esse excepteur."
          footer="footer"
        />
      </div>
    </div>
  );
}
