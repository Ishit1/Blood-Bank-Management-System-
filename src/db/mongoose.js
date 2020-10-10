const mongoose =require('mongoose')
// require('dotenv').config() 
mongoose.connect('mongodb://127.0.0.1:27017/blood-bank-api' ,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
})