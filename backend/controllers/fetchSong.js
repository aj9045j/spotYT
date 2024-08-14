const playlist = require('../models/playlist.js');

async function fetchSong(req, res) {
    const playlistId = req.params.playlistId;
    console.log(playlistId);
    try {
        const Playlist = await playlist.findOne({ playlistName: playlistId });

        console.log(playlistId);



        if (!Playlist) {
            console.log("no playlist");
            return res.status(404).json({ message: 'Playlist not found for the user' });
        }

        // Extract song names from the playlist and send them to the frontend

        const songNames = Playlist.songs;

        res.status(200).json({ songs: songNames });
    } catch (error) {
        console.error('Error finding playlist:', error);
        res.status(500).json({ message: 'Error finding playlist' });
    }
}

module.exports = {
    fetchSong
}
