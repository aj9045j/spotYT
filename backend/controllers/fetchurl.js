
const { searchVideo } = require('../service/searchVideo');
const Song = require('../models/song');
const { playMusic } = require('../service/playMusic');

async function fetchurl(req, res) {
    try {
        const query = await req.params.query; // Accessing query directly from req.params

        console.log(query);

        // Find the song by its name
        let song = await Song.findOne({ name: query });

        if (!song) {

            const videoId = await searchVideo(query);
            song = new Song({ name: query, videoid: videoId });
            await song.save();
            console.log("New song added");

        } else if (!song.videoid) {

            // If the song found but videoid is null, update videoid and save it
            const videoId = await searchVideo(query);
            song.videoid = videoId;
            await song.save();
            console.log("Updated song with videoid");

        } else {

            console.log("Song already found in the database");

        }

        // Download the audio from YouTube as MP3
        const response = await playMusic(song.videoid);
        const downloadUrl = await response.audioUrl;
        const imageUrl = await song.imageurl;

        res.status(200).json({ downloadUrl: downloadUrl, imageUrl: imageUrl });
    } catch (error) {
        console.error('Error fetching video URL:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    fetchurl,
};
