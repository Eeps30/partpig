import React, {Component} from 'react';
import GenerateRows from './generateMakeRows';
import data from '../dataModel';
import '../../searchpage/search.css';

class YearDropdown extends Component {
    constructor(props){
        super(props)
    }

    handleChildClick(event){
        this.props.yearSelect(event.currentTarget.value);
    }

    render(){
        if(this.props.selectedModel === 'default'){
            console.log('this is inside if selectedModel is null', this.props.selectedModel);
            return(
                <select defaultValue="default" placeholder="Select a Year">
                    <option value="default" disabled="disabled">Select a Year</option>
                </select>
            )
        }else if(this.props.selectedModel !== 'default'){
            console.log('this is the selectedMake', this.props.selectedMake);
            const listOfYears = this.props.data.make[this.props.selectedMake].model[this.props.selectedModel].years
            const yearsString = listOfYears.map(String);
            const generatedRows = yearsString.map( (item, index) => <GenerateRows key={index} callback={() => {this.handleChange(item)}} label={item}/>)

            return(
                <select className="yearDropdown" onChange={(e) => {this.handleChildClick(e)}}>
                    <option value={null} disabled="disabled">Select a Year</option>
                    {generatedRows}
                </select>
            )
        }
    }
}

export default YearDropdown;