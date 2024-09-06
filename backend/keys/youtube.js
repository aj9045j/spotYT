const { google } = require('googleapis');

// Initialize YouTube Data API client
const youtube = google.youtube({
    version: 'v3',
    auth: 'process.env.YOUTUBE_API_KEY', // Replace with your YouTube Data API key
});

module.exports = {
    youtube,
}
