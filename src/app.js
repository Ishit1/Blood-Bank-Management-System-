const express= require('express')
require('./db/mongoose')
const path=require('path')
const donorRouter=require('./routers/donor')
const BBregRouter= require('./routers/BBreg')
const patientrouter=require('./routers/patient')
var bodyParser = require('body-parser')
require('dotenv').config() 

const app=express() 
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(express.json());

const loadhtml=path.join(__dirname+'/../public')
app.use(express.static(loadhtml))


app.set('views', path.join(__dirname, '/../views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(donorRouter)
app.use(BBregRouter)
app.use(patientrouter)
app.get('/',(req,res)=>{
    res.render('index.html')
})

const port = process.env.PORT;
app.listen(port,()=>{
    console.log('server running at '+ port)
})

