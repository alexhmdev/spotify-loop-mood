export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { code } = req.body;
    if (!code) {
      return res.status(400).json({
        ok: false,
        message: 'Code not received',
      });
    }

    try {
      let body = {
        code,
        redirect_uri: process.env.URL,
        grant_type: 'authorization_code',
      };
      const formBody = Object.keys(body)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(body[key])
        )
        .join('&');
      const getAccessToken = await fetch(
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

      const responseToken = await getAccessToken.json();
      console.log(responseToken);
      res.status(200).json({
        ok: true,
        message: 'Authenticated',
        responseToken,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        message: 'Authenticated',
        responseToken: null,
        error,
      });
    }
  } else {
    res.status;
  }
}
