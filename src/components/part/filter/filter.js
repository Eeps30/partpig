import React from 'react';
import './filter.css'
import PriceFilter from './priceFilter';
import BrandFilter from './brandFilter';
import CategoryFilter from './categoryFilter';

const Filter = (props) =>{

    return (
        <div className={props.filterClass}>            
            <BrandFilter history={props.history} filters = {props.filters} filterMethod = {props.filterBrandMethod} />
            <PriceFilter update={props.update} history={props.history} filters = {props.filters} filterMethod = {props.filterPriceMethod}/> 
            <CategoryFilter history={props.history} filters = {props.filters} filterMethod = {props.filterCategoryMethod} />              
        </div>
    )
    
}

export default Filter;