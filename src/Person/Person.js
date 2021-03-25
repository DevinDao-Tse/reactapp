import React from 'react';
import './Person.css'

const person = (props) =>{
    return (
        <div className="Person">
            <p onClick={props.click}>this is {props.name} of age: {props.age} testing from exporting</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
        )
}

export default person



