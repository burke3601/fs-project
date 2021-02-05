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


app.get('/api/rocja',(req, res) =>{
    
    let rocja = usableData.filter( data => data['station'] == 'Rocja Pontila' )
    let laPaz = usableData.filter( data => data['station'] == 'La Paz' )
    let entreRios = usableData.filter( data => data['station'] == 'Entre Rios' )
    let rocjaData = [rocja, laPaz, entreRios]
    console.log(rocjaData)
    res.json({
        results: rocjaData,
        image: '/P21011011265810.jpg'
    })
})
app.get('/api/naranjo',(req, res) =>{
    let sintana = usableData.filter( data => data['station'] == 'Sintana' )
    let laPlaya = usableData.filter( data => data['station'] == 'La Playa' )
    let laVirgen = usableData.filter( data => data['station'] == 'La Virgen' )
    let puebloNuevo = usableData.filter( data => data['station'] == 'Pueblo Nuevo' )
    let naranjoData = [sintana, laPlaya, laVirgen, puebloNuevo]
    console.log(naranjoData)
    res.json({
        results: naranjoData,
        image: '/P21011011265810.jpg'
    })
})
app.get('/api/picture', (req, res)=>{
    console.log('picture')
    res.sendFile(
        '/home/matt_linux/DigitalCraftsNew/express-api-demo/public'
    )
})

server.listen(4000, ()=>{
    console.log(`Express API listening on port 4000`)
})