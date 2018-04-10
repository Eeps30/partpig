import React, {Component} from 'react';
import MakeDropDown from './dropdown/makeDropdown';
import ModelDropDown from './dropdown/modelDropdown';
import YearDropDown from './dropdown/yearDropdown';
import data from './dataModel';
import mainLogo from '../../assets/images/part1/subaruWheels2.jpg';
import './search.css';
import {Link} from 'react-router-dom';
import SearchPartName from './dropdown/searchPartName';
import SearchPartNumber from './dropdown/searchPartNumber';

class DropDownContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            active: 'first',
            make: null,
            model: null,
            year: null
        }
        this.catchMakeSelect = this.catchMakeSelect.bind(this)
        this.catchModelSelect = this.catchModelSelect.bind(this)
        this.catchYearSelect = this.catchYearSelect.bind(this)
    }

    handleClick(){
        const active = this.state.active;
        const newActive = active === 'first' ? 'second' : 'first';
        this.setState({
            active: newActive
        })
    }

    getEmptyData(){
        let checkFields = ['make', 'model', 'year']
        for(var i=0; i < checkFields.length; i++){
            if(this.state[checkFields[i]] === null){
                return checkFields[i];
            }
        }
        return false
    }

    catchMakeSelect(selectedMake){
        const caughtMake = selectedMake
        this.setState({
            make: caughtMake,
            model: null,
            year: null
        })
    }

    catchModelSelect(selectedModel){
        const caughtModel = selectedModel
        this.setState({
            model: caughtModel,
            year: null
        })
    }

    catchYearSelect(selectedYear){
        const caughtYear = selectedYear.value
        this.setState({
            year: caughtYear
        })
    }

    render(){

        const make = this.state.make

        var nextFieldToCheck = this.getEmptyData();
        console.log('field to check: ' + nextFieldToCheck);

        const makeStr = this.state.make !== null ? '/' + this.state.make : '';
        const modelStr = this.state.model !== null ? '/' + this.state.model : '';
        const yearStr = this.state.year !== null ? '/' + this.state.year : '';

        const { active } = this.state.active;
        
        return(
            <div className="pageContainer">
                <div className="dropdownContainer">
                    <div className="dropdownMenu">
                        <div className="buttonsContainer">
                            <MakeDropDown data={data} makeSelect={this.catchMakeSelect} currentMake={this.state.make}/>
                            <ModelDropDown data={data} modelSelect={this.catchModelSelect} selectedMake={this.state.make}/>
                            <YearDropDown data={data} yearSelect={this.catchYearSelect} selectedMake={this.state.make} selectedModel={this.state.model}/>
                            <div className="alternateSearch">
                                <span>SEARCH BY PART NAME</span>
                                <span>SEARCH BY VIN NUMBER</span>
                            </div>
                            <button className="searchButton">
                                <Link to={"/partresults" + makeStr + modelStr + yearStr} style={{display: 'block', height: '100%'}}> FIND PARTS </Link>
                            </button>  
                        </div>
                    </div>
                </div>
                <footer>Team Part Pig Copyright 2018</footer>
            </div>
        )
    }
}

export default DropDownContainer