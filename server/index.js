const http = require('http')
const express = require ('express')

 const fs = require('fs')

const app = express()
const server = http.createServer(app)

const morgan = require('morgan')
const { static } = require('express')

//express.static('public')
app.use(express.static('public'))
const logger = morgan('dev')

var text = fs.readFileSync("./MENSAJES.txt",{encoding:'utf8', flag:'r'});



const data = []   
const exes = /x*/
var textByLine = text.split("\\r\\n")
//console.log(textByLine)
for (let line of textByLine){
    //splits mensaje.txt on commas
    const parts = line.split(',')
    //chooses string with 'SENSOR' Included
    for(let part of parts){
        let hasExes = part.match(exes)
        //console.log(`**************${hasExes}**************`)
            if (part.includes(hasExes)){
                data.push(part)
              
            } 
        }
        // console.log(`**************${data}**************`)
    }

const id = /Device id:(\d{8})/
const level = /[+-]?([0-9]*[.])?[0-9]+/
const time = /[0-3][0-9]:[0-5][0-9]/
const date = /(\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]))/
const usableData =[]
let river = ''
let departamento = ''
for(let d of data){
    let Id = d.match(id)?d.match(id)[1]:null
    let Level = parseFloat(d.match(level))
    if(Id == '50202002'){
        river = 'Rio Naranjo'
        station = 'La playa'
        departamento = 'San Marcos'

    }
    else if(Id == '50202001'){
        river = 'Rio Naranjo'
        station = 'Pueblo Nuevo'
        departamento = 'San Marcos'
    }
    else if(Id == '50202004'){
        river = 'Rio Naranjo'
        station = 'La Virgen'
        departamento = 'San Marcos'
    }
    else if(Id == '50202003'){
        river = 'Rio Naranjo'
        station = 'Sintana'
        departamento = 'San Marcos'
    }
    else if(Id == '50201002'){
        river = 'Rio Rocja Pontila'
        station = 'La Paz'
        departamento = 'Alta verapaz'
        }
    else if(Id == '50201003'){
        river = 'Rio Rocja Pontila'
        station = 'Rocja Pontila'
        departamento = 'Alta verapaz'
        }   
    else if(Id == '50201001'){
        river = 'Rio Rocja Pontila'
        station = 'Entre Rios'
        departamento = 'Alta verapaz'
        }   
    
        
    
    try {
        let Time = d.match(time)[0]
        let Date = d.match(date)[0]
        const dataObject = {
            Id,
            Level,
            Time,
            Date,
            river,
            station,
            departamento
        }
    usableData.push(dataObject)
        
    }catch{

    } 
}

const getRiver = ()=> {
    const rivers = []

}
// var q = new Date();

// var m = q.getMonth()+1;
// var d = q.getDay();
// var y = q.getFullYear().toString();
// var mon = y.slice(2,4)
// var now = ''
// if(d < 10||m<10){
//     now = `${mon}/0${m}/0${d}`
// }
// console.log(now)

// var dat = new Date(y,m,d);

// let rocjaData = usableData.filter( d => d['river'] == 'Rio Rocja Pontila' )
// console.log(rocjaData)
//let naranjoData = usableData.filter( data => data['river'] == 'Rio Naranjo' )
//console.log(naranjoData)

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