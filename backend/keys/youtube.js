const { google } = require('googleapis');

// Initialize YouTube Data API client
const youtube = google.youtube({
    version: 'v3',
    auth: 'AIzaSyB41G2gA5Qz_xawiR9mkmesQvvLqxpB2xA', // Replace with your YouTube Data API key
});

module.exports = {
    youtube,
}