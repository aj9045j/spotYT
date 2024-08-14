
const moongose = require('mongoose');

const songSchema = new moongose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    videoid: {
        type: String,
        unique: true
    },
    imageurl: {
        type: String,
        unique: true
    }
})

const Song = moongose.model('song', songSchema);

module.exports = Song;