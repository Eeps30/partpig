import React, { Component } from 'react';
import Part from './part';
import './part.css';
import parts from './partsData'

class PartList extends Component{

    constructor(props){
        super(props);

        this.state = {
            arrayParts:parts
        }
    }

    render(){
       
        let list = this.state.arrayParts.map(function(item,index){
            return <Part key={index} isDetails ={false} partInfo={item}/>
        });
        return (
            <div className='partList'>
                {list}
            </div>
        );

    }

}

export default PartList;