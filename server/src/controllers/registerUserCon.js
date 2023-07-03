import UserModel from '../models/user.js'

export async function registerUserCon(req, res){
    const {username, password} = req.body
    const user = await UserModel.findOne({ username }).exec()
    if(user) {
        res.status(500)
        res.send({
            message: 'user already exists'
        })
    }
    await UserModel.create({username, password})
    res.json({
        username,
        password
    })
}