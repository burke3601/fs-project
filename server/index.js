require('dotenv').config();    // don't forget to require dotenv
const http = require('http')
const express = require ('express')
const {getData , addData} = require('./utils')
const morgan = require('morgan');
const helmet = require('helmet');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const path = require('path');



 const fs = require('fs')

const app = express()
const server = http.createServer(app)

app.use(express.json())

// const { DataTypes } = require('sequelize/types')

//express.static('public')
app.use(express.static('public'))
const logger = morgan('dev')

const {
    riverControllers,
    userController,
    
} = require('./controllers') 


app.use(session({
    store: new FileStore(),             // store in files on the server
    secret: process.env.SESSION_SECRET, // the secret is like a 2-way encryption key 
    saveUninitialized: false,           // Chris does not know what this does. Or the next two
    resave: true,
    rolling: true,
    cookie: {                           // "magic band"
        maxAge: 1000 * 60 * 60 * 24 * 7 // how miliseconds until it expires, 1 week
    }
}));



app.use('/api/rocja', riverControllers.fullRiverData)

app.use('/api/getStation/:name',riverControllers.stationData)
    
app.use('/api/getStationByPeriod/:period/:station',riverControllers.stationDataByPeriod)

app.use('/api/getStatus', riverControllers.getStatus)

app.use('/api/naranjo', riverControllers.fullRiverData)

app.post('/api/user/login', userController.processLogin)

app.get('/api/picture', (req, res)=>{
    console.log('picture')
    res.sendFile(
        '/home/matt_linux/DigitalCraftsNew/express-api-demo/public'
    )
})
app.get('/api/users/login-status', (req, res)=>{
    if (req.session.user){
        res.status(200).send('ok')
    }else{
        res.status(400).send('not ok')
    }
})

app.post("/api/logout", userController.processLogout)
//commented out so it only runs on Matt's computer

// setInterval(()=>{
//     getData()
//     .then(addData)
//   },1000*60*15)
//   getData()
//   .then(addData)

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

server.listen(4000, ()=>{
    console.log(`Express API listening on port 4000`)
})