import React, {Component} from 'react';
import MakeDropDown from './makeDropdown';
import ModelDropDown from './modelDropdown';
import YearDropDown from './yearDropdown';
import data from './partsList';
import mainLogo from '../assets/images/placeholderImage.png';
import '../assets/css/dropDown.css';

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
        
        return(
            <div className="pageContainer">
                <header className="header">Part Pig</header>
                <div className="dropdownContainer">
                    <div className="dropdownMenu">
                        <div className="icon">
                            <img src={mainLogo}/>
                        </div>
                        <div className="buttonsContainer">
                            <MakeDropDown makeSelect={this.catchMakeSelect} currentMake={this.state.make}/>
                            <ModelDropDown modelSelect={this.catchModelSelect} selectedMake={this.state.make}/>
                            <YearDropDown yearSelect={this.catchYearSelect} selectedMake={this.state.make} selectedModel={this.state.model}/>
                        </div>
                    </div>
                </div>
                <footer>Team Part Pig Copyright 2018</footer>
            </div>
        )
    }
}

export default DropDownContainer