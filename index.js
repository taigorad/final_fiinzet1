const PORT = process.env.PORT || 8000
import path from "path"
import express from 'express'
import cors from 'cors'
const app = express()

// Connecting to the database 
import db from './config/mongoose.js'

// Enable CORS 
app.use(cors())

// Enabling Body Parser 
app.use(express.urlencoded())
// app.use(express.json())


app.use(express.static(path.join(__dirname,"./client/build")))
app.get("*",(req,res)=>{
res.sendFile(path.join(__dirname,"./client/build/index.html"))
})

// Mapping routes 
import router from './routes/index.js'
app.use('/',router)

// Listening to the Port 
app.listen(PORT , err=>{
    if(err){
        console.log('ERROR : Unable to listen at the PORT',PORT)
        return 
    }
    console.log('LOG : Successfully connected to the PORT at ',PORT)
})
