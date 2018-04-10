import React, {Component} from 'react';
import GenerateRows from './generateMakeRows';
import data from '../dataModel';
import '../../searchpage/search.css';

class ModelDropdown extends Component {
    constructor(props){
        super(props)
    }

    handleChildClick(event){
        this.props.modelSelect(event.currentTarget.value)
    }

    render(props){
        if(this.props.selectedMake === null){
            return(
                <select className="modelDropdown" defaultValue="default" placeholder="Select a Model">
                    <option value="default" disabled="disabled">Select a Model</option>
                </select>
            )
        }else if(this.props.selectedMake !== null){

            const listOfModels = Object.keys( this.props.data.make[this.props.selectedMake].model );
            const generatedRows = listOfModels.map( (item, index) => <GenerateRows key={index} callback={this.handleChildClick.bind(this)} label={item}/>)

            return(
                <select className="modelDropdown" defaultValue="default" placeholder="Select a Model" onChange={(e) => this.handleChildClick(e)}>
                    <option value="default" disabled="disabled">Select a Model</option>
                    {generatedRows}
                </select>
            )
        }
    }
}

export default ModelDropdown;