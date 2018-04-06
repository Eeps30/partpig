import React, {Component} from 'react';
import data from './partsList';
import GenerateRows from './generateMakeRows';

class ModelDropdown extends Component {
    constructor(props){
        super(props)

        this.makeRows = this.makeRows.bind(this)
    }

    makeRows(props){
        const listOfModels = Object.keys( data.make[this.props.selectedMake].model )
        return listOfModels.map( (item, index) => <GenerateRows key={index} callback={() => {this.handleChange(item)}} label={item}/>)
    }

    handleChange(label){
        this.props.modelSelect(label)
    }

    render(props){
        if(this.props.selectedMake === null){
            return(
                <select>
                    <option>Model</option>
                </select>
            )
        }else if(this.props.selectedMake !== null){
            return(
                <select onChange={(event) => this.handleChange ({value: event.target.value})}>
                    {this.makeRows()}
                </select>
            )
        }
    }
}

export default ModelDropdown;