import mongoose from 'mongoose'
const MONGO_URL = "mongodb+srv://brand_liberty_web:brandliberty1010@cluster0.wqfp3cw.mongodb.net/"

mongoose.connect(MONGO_URL);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Erroe connecting MOngoDB'));

db.once('open',function(){
    console.log("LOG : Successfully connected to the MONGO_URL",MONGO_URL); 
})

export default db