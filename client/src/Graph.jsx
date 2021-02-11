import React, { useEffect } from 'react'
import {Line} from 'react-chartjs-2'
import './App.css';



function Graph(props){
        console.log(props)
        console.log(props.data)
        if (props && props.data && props.data.map){
          let filteredDates = []
          let newDates =[]
          let dates = []
          //gets times
          props.data.map(a=>{
            dates.push(a.timeStamp)

            filteredDates = dates.filter((val, index) => dates.indexOf(val) === index)
            })
            filteredDates.map(a=>{
              let b = a.slice(5,16)
              let c = b.replace("T", " ")
              newDates.push(c)
            })

          console.log(newDates)
          let est = []
          let newEst = []
          //gets stations
          props.data.map(a=>{ 
            est.push(a.station)
            newEst = est.filter((val, index) => est.indexOf(val) === index)
          })
          console.log(newEst)
          let levels = []
          newEst.forEach(el=>{
           // console.log(el)
            let lev = []
            for(let i=0; i < props.data.length; i++){
              
              if(props.data[i].station == el){
                lev.push(props.data[i].level)
              }
            }levels.push(lev)
            console.log(levels)
            
          })
          
   
    const state = {
        
        labels: newDates,
        datasets: newEst.map((sta, index) =>{
        
            const r = Math.floor(Math.random() * 256)
            const g = Math.floor(Math.random() * 256)
            const b = Math.floor(Math.random() * 256)
            
            const color  = [r,b,g]
          
            let alertColor = ''
            if(levels[levels.length - 1] < 5){
              alertColor = 'green' 
              
            }else if(levels[levels.length - 1] > 5 && levels[levels.length - 1] < 10){
              alertColor = 'orange' 
            }else if(levels[levels.length - 1] > 10){
              alertColor = 'red' 
            }
          return {
            
            label: sta,
            fill: true,
            lineTension: 0.5,
            backgroundColor: `rgba(${color},.1)`,
            borderColor: `rgba(${color},2)`,
            borderWidth: 2,
            data: levels[index]
          }
        }),
      }
      
    
      return (
        
       
       
        <div className="graph" >
        
          <Line
            data={state}
            height={400}
            width={600}
              options={{
                  maintainAspectRatio: false,
                  scales: {
                      yAxes: [{
                          ticks: {
                            suggestedMin: 0,
                            suggestedMax: 20
                              
                          }
                      }],
                      xAxes: [{
                        ticks: {
                          suggestedMin: 20,
                          suggestedMax: 100
                            
                        }
                    }]
                  }
              }}

          />
        </div>
        
        )
    }else{
      return null
    }
}
  
    



export default Graph