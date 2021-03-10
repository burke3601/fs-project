import React from "react";



function Status(props) {
    
     
     
return(
    <div className="status">
    <ul>
        <li className='alarmsheader'> <span>Bat</span><span>Sens</span><span>Señal</span><span>Nivel</span></li>
     {props.status.map((el)=><li className = 'statusitem'><div className="stationandlevel"><div className='station'>{el.station}</div><div className="nivel">{el.level}</div></div><div className='leds'><span className={el.picture.includes('B')?'bateriaroja':'bateriaverde'} style={{backgroundColor:el.picture.includes('B')?'red':'green'}}></span><span className={el.picture.includes('S')?'bateriaroja':'bateriaverde'} style={{backgroundColor:el.picture.includes('S')?'red':'green'}}></span><span className={el.picture.includes('A')?'bateriaroja':'bateriaverde'} style={{backgroundColor:el.picture.includes('A')?'red':'green'}}></span></div></li>)}   
     </ul>
    </div>
)    

}

export default Status