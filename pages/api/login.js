export default function handler(req, res) {
  const scopes = 'user-read-private user-read-email user-top-read';
  res.status(200).json({
    ok: true,
    url: `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.CLIENT_ID}&scope=${scopes}&redirect_uri=${process.env.URL}`,
  });
}
