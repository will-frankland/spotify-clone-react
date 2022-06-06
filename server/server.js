const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: 'f6dc077511fb43c6b3c31bc57b4ea1ba',
    clientSecret: '89639bc25399424fbece2dc9088c5e8a'
  })

  spotifyApi.authorizationCodeGrant(code).then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in
    })
  })
  .catch(() => {
    res.sendStatus(400)
  })
})