import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Menu() {
  const router = useRouter();
  const { access_token, refresh_token } = router.query;
  return (
    <div className="grid h-screen place-content-center gap-5">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-4xl font-extrabold">
        Choose an option
      </h1>
      <div className="flex justify-center gap-3">
        <Link
          href={{ pathname: '/loop', query: { access_token, refresh_token } }}
          passHref={true}
          className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-red-500 text-2xl font-extrabold"
        >
          Loop
        </Link>
        <Link
          href={{ pathname: '/top', query: { access_token, refresh_token } }}
          className="text-transparent bg-clip-text bg-gradient-to-l from-indigo-300 to-pink-600 text-2xl font-extrabold"
        >
          Top
        </Link>
      </div>
    </div>
  );
}
