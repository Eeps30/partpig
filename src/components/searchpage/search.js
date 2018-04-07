import React, {Component} from 'react';
import MakeDropDown from './dropdown/makeDropdown';
import ModelDropDown from './dropdown/modelDropdown';
import YearDropDown from './dropdown/yearDropdown';
import data from './dataModel';
import mainLogo from '../../assets/images/part1/subaruWheels2.jpg';
import './search.css';
import {Link} from 'react-router-dom';

class DropDownContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            makeDropDownisHidden: true,
            modelDropDownisHidden: true,
            yearDropDownisHidden: true,
            make: null,
            model: null,
            year: null
        }
        this.catchMakeSelect = this.catchMakeSelect.bind(this)
        this.catchModelSelect = this.catchModelSelect.bind(this)
        this.catchYearSelect = this.catchYearSelect.bind(this)
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
        console.log("parent speaking", selectedMake);
        const caughtMake = selectedMake.value
        this.setState({
            make: caughtMake
        })
    }

    catchModelSelect(selectedModel){
        const caughtModel = selectedModel.value
        this.setState({
            model: caughtModel
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
        
        return(
            <div className="pageContainer">
                <header className="header">Part Pig</header>
                <div className="dropdownContainer">
                    <div className="dropdownMenu">
                        <div className="icon">
                            <img src={mainLogo}/>
                        </div>
                        <div className="buttonsContainer">
                            <MakeDropDown data={data} makeSelect={this.catchMakeSelect} currentMake={this.state.make}/>
                            {/* <ModelDropDown data={data} modelSelect={this.catchModelSelect} selectedMake={this.state.make}/>
                            <YearDropDown data={data} yearSelect={this.catchYearSelect} selectedMake={this.state.make} selectedModel={this.state.model}/> */}
                            <Link to={"/partresults" + makeStr + modelStr + yearStr}> Search </Link>                    
                        </div>
                    </div>
                </div>
                <footer>Team Part Pig Copyright 2018</footer>
            </div>
        )
    }
}

export default DropDownContainer