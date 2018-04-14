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
        const caughtYear = selectedYear.value
        this.setState({
            year: caughtYear
        })
    }

    render(){

        const make = this.state.make

        const makeStr = this.state.make !== 'default' ? '/' + this.state.make : '';
        const modelStr = this.state.model !== 'default' ? '/' + this.state.model : '';
        const yearStr = this.state.year !== 'default' ? '/' + this.state.year : '';
        
        return(
            <div className="outerDiv">
                <div className="dropdownMenu">
                    <div className="buttonsContainer">
                        <MakeDropDown data={data} makeSelect={this.catchMakeSelect} currentMake={this.state.make}/>
                        <ModelDropDown data={data} value={this.state.model} modelSelect={this.catchModelSelect} selectedMake={this.state.make} selectedModel={this.state.model}/>
                        <YearDropDown data={data} value={this.state.year} yearSelect={this.catchYearSelect} selectedMake={this.state.make} selectedModel={this.state.model}/>
                    </div>
                    <div className="searchBarContainer">
                        <SearchPartName/>
                        <button className="searchButton">
                            <Link to={"/partresults" + makeStr + modelStr + yearStr} style={{display: 'block', height: '100%'}}> FIND PARTS </Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DropDownContainer