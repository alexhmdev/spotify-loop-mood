import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AppTitle from '../components/AppTitle';
import Card from '../components/Card';

export default function Loop() {
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
      fetchLoop();
    }
  }, [token]);

  const refreshToken = async (access_token, refresh_token) => {
    const getRefreshedToken = await fetch('/api/auth/refresh_token', {
      method: 'POST',
      body: JSON.stringify({
        access_token: access_token ?? router.query.access_token,
        refresh_token: refresh_token ?? router.query.refresh_token,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await getRefreshedToken.json();
    console.log(response);
    setToken(response.access_token);
  };

  const fetchLoop = async () => {
    try {
      const getLoop = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1Epf4E2FbNeJOj`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        }
      );
      const response = await getLoop.json();
      console.log(response.tracks.items);
      setTracks(response.tracks.items.map((item) => item.track));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid h-screen place-items-center">
      <AppTitle title=" Loop ∞" />
      <div className="mt-12">
        <Card title="- Inside the loop" footer="∞">
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
        </Card>
      </div>
    </div>
  );
}
