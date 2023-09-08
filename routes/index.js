import express from 'express'
const router  = express.Router()

import { contact , sendUserInput } from '../controllers/homeController.js'
import send from 'send'

router.post('/contact',contact)
router.post('/senduserinput',sendUserInput)
router.get("/",(req,res)=>{
    res.send("hi")
})
export default router