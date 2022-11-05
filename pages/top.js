import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AppTitle from '../components/AppTitle';
import Card from '../components/Card';

export default function Top() {
  const [token, setToken] = useState();
  const [tracks, setTracks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const { access_token, refresh_token } = router.query;
    if (access_token && refresh_token) {
      refreshToken(access_token, refresh_token);
    } else {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchTopTracks();
    }
  }, [token]);

  const refreshToken = async (access_token, refresh_token) => {
    const getRefreshedToken = await fetch('/api/auth/refresh_token', {
      method: 'POST',
      body: JSON.stringify({
        access_token,
        refresh_token,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await getRefreshedToken.json();
    setToken(response.access_token);
  };

  const fetchTopTracks = async () => {
    try {
      const getTopTracks = await fetch(
        'https://api.spotify.com/v1/me/top/tracks',
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        }
      );
      const response = await getTopTracks.json();
      setTracks(response.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid h-screen place-items-center">
      <AppTitle title="Top tracks" />
      <div className="mt-12">
        <Card footer="From Spotify">
          <ol className=" ">
            {tracks.map((track, index) => (
              <li key={index} className="flex items-center gap-2 m-2">
                <Image
                  src={track.album.images[0].url}
                  width={64}
                  height={64}
                  alt={track.name}
                />
                {index == 0 ? '👑' : `#${index + 1}`} {track.name} -{' '}
                {track.artists
                  .map((artist) => artist.name)
                  .toString()
                  .replace(/,/g, ', ')}
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </div>
  );
}
