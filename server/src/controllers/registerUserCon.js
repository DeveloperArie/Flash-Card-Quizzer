import UserModel from '../models/user.js'
import jwt from 'jsonwebtoken'

export async function registerUserCon(req, res){
    const {username, password} = req.body
    const user = await UserModel.findOne({ username }).exec()
    if(user) {
        res.status(500)
        res.json({
            message: 'user already exists'
        })
        return
    }
    const u = await UserModel.create({username, password})
    const userObject = u.toObject()
    delete userObject.password
    console.log({userObject})
    const token = jwt.sign(username, 'super-secret-password')
    console.log({token})
    res.json({
        token,
        user: userObject
    })
}
