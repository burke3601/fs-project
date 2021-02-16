import React from 'react'

function TimeButton(props) {
    return (
        
            <button className="timebutton" onClick={props.handleClick}>
                {props.text}
            </button>
        
    );
}




export default TimeButton;




