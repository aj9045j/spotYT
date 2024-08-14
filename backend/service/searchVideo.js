const { youtube } = require('../keys/youtube');

async function searchVideo( query ){

    const response = await youtube.search.list({
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 1,
    });

    const searchResults = response.data.items;

    if (searchResults.length > 0) {
        return  searchResults[0].id.videoId;
    }

}

module.exports = {
    searchVideo,
}