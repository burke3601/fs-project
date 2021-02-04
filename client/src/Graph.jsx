import React from 'react'
import {Line} from 'react-chartjs-2'
import './App.css';



function Graph(){

    
    return(
        <>
        <div className='graph'>
            
            <Line 
            data ={{
                labels: ['spot 1', 'spot 2', 'spot 3', 'spot 4', 'spot 5', 'spot 6', 'spot 7'],
            datasets: [
                {
                    label: 'Custom River 1 Label (Levels?)',
                    data: [-1, 6, 3, 9, 7, 13, 4],
                    backgroundColor: ['rgba(155, 89, 179, .2)'],
                    borderColor: ['rgba(154, 18, 179, 1)'],
                    borderWidth: 1
                },
                {
                    label: 'Custom River 2 Label (Levels?)',
                    data: [3, 6, 2, 11, 6, 7, 10],
                    backgroundColor: ['rgba(66, 245, 152, .2)'],
                    borderColor: ['rgba(116, 184, 142, 1)'],
                    borderWidth: 1
                },
                {
                    label: 'Custom River 3 Label (Levels?)',
                    data: [1, 8, 5, 11, 15, 3, 2],
                    backgroundColor: ['rgba(224, 49, 49, .2)'],
                    borderColor: ['rgba(161, 63, 63, 1)'],
                    borderWidth: 1
                },
                
            ]


            }}
            height={400}
            width={400}
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

        


        </>
    )
}


export default Graph