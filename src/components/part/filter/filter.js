import React, {Component} from 'react';
import './filter.css'
import PriceFilter from './priceFilter';
import BrandFilter from './brandFilter';

class Filter extends Component{

    constructor(props){
        super(props);

        this.state = {
            filters: props.filters
        }
    }

    render(){

        return (
            <div className='filter'>
                <BrandFilter brands = {this.state.filters['brands']} filterMethod = {this.props.filterBrandMethod} />
                <PriceFilter prices = {this.state.filters['prices']} filterMethod = {this.props.filterPriceMethod}/>                
            </div>
        )
    }
}

export default Filter;