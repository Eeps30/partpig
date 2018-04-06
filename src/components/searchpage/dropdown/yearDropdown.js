import React, {Component} from 'react';
import data from './partsList';
import GenerateRows from './generateMakeRows';

class YearDropdown extends Component {
    constructor(props){
        super(props)

        this.makeRows = this.makeRows.bind(this)
    }

    makeRows(props){
        const listOfYears = data.make[this.props.selectedMake].model[this.props.selectedModel].years
        const yearsString = listOfYears.map(String);
        return yearsString.map( (item, index) => <GenerateRows key={index} callback={() => {this.handleChange(item)}} label={item}/>)
    }

    handleChange(label){
        this.props.yearSelect(label)
    }

    render(){
        if(this.props.selectedModel === null){
            return(
                <select>
                    <option>Year</option>
                </select>
            )
        }else if(this.props.selectedModel !== null){
            return(
                <select onChange={(event) => this.handleChange ({value: event.target.value})}>
                    {this.makeRows()}
                </select>
            )
        }
    }
}

export default YearDropdown;