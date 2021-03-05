require('dotenv').config()
const ftp = require("basic-ftp")
const fs = require('fs')
const { Data } = require('./models')



async function addData(){
    
    var text = fs.readFileSync("./MENSAJES.txt",{encoding:'utf8', flag:'r'});
    
    const data = []   
    const exes = /x*/
    var textByLine = text.split("\\r\\n")
    // console.log(textByLine)
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
            console.log(`**************${data}**************`)
        }
    const alarma = /ALARMA:([A-Z]*)/
    const id = /Device id:(\d{8})/
    const level = /[+-]?([0-9]*[.])?[0-9]+/
    const time = /[0-3][0-9]:[0-5][0-9]/
    const date = /(\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01]))/
    const usableData =[]
    let river = ''
    let departamento = ''
    let Time = ''
    let newDate = ''
    let counter = 0
    for(let d of data){
        
        let picture = d.match(alarma)?d.match(alarma)[1]:null
        console.log(picture)
        let Id = d.match(id)?d.match(id)[1]:null
        // console.log(Id)
        let Level = parseFloat(d.match(level))
        console.log(`$$$$$$$$$$$$$$$$$${Level}$$$$$$$$$$$$$$$$$$$$`)
        if(Id == '50202002'){
            river = 'Rio Naranjo'
            station = 'La Playa'
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
        
            
        if(counter > 0 && d.match(time)){
            try {
                // console.log(d.match(time),"d.match")
                Time = d.match(time)[0]
                newDate = d.match(date)[0]
                
                var m = newDate.slice(3,5)
                var day = newDate.slice(6,8);
                var y = newDate.slice(0,2);
                var min = Time.slice(3,5)
                var hour = Time.slice(0,2)

                // if (hour< 6){
                //     hour = hour
                // } else{
                //     hour = hour-6
                // }
        
                var dat = new Date('20'+y, m-1, day,hour, min);
                
                await Data.create({
                    stationId: Id,
                    level: Level,
                    timeStamp: dat,
                    river: river,
                    station:station,
                    departamento,
                    picture
            });    
            // console.log(newData)
        
            }catch (error){
                console.log(error)
            } 
        }
        // console.log(counter,"before")
        counter++
        // console.log(counter,"after")
    }
        //console.log(Data)
}

 
function getData() {
    return new Promise(async (resolve, reject)=>{
        console.log("begins function")
        const client = new ftp.Client()
        //client.ftp.verbose = true
        console.log("verbose whatever")
        try {
            console.log('inside try')
            await client.access({
                host: process.env.SERVER,
                user: 'ftptest',
                password: process.env.PASSWORD
                // secure: true
                
            })
            await client.cd('ftp/sensores')
            await client.downloadTo( "MENSAJES.txt","MENSAJES.txt")
            // (new Date()).getTime()+
            console.log(await client.list())
            resolve()
        }
        catch(err) {
            console.log(err)
            reject(err)
        }
        client.close()
    })
}


module.exports = {
    getData,
    addData
}
