require('dotenv').config()
const { Data } = require('../models')
const { Op } = require('sequelize')

const fullRiverData = async (req, res) =>{
    let river = ''
    console.log(req.baseUrl)
    if(req.baseUrl == '/api/rocja'){
        river = 'Rio Rocja Pontila'
    }else if(req.baseUrl == '/api/naranjo'){
        river = 'Rio Naranjo'
    }
    const data = await Data.findAll({
        limit: 200,
        where: {
            river: river
        }
    })
    console.log(data.length)
    res.json(data)

}
const stationData = async (req, res) =>{
    console.log('Here is stationData')
    console.log(req.params)
   
    const data = await Data.findAll({
        limit: 50,
        where: {
            station: req.params.name
        }
    })
    console.log('************')
    //console.log(data)
    res.json(data)
    
    
}
const stationDataByPeriod = async (req, res) =>{

    console.log(typeof (req.params.period))

    let hora = parseInt(req.params.period )
    console.log(typeof hora)
    console.log(req.params.period)
    console.log(req.params.station)

    if(req.params.station === "Rio Rocja Pontila" || req.params.station === "Rio Naranjo"){
        let today = new Date().getTime()
        let period = new Date().getTime()
        
        if(req.params.period ==="day"){
            period = new Date(new Date().setDate(new Date().getDate() - 1));
        }else if(req.params.period ==="week"){
            period = new Date(new Date().setDate(new Date().getDate() - 7));
        }else if (req.params.period ==="month"){
            period = new Date(new Date().setDate(new Date().getDate() - 30));
        }else if (typeof (hora) == 'number'){
            let time = new Date();
            today = time.setHours(time.getHours() - 6)
            period = time.setHours(time.getHours() - (hora))
        }else {
            time = new Date();
            today= time.setHours(time.getHours() - 6)
            period = time.setHours(time.getHours())
        }
        console.log(period)
        console.log(hora)
        console.log(today)
        const data = await Data.findAll({
            where: {
                river: req.params.station,
                timeStamp: {
                    [Op.between]: [period, today]
                }
                
            }
        })
        console.log('************')
        console.log(data.length)
        res.json(data) 
    }else{
        
            let today = new Date().getTime()
            let period = new Date().getTime()
            
            if(req.params.period ==="day"){
                period = new Date(new Date().setDate(new Date().getDate() - 1));
            }else if(req.params.period ==="week"){
                period = new Date(new Date().setDate(new Date().getDate() - 7));
            }else if (req.params.period ==="month"){
                period = new Date(new Date().setDate(new Date().getDate() - 30));
            }else if (typeof (hora) == 'number'){
                let time = new Date();
                today = time.setHours(time.getHours() - 6)
                period = time.setHours(time.getHours() - (hora))
            }else {
                time = new Date();
                today= time.setHours(time.getHours() - 6)
                period = time.setHours(time.getHours())
            }
            console.log(period)
            console.log(hora)
            const data = await Data.findAll({
                where: {
                    station: req.params.station,
                    timeStamp: {
                        [Op.between]: [period, today]
                    }
                    
                }
            })
            console.log('************')
            console.log(data.length)
            res.json(data)
        }
 
    
}

module.exports = {
    fullRiverData,
    stationData,
    stationDataByPeriod
}