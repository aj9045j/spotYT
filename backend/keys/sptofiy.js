const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: '343ef971cb544d1f8dbbcaba0335bd25',
    clientSecret: 'ce9d643c06e74aa580417759e2abe8ba',
    redirectUri: 'http://15.207.196.70' // Update with your redirect URI
});

module.exports = {
    spotifyApi,
}