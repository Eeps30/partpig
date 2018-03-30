import React, { Component } from 'react';
import Part from '../part';
import './partList.css';
import parts from '../partsData'
import {Link, Route} from 'react-router-dom';
import PartDetails from '../partDetails/partDetails';

class PartList extends Component{

    constructor(props){
        super(props);

        this.state = {
            arrayParts:parts
        }
    }

    render(){
       
        let list = this.state.arrayParts.map((function(item,index){
            return ( 
                <div key={index} className='partResult' onClick={()=>{this.props.info(item)}}>
                    <Link to="/partdetails">
                        <Part partInfo={item}/>
                    </Link>
                    
                </div>
            )
           
        }).bind(this));
        return (
            <div className='partList'>
                {list}
            </div>
        );

    }

}

export default PartList;