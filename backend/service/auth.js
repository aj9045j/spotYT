const usertosessionId = new Map();

async function setUser(sessionId, user){
    
    usertosessionId.set(sessionId,user);

} 

async function getUser(sessionId){

    return await usertosessionId.get(sessionId);

}

module.exports = {
    setUser,
    getUser
}