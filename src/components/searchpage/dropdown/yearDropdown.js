import React, {Component} from 'react';
import GenerateRows from './generateMakeRows';
import data from '../dataModel';

class YearDropdown extends Component {
    constructor(props){
        super(props)
    }

    handleChildClick(event){
        this.props.yearSelect(event.currentTarget.value);
    }

    render(){
        if(this.props.selectedModel === null){
            return(
                <select>
                    <option>Select a Year</option>
                </select>
            )
        }else if(this.props.selectedModel !== null){

            const listOfYears = this.props.data.make[this.props.selectedMake].model[this.props.selectedModel].years
            const yearsString = listOfYears.map(String);
            const generatedRows = yearsString.map( (item, index) => <GenerateRows key={index} callback={() => {this.handleChange(item)}} label={item}/>)

            return(
                <select onChange={(e) => {this.handleChildClick(e)}}>
                    <option value="default" disabled="disabled">Select a Year</option>
                    {generatedRows}
                </select>
            )
        }
    }
}

export default YearDropdown;