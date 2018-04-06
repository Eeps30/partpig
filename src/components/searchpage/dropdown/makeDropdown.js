import React, {Component} from 'react';
import data from './partsList';
import GenerateMakeRows from './generateMakeRows';

class MakeDropDown extends Component {
    constructor(props){
        super(props)

        this.makeRows = this.makeRows.bind(this)
    }

    makeRows(){
        const listOfMakes = Object.keys( data.make );
        return listOfMakes.map( (item, index) => <GenerateMakeRows key={index} callback={(event) => {this.handleChange(item)}} label={item}/>)
    }

    handleChange(label){
        this.props.makeSelect(label)
    }

    render(){
        return(
            <select onChange={(event) => this.handleChange ({value: event.target.value})}>
                {this.makeRows()}
            </select>
        )
    }
}

export default MakeDropDown;