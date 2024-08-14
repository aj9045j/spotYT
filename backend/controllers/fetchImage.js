const Song = require('../models/song');

async function fetchImage(req, res) {
    try {
        const query = req.params.query;


        const song = await Song.findOne({ name: query });

        if (song) {
            const url = song.imageurl;

            res.status(200).json({ url: url });
        } else {
            res.status(404).json({ error: "Song not found" });
        }
    } catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    fetchImage,
};
