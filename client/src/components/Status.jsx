import React from "react";



function Status(props) {
    let icbolay = props.status.filter(el => el.river === "Rio Rocja Pontila")
    let naranjo = props.status.filter(el => el.river === "Rio Naranjo") 
    console.log(icbolay)
    console.log(naranjo)
return(
    <div className="statusmain">
         <div className="status">
            <h2>Rio Naranjo</h2>
            <ul>
                    <li className='alarmsheader'> <span>Bat</span><span>Sens</span><span>Señal</span><span>Nivel</span></li>
                {naranjo.map((el)=><li className = 'statusitem'><div className="stationandlevel"><div className='station'>{el.station}</div><div className="nivel">{el.level}</div></div><div className='leds'><span className={el.picture.includes('B')?'bateriaroja':'bateriaverde'} style={{backgroundColor:el.picture.includes('B')?'red':'green'}}></span><span className={el.picture.includes('S')?'bateriaroja':'bateriaverde'} style={{backgroundColor:el.picture.includes('S')?'red':'green'}}></span><span className={el.picture.includes('A')?'bateriaroja':'bateriaverde'} style={{backgroundColor:el.picture.includes('A')?'red':'green'}}></span></div></li>)}   
            </ul>
        </div>
        <div className="status">
            <h2>Rio Icbolay</h2>
            <ul>
                    <li className='alarmsheader'> <span>Bat</span><span>Sens</span><span>Señal</span><span>Nivel</span></li>
                {icbolay.map((el)=><li className = 'statusitem'><div className="stationandlevel"><div className='station'>{el.station}</div><div className="nivel">{el.level}</div></div><div className='leds'><span className={el.picture.includes('B')?'bateriaroja':'bateriaverde'} style={{backgroundColor:el.picture.includes('B')?'red':'green'}}></span><span className={el.picture.includes('S')?'bateriaroja':'bateriaverde'} style={{backgroundColor:el.picture.includes('S')?'red':'green'}}></span><span className={el.picture.includes('A')?'bateriaroja':'bateriaverde'} style={{backgroundColor:el.picture.includes('A')?'red':'green'}}></span></div></li>)}   
            </ul>
        </div>
       

    </div>
)    

}

export default Status