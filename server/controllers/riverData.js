require('dotenv').config()
const { Data } = require('../models')

const fullRiverData = async (req, res) =>{
    let river = ''
    console.log(req.baseUrl)
    if(req.baseUrl == '/api/rocja'){
        river = 'Rio Rocja Pontila'
    }else if(req.baseUrl == '/api/naranjo'){
        river = 'Rio Naranjo'
    }
    const data = await Data.findAll({
        where: {
            river: river
        }
    })
    res.json(data)

}
const stationData = async (req, res) =>{
    console.log('Here is stationData')
    console.log(req.params)
   
    const data = await Data.findAll({
        where: {
            station: req.params.name
        }
    })
    console.log('************')
    console.log(data)
    res.json(data)
    
    
}
module.exports = {
    fullRiverData,
    stationData
}