const playlist = require('../models/playlist.js')
const SpotifyWebApi = require('spotify-web-api-node');
const User = require('../models/users.js');
const { spotifyApi } = require('../keys/sptofiy.js')
const Song = require('../models/song.js');

async function redirectAuth(req, res) {
    try {


        // Generate authorization URL
        const authorizeURL = spotifyApi.createAuthorizeURL(['playlist-read-private'], 'state');

        res.status(200).json({ authorizeURL: authorizeURL });
        // Redirect the user to Spotify's authorization page
        // res.redirect(authorizeURL);
    } catch (err) {
        console.error('Error redirecting to Spotify authorization page:', err);
        res.status(500).send('Error redirecting to Spotify authorization page');
    }
}

async function searchPlaylist(req, res) {

    const { url, code, email } = req.body;
    const user = await User.findOne({ email });


    try {


        const data = await spotifyApi.authorizationCodeGrant(code);
        const accessToken = data.body.access_token;
        spotifyApi.setAccessToken(accessToken);

        // Extract playlist ID from the URL provided by the user
        const playlistUrl = url;
        const playlistIdPattern = /playlist\/([a-zA-Z0-9]+)/;
        const match = playlistUrl.match(playlistIdPattern);
        const playlistId = match[1];
        // console.log(playlistId);

        const tracks = await spotifyApi.getPlaylistTracks(playlistId);

        // Check if the playlist is empty
        if (tracks.body.items.length === 0) {
            throw new Error('Playlist is empty or does not exist.');
        }

        // Extract song information
        const songs = tracks.body.items.map(item => ({
            name: item.track.name,
            artists: item.track.artists.map(artist => artist.name),
            imageUrl: item.track.album.images.length > 0 ? item.track.album.images[0].url : null // Get the first image URL of the album
        }));
        const songList = tracks.body.items.map(item => `${item.track.name} - ${item.track.artists.map(artist => artist.name).join(', ')}`);

        const newPlaylist = new playlist({
            userid: user._id,
            playlistName: playlistId,
            songs: songList
        });

        await newPlaylist.save();
        // Log song information
        songs.forEach(async song => {

            const newSong = new Song({
                name: `${song.name} - ${song.artists.join(', ')}`,
                imageurl: song.imageUrl
            });
            await newSong.save();
        });

        res.send('Playlist tracks retrieved successfully!');
    } catch (err) {
        console.error('Error retrieving playlist tracks:', err);
        res.status(500).send('Error retrieving playlist tracks: ' + err.message);
    }



}

module.exports = {
    searchPlaylist,
    redirectAuth
}