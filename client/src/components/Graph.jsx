import React, { useEffect } from 'react'
import {Line} from 'react-chartjs-2'
// import './App.css';



function Graph(props){
        //console.log(props)
      
     
       
        if (props && props.data && props.data.map){

          //filter try

          // console.log(props.data.sort(function(a,b){
          //   return a.id - b.id
          // })
          //)
          // let newIds
          // props.data.map(a=>{ 
          //   est.push(a.ID)
          //   filterIds = est.filter((val, index) => est.indexOf(val) === index)


          let filteredDates = []
          let newDates =[]
          let displayDates =[]
          let dates = []
          //gets times
          props.data.map(a=>{
            dates.push(a.timeStamp)

            // filteredDates = dates.filter((val, index) => dates.indexOf(val) === index)
            })
            dates.map(a=>{
              let b = a.slice(5,16)
              let c = b.replace("T", " ")
              newDates.push(c)
            })

            
              displayDates = newDates.filter((val, index) => newDates.indexOf(val) === index)
            

          //console.log(newDates)
          //console.log(newDates.length)

         
          let est = []
          let newEst = []
          //gets stations
          props.data.map(a=>{ 
            est.push(a.station)
            newEst = est.filter((val, index) => est.indexOf(val) === index)
          })
          //console.log(newEst)
          let levels = []
          newEst.forEach(el=>{
           // console.log(el)
            let lev = []
            for(let i=0; i < props.data.length; i++){
              
              if(props.data[i].station === el){
                lev.push(props.data[i].level)
              }
            }levels.push(lev)
            //console.log(levels)
            
          })
         let backcolor = ''
          let bordcolor = ''
          let color = ''
        const state = {
        
        labels: displayDates,
        datasets: newEst.map((sta, index) =>{
              if(sta === "Sintana"){
                backcolor = 'rgba(255, 0, 0, 0.1)'
                bordcolor =  'rgba(255, 0, 0, 0.4)'
              }else if (sta === "Rocja Pontila"){
                backcolor = 'rgba(0, 255, 0, 0.1)'
                bordcolor =  'rgba(0, 255, 0, 0.4)'
                
              }else if (sta === "La Virgen"){
                backcolor = 'rgba(200, 0, 200, 0.1)'
                bordcolor =  'rgba(200, 0, 200, 0.4)'
                
              }else if (sta === "Pueblo Nuevo"){
                backcolor = 'rgba(0, 200, 0, 0.1)'
                bordcolor =  'rgba(0, 200, 0, 0.4)'
                
              }else if (sta === "Entre Rios"){
                backcolor = 'rgba(200, 100, 200, 0.1)'
                bordcolor =  'rgba(200, 100, 200, 0.4)'
                
              }else if (sta === "La Paz"){
                backcolor = 'rgba(0, 0, 255, 0.1)'
                bordcolor =  'rgba(0, 0, 255, 0.4)'
                
              }else if (sta === "La Playa"){
                backcolor = 'rgba(55, 10, 100, 0.1)'
                bordcolor =  'rgba(55, 10, 100, 0.4)'
                
              
            // const r = Math.floor(Math.random() * 256)
            // const g = Math.floor(Math.random() * 256)
            // const b = Math.floor(Math.random() * 256)
            
            // color  = [r,b,g]
        }
       console.log(color)
          

           

          return {
            
            label: sta,
            fill: true,
            lineTension: 0.5,
            backgroundColor: backcolor,
            borderColor: bordcolor,
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
                zoomEnabled: true,
                  maintainAspectRatio: false,
                  scales: {
                      yAxes: [{
                          ticks: {
                            beginAtZero: true,
                            suggestedMax: 20
                            
                               
                          }
                      }],
                      xAxes: [{
                        ticks: {
                          
                          
                         
                          autoSkip:true,
                          maxTicksLimit:10
                          
              
                          
                          
                            

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