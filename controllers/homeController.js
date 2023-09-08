import User from "../models/user.js";
import Contact from "../models/Contact.js";
import { contactMailer} from "../mailer/contactMailer.js";

export const contact =async(req, res) => {
    console.log('API : /contact',req.body);
    try {
        const { name, email, phone, message } = req?.body

        if (!email) {
            console.log('LOG : Email not found')
            return res.status(400).json({
                message: "Email is required"
            })
        }
        // let user = await User.findOne({email : email})
        // if(user){
        //     return res.status(400).json({
        //         message: 'User already Exists'
        //     })
        // }

        User.create({ name, email, phone, message })
            .then(user => {
                console.log('INFO : User Created Successfully')
                contactMailer(user)
                return res.status(200).json({
                    message: 'COntact Created Successfully',
                    data: user
                })
            })
            .catch(err => {
                console.log('ERROR : Unable to create user', err)
                return res.status(500).json({
                    message: "Internal srver error"
                })
            })
    } catch (error) {
        console.log('ERROR : ', err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const sendUserInput = (req, res) => {
    console.log('API : /senduserinput',req.body);
    try {
        const { name, email, phone, status, pincode, city } = req?.body

        if (!email) {
            console.log('LOG : Email not found')
            return res.status(400).json({
                message: "Email is required"
            })
        }

        Contact.create({ name, email, phone, status, pincode, city })
            .then(user => {
                console.log('INFO : Contact added successfully');
                contactMailer(user)
                return res.status(200).json({
                    message: 'User created successfully',
                    data: user
                })
            })
            .catch(err => {
                console.log('ERR : Unable to create contact')
                return res.status(500).json({
                    message: "Internal server error"
                })
            })
    } catch (err) {
        console.log('ERROR : ', err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}
