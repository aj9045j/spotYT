const ytdl = require('@distube/ytdl-core');

async function playMusic(videoId) {

    try {




        const videoInfo = await ytdl.getInfo(videoId);
        const audioFormat = await ytdl.chooseFormat(videoInfo.formats, { filter: 'audioonly' });
        const thumbnailUrl = await videoInfo.player_response.videoDetails.thumbnail.thumbnails[0].url;
        if (!audioFormat) {
            throw new Error('No audio format found for the video.');
        }

        return {
            audioUrl: audioFormat.url,
            thumbnailUrl: thumbnailUrl
        };

    } catch (error) {
        console.error('Error fetching video URL:', error);
        res.status(500).json({ message: 'Internal server error' });
    }


}



module.exports = {
    playMusic,
}