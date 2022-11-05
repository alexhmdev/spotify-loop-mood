import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Spotify } from '@styled-icons/bootstrap/Spotify';
import AppTitle from '../components/AppTitle';
export default function Home() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    const { code } = router.query;
    if (code) {
      setLoggedIn(true);
      getAccessToken(code);
    }
  }, [router.query]);

  const getAccessToken = async (code) => {
    try {
      const response = await fetch('/api/auth/token', {
        method: 'POST',
        body: JSON.stringify({
          code,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.responseToken?.error) {
        console.log(data.responseToken);
        return router.push('/');
      }
      router.push({
        pathname: '/menu',
        query: {
          access_token: data.responseToken.access_token,
          refresh_token: data.responseToken.refresh_token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

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
        <AppTitle title="Loop & Mood" />
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
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
