export default function handler(req, res) {
  const scope = 'user-read-private user-read-email';
  res.status(200).json({
    ok: true,
    url: `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.CLIENT_ID}&scope=${scope}&redirect_uri=${process.env.URL}`,
  });
}
