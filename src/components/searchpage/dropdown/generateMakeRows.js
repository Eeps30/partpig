import React from 'react';

function generateMakeRow(props){
    return (
        <option onClick={()=>{
            props.callback(item)
        }}>{props.label}</option>
    )
}

export default generateMakeRow;