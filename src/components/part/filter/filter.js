import React from 'react';
import './filter.css'
import PriceFilter from './priceFilter';
import BrandFilter from './brandFilter';

const Filter = (props) =>{

    return (
        <div className='filter'>
            <BrandFilter history={props.history} filters = {props.filters} filterMethod = {props.filterBrandMethod} />
            <PriceFilter history={props.history} filters = {props.filters} filterMethod = {props.filterPriceMethod}/>                
        </div>
    )
    
}

export default Filter;