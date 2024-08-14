const { getUser } = require('../service/auth');

async function userDetail(req, res){
    
    const sessionId = req.query.sessionId;

    const user = await getUser(sessionId);
    
    return res.json(user);



}

module.exports = {
    userDetail
}