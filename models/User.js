import { ok } from 'assert'
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        //required: true,
        //unique: true
    },
    phone: {
        type: Number
    },
    name: {
        type: String,
        length: 30
    },
    message: {
        type: String
    }

}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User