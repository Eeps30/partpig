import React, {Component} from 'react';
import MakeDropDown from './dropdown/makeDropdown';
import ModelDropDown from './dropdown/modelDropdown';
import YearDropDown from './dropdown/yearDropdown';
import data from './dataModel';
import './search.css';
import {Link} from 'react-router-dom';

class DropDownContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            make: 'default',
            model: 'default',
            year: 'default',
            searchText:'',
            showErrorBorder: {}
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

    handleChange(event){
        this.setState({
            searchText: event.target.value
        });
    }

    handleError(){
        this.setState({
            showErrorBorder : {
                border: 'solid red 2px'
            }
        })
    }

    validateFields(){

        if((this.state.make !== 'default' && this.state.model !== 'default' && this.state.year !== 'default') || this.state.searchText !== ''){
            if((this.state.searchText !== '') && (this.state.make !== 'default' && this.state.model === 'default' && this.state.year === 'default')){
                // this.handleError();
                return false
            }else if((this.state.searchText !== '') && (this.state.make !== 'default' && this.state.model !== 'default' && this.state.year === 'default')){
                return false;
            }else{
                return true;
            }
        }
    }

    render(){

        let queryStr = this.state.make !== 'default' ? '/make/' + this.state.make : '';
        queryStr += this.state.model !== 'default' ? '/model/' + this.state.model : '';
        queryStr += this.state.year !== 'default' ? '/year/' + this.state.year : '';
        queryStr += this.state.searchText !== '' ? '/keyword/' + this.state.searchText : '';

        let searchButton = <Link className='button-link' to={"/partresults" + queryStr}> FIND PARTS </Link>
        if(!this.validateFields()){
            searchButton = <Link  onClick={e => e.preventDefault()} className='disabled' to={"/partresults" + queryStr}> FIND PARTS </Link>
        }
        
        return(
            <div className="outerDiv">
                <div className="dropdownMenu">
                    <div className="searchBarContainer">
                        <div>
                            <input type="text" value={this.state.searchText} onChange={this.handleChange.bind(this)} placeholder='Search By Part Name'/> 
                            {searchButton}
                        </div>
                    </div>
                    <div className="buttonsContainer">
                        <MakeDropDown data={data} makeSelect={this.catchMakeSelect} currentMake={this.state.make}/>
                        <ModelDropDown style={this.state.showErrorBorder} data={data} value={this.state.model} modelSelect={this.catchModelSelect} selectedMake={this.state.make} selectedModel={this.state.model}/>
                        <YearDropDown className="yearError" data={data} value={this.state.year} yearSelect={this.catchYearSelect} selectedMake={this.state.make} selectedModel={this.state.model}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DropDownContainer