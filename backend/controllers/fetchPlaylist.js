const User = require('../models/users');
const playlist = require('../models/playlist');

async function fetchPlaylist(req, res) {
    const email = req.params.email;
    console.log(email);
    try {
        const user = await User.findOne({ email });

        if (!user) {
            console.log('User not found with email:', email);
            return res.status(404).json({ error: 'User not found' });
        }

        const userid = user._id;
        const playlists = await playlist.find({ userid: userid });

        if (playlists.length === 0) {
            console.log('No playlists found for user:', user);
            return res.status(404).json({ error: 'No playlists found' });
        }

        // Extract only the playlist IDs
        const playlistName = playlists.map(playlist => playlist.playlistName);

        // Send response with playlist IDs
        return res.status(200).json({ playlistName });
    } catch (error) {
        console.error('Error fetching playlist:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    fetchPlaylist,
};
