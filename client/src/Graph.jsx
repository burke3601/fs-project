import React from 'react'
import {Line} from 'react-chartjs-2'
import './App.css';



function Graph(props){
        console.log(props)
        
        if (props.data.results){
          let newDates =[]
        props.data.results.map(a=>{
          let dates = []
          a.map((a)=>dates.push(a.Time))
          newDates = dates.filter((val, index) => dates.indexOf(val) === index)
          })
        //console.log(newEst)
        //console.log(`here are the labels${est}`)
        //console.log(typeof(lab))
    const state = {
        
        labels: newDates,
        datasets: props.data.results.map(a=>{ 
            let est = []
            a.map((a)=>est.push(a.station))
            let newEst = est.filter((val, index) => est.indexOf(val) === index)

            const r = Math.floor(Math.random() * 256)
            const g = Math.floor(Math.random() * 256)
            const b = Math.floor(Math.random() * 256)
            
            const color  = [r,b,g]
            
             console.log(newEst)
          return {
            label: newEst,
            fill: true,
            lineTension: 0.5,
            backgroundColor: `rgba(${color},.2)`,
            borderColor: `rgba(${color},1)`,
            borderWidth: 1,
            data: a.map((d)=>d.Level)
          }
        }),
        
        
      }
     
      return (
        <div className="graph">
        
          <Line
            data={state}
            height={400}
            width={600}
              options={{
                  maintainAspectRatio: false,
                  scales: {
                      yAxes: [{
                          ticks: {
                              
                          }
                      }]
                  }
              }}

          />
        </div>
        )
    }
}
    
//     return(
//         <>
//         <div className='graph'>
            
//             <Line 
//             data ={{
//                 labels: ['spot 1', 'spot 2', 'spot 3', 'spot 4', 'spot 5', 'spot 6', 'spot 7'],
//             datasets: [
//                 {
//                     label: 'Custom River 1 Label (Levels?)',
//                     data: [-1, 6, 3, 9, 7, 13, 4],
//                     backgroundColor: ['rgba(155, 89, 179, .2)'],
//                     borderColor: ['rgba(154, 18, 179, 1)'],
//                     borderWidth: 1
//                 },
//                 {
//                     label: 'Custom River 2 Label (Levels?)',
//                     data: [3, 6, 2, 11, 6, 7, 10],
//                     backgroundColor: ['rgba(66, 245, 152, .2)'],
//                     borderColor: ['rgba(116, 184, 142, 1)'],
//                     borderWidth: 1
//                 },
//                 {
//                     label: 'Custom River 3 Label (Levels?)',
//                     data: [1, 8, 5, 11, 15, 3, 2],
//                     backgroundColor: ['rgba(224, 49, 49, .2)'],
//                     borderColor: ['rgba(161, 63, 63, 1)'],
//                     borderWidth: 1
//                 },
                
//             ]


//             }}
//             height={400}
//             width={600}
//             options={{
//                 maintainAspectRatio: false,
//                 scales: {
//                     yAxes: [{
//                         ticks: {
                            
//                         }
//                     }]
//                 }
//             }}

//             />
//         </div>

        


//         </>
//     )
// }


export default Graph