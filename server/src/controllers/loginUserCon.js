import UserModel from "../models/user.js"
import jwt from 'jsonwebtoken'

export async function loginUserCon(req, res){
    const {username, password} = req.body
    const user = await UserModel.findOne({ username }).exec()
    if(!user || user.password !== password) {
        res.status(401)
        res.json({
            message: 'invalid login'
        })
        
    } else {
        const userObject = user.toObject()
        delete userObject.password
        const token = jwt.sign(userObject, 'super-secret-password')
        res.json({
            token,
            user: userObject
        })
    } 
}