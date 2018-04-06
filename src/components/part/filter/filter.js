import React from 'react';
import './filter.css'
import PriceFilter from './priceFilter';
import BrandFilter from './brandFilter';
import {Link} from 'react-router-dom';

const Filter = (props) =>{

    return (
        <div className='filter'>
            <Link to="/"> Go Back </Link>
            <BrandFilter history={props.history} filters = {props.filters} filterMethod = {props.filterBrandMethod} />
            <PriceFilter history={props.history} filters = {props.filters} filterMethod = {props.filterPriceMethod}/>                
        </div>
    )
    
}

export default Filter;