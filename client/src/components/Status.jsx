import React from "react";



function Status(props) {
   
    console.log(props)
return(
    <div className="status">
    <ul>
        <li className='alarmsheader'> <span>Bat</span><span>Sens</span><span>Señal</span></li>
     {props.status.map((el)=><li className = 'statusitem'>{el.station}<div className='leds'><span className='bateria' style={{backgroundColor:el.picture.includes('B')?'red':'green'}}></span><span className='sonda' style={{backgroundColor:el.picture.includes('S')?'red':'green'}}></span><span className='signal' style={{backgroundColor:el.picture.includes('A')?'red':'green'}}></span></div></li>)}   
     </ul>
    </div>
)    
}

export default Status