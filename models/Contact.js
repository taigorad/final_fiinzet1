import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    email : {
        type : String,
        //required : true,
        //unique : true
    },
    phone : {
        type : Number,
        // required : true 
    },
    name : {
        type : String,
        length : 50
    },
    status : {
        type : String,
        // required : true 
    },
    pincode : {
        type : Number,
    },
    city : {
        type : String,
        length : 50
    }
},{
    timestamps :true
})

const Contact = mongoose.model('Conatct',contactSchema)

export default Contact  