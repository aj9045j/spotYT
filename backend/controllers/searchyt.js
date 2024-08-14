const { searchVideo } = require('../service/searchVideo');
const { playMusic } = require('../service/playMusic');

async function searchyt(req, res){
    const query = await req.body.query;
    console.log(query);
    try{
        const videoId = await searchVideo(query);
        const response = await playMusic(videoId);
        const thumbnailUrl = await response.thumbnailUrl;
        const downloadUrl = await response.audioUrl;
        res.status(200).json({thumbnailUrl: thumbnailUrl,downloadUrl: downloadUrl});
    }
    catch{

    }
}

module.exports = {
    searchyt,
}