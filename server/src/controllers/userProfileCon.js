export async function userProfileCon(req, res){
    res.json( {username: req.username})
}
