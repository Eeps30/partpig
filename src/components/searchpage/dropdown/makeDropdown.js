import React, {Component} from 'react';
import GenerateMakeRows from './generateMakeRows';

class MakeDropDown extends Component {
    constructor(props){
        super(props)

        this.renderRows = this.renderRows.bind(this);
    }

    handleChildClick(label){
        this.props.makeSelect(label)
    }

    renderRows(){
        const listOfMakes = Object.keys( this.props.data.make );
        console.log(listOfMakes);
        const generatedRows = listOfMakes.map( (item, index) => <GenerateMakeRows key={index} callback={this.handleChildClick(item)} label={item}/>)
        return generatedRows;
    }

    render(){
        
        return(
            <select>
                <option onClick={this.renderRows} selected="Make" disabled="disabled">Select A Make</option>
                {this.renderRows}
            </select>
        )
    }
}

export default MakeDropDown;