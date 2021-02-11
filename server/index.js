const http = require('http')
const express = require ('express')
const {getData , addData} = require('./utils')


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
    
} = require('./controllers') 




app.use('/api/rocja', riverControllers.fullRiverData)

app.use('/api/getStation/:name',riverControllers.stationData)
    
app.use('/api/getStationByPeriod/:period/:station',riverControllers.stationDataByPeriod)


app.use('/api/naranjo', riverControllers.fullRiverData)
    
app.get('/api/picture', (req, res)=>{
    console.log('picture')
    res.sendFile(
        '/home/matt_linux/DigitalCraftsNew/express-api-demo/public'
    )
})
<<<<<<< HEAD
// setInterval(()=>{
//     getData()
//     .then(addData)
//   },1000*60*15)
//   getData()
//   .then(addData)
=======
setInterval(()=>{
    getData()
    .then(addData)
  },1000*60*15)
 
>>>>>>> f7d025523ddc0c720f48b88b7383a3f3dbd3adaf
server.listen(4000, ()=>{
    console.log(`Express API listening on port 4000`)
})