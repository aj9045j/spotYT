const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    playlistName: {
        type: String,
        required: true
    },
    songs: {
        type: [],
    }
});

const playlist = mongoose.model('playlist', playlistSchema);

module.exports = playlist;
