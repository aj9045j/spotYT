const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'process.env.SPOTIFY_CLIENT_ID',
    clientSecret: 'process.env.SPOTIFY_CLIENT_SECRET',
    redirectUri: 'process.env.DOMAIN_NAME' // Update with your redirect URI
});

module.exports = {
    spotifyApi,
}
