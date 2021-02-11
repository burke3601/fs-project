require('dotenv').config()
const { Data } = require('./models')

stationList = ["Pueblo Nuevo","Entre Rios", "Rocja Pontila","La Paz", "La Playa","Sintana","La Virgen"]
async function addData(station){

    const data = await Data.findAll({
        where: {
            station: station 
        }
    })
    
    
    const filteredArr = data.reduce((acc, current) => {
        const x = acc.find(item =>((item.timeStamp).toString()) === (current.timeStamp).toString());
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      let repeatsArr = []
      data.map((e)=>{
          if(filteredArr.includes(e)){

          }else{
            repeatsArr.push(e);
          }
          
      })
      console.log(data.length)
      console.log(filteredArr.length)
      console.log(repeatsArr.length)
      repeatsArr.map((e)=>{
          Data.destroy({
            where: {
                id: e.id
            }
        })
      })
      
    }



stationList.map((e)=>{
    addData(e)
})


  


// [2, 3, 4, 5, 6, 7, 32]
