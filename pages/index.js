import Card from '../components/Card';
import { Spotify } from '@styled-icons/bootstrap/Spotify';
export default function Home() {
  const login = async () => {
    try {
      const response = await fetch('/api/login');
      const data = await response.json();
      location.replace(data.url);
    } catch (error) {
      console.log(error);
    }
  };
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
        <div className="mt-3">
          <button
            type="button"
            className="text-2xl text-white bg-green-400 rounded-full px-4 inline-flex items-center py-2.5 text-center font-medium focus:ring-white hover:bg-green-600"
            onClick={login}
          >
            <Spotify className="w-10 mr-2 h-10" />
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
