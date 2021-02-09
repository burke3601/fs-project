const http = require('http')
const express = require ('express')

 const fs = require('fs')

const app = express()
const server = http.createServer(app)

const morgan = require('morgan')
const { static } = require('express')
// const { DataTypes } = require('sequelize/types')

//express.static('public')
app.use(express.static('public'))
const logger = morgan('dev')

const {
    riverControllers,
    stationData
} = require('./controllers') 

app.use('/api/rocja', riverControllers.fullRiverData)

app.use('/api/getStation/:name',riverControllers.stationData)
    

app.use('/api/naranjo', riverControllers.fullRiverData)
    
app.get('/api/picture', (req, res)=>{
    console.log('picture')
    res.sendFile(
        '/home/matt_linux/DigitalCraftsNew/express-api-demo/public'
    )
})

server.listen(4000, ()=>{
    console.log(`Express API listening on port 4000`)
})