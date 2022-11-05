export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { refresh_token } = req.body;
    if (!refresh_token) {
      return res.status(400).json({
        ok: false,
        message: 'refresh_token not received',
      });
    }

    let body = {
      refresh_token,
      grant_type: 'refresh_token',
    };
    const formBody = Object.keys(body)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(body[key])
      )
      .join('&');
    console.log(formBody);
    const getRefreshedToken = await fetch(
      'https://accounts.spotify.com/api/token',
      {
        method: 'POST',
        headers: {
          Authorization: 'Basic ' + process.env.AUTH_TOKEN,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      }
    );
    const refreshedToken = await getRefreshedToken.json();

    res.status(200).json({
      ok: true,
      message: 'Token refreshed',
      ...refreshedToken,
    });
  } else {
    res.status;
  }
}
