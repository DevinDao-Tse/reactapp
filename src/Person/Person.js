import React from 'react';
import './Person.css'

const person = (props) =>{
    return (
        <div className="Person">
            <p>this is {props.name} testing from exporting</p>
            <p>{props.children}</p>
        </div>
        )
}

export default person



