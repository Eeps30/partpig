import React, {Component} from 'react';
import MakeDropDown from "../searchpage/dropdown/makeDropdown";
import ModelDropDown from "../searchpage/dropdown/modelDropdown";
import YearDropDown from "../searchpage/dropdown/yearDropdown";
import data from '../searchpage/dataModel';
import {Link} from 'react-router-dom';
import SearchPartName from '../searchpage/dropdown/searchPartName';
import SearchPartNumber from '../searchpage/dropdown/searchPartNumber';

class YearMakeModelSelect extends Component {
    constructor(props){
        super(props)

        this.state = {
            make: 'default',
            model: 'default',
            year: 'default'
        }
        this.catchMakeSelect = this.catchMakeSelect.bind(this)
        this.catchModelSelect = this.catchModelSelect.bind(this)
        this.catchYearSelect = this.catchYearSelect.bind(this)
    }

    catchMakeSelect(selectedMake){
        const caughtMake = selectedMake;
        this.setState({
            make: caughtMake,
            model: 'default',
            year: 'default'
        });
    }

    catchModelSelect(selectedModel){
        const caughtModel = selectedModel
        this.setState({
            model: caughtModel
        });
    }

    catchYearSelect(selectedYear){
        console.log(selectedYear);
        const caughtYear = selectedYear
        this.setState({
            year: caughtYear
        })
    }

    render(){

        const make = this.state.make
        const makeStr = this.state.make !== 'default' ? '/make/' + this.state.make : '';
        const modelStr = this.state.model !== 'default' ? '/model/' + this.state.model : '';
        const yearStr = this.state.year !== 'default' ? '/year/' + this.state.year : '';
        
        return(
            <div className="yearMakeModel">
                        <MakeDropDown data={data} makeSelect={this.catchMakeSelect} currentMake={this.state.make}/>
                        <ModelDropDown data={data} value={this.state.model} modelSelect={this.catchModelSelect} selectedMake={this.state.make} selectedModel={this.state.model}/>
                        <YearDropDown data={data} value={this.state.year} yearSelect={this.catchYearSelect} selectedMake={this.state.make} selectedModel={this.state.model}/>
            </div>
        )
    }
}

export default YearMakeModelSelect