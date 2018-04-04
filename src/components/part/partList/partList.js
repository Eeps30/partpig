import React, { Component } from 'react';
import Part from '../part';
import './partList.css';
import parts from '../partsData'
import {Link} from 'react-router-dom';
import Filter from '../filter/filter';
import BrandFilter from './../filter/brandFilter';
// import axios from 'axios';

class PartList extends Component{

    constructor(props){
        super(props);

        this.state = {
            arrayParts:parts            
        }
        this.filterBrandMethod = this.filterBrandMethod.bind(this);
        this.filterPriceMethod = this.filterPriceMethod.bind(this);
        this.filters = (props.match.params.filters === undefined || props.match.params.filters.length === 0) ? this.initFilters(parts) : JSON.parse(props.match.params.filters);
        
    }

    initFilters(parts){
        let filters = {};
        let pricesArray = [];
        let pricesfilter = [];
        let brandsArray = [];
        for (let i = 0; i < parts.length; i++) {        
            const brand = {
                text: parts[i].brand,
                checked: false
            };
            !this.containsObject(brand,brandsArray) ? brandsArray.push(brand):'';
            pricesArray.indexOf(parts[i].price)===-1 ? pricesArray.push(parts[i].price) : '';            
        };
        const brandFilter = [brandsArray,true];
        pricesArray.sort((a,b)=>a-b);
        let pricesValues = [];
        pricesValues.push(pricesArray[0]);        
        pricesValues.push(pricesArray[pricesArray.length-1]);
        pricesfilter.push(pricesArray);
        pricesfilter.push(pricesValues);  
        filters['prices'] = pricesfilter;
        filters['brands'] = brandFilter;
        return filters;
    }

    componentWillMount(){
        this.filterPriceMethod(this.filters['prices'][1]);
        this.filterBrandMethod(this.filters['brands'][0],this.filters['brands'][1]);
        // const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        // axios.get(url).then((resp) => {
        //     console.log('Resp:', resp);
        //     this.setState({
        //         movies: resp.data.feed.entry
        //     });
        // });
    }

    componentWillUpdate(){
        if(this.props.history.location.pathname !== this.props.location.pathname){
            this.filterPriceMethod(this.filters['prices'][1]);
            this.filterBrandMethod(this.filters['brands'][0],this.filters['brands'][1]);
        }
    }

    containsObject(obj, list) {        
        for (let i = 0; i < list.length; i++) {
            if (list[i].text === obj.text) {
                return true;
            }
        }    
        return false;
    }

    filterBrandMethod(arrayBrands,all){
        const filteredParts = [...this.state.arrayParts];
        for (let i = 0; i < filteredParts.length; i++) {
            for(let j = 0; j < arrayBrands.length; j++){
                if (filteredParts[i].brand === arrayBrands[j].text) {
                    if(all || arrayBrands[j].checked){
                        filteredParts[i].display.brand = true;
                    }else{
                        filteredParts[i].display.brand = false;
                    }
                }
            }
        }        
        this.setState({
            arrayParts:filteredParts
        });
    }

    filterPriceMethod(values){
        
        const min = values[0];
        const max = values[1];
        const filteredParts = [...this.state.arrayParts];
        for (let i = 0; i < filteredParts.length; i++) {            
            if (filteredParts[i].price >= min && filteredParts[i].price <= max) {               
                filteredParts[i].display.price = true;
            }else{
                filteredParts[i].display.price = false;
            }
        }        
        this.setState({
            arrayParts:filteredParts
        });
    }

    render(){
       
        let visibleParts = this.state.arrayParts.filter((part) => {return part.display.brand && part.display.price;});
        let list = visibleParts.map((function(item,index){
            return ( 
                <div key={index} className='singlePart' onClick={()=>{this.props.info(item,this.filters)}}>
                    <Link to={"/partdetails/" + item.partNumber + '/' + JSON.stringify(this.filters)}>
                        <Part partInfo={item}/>
                    </Link>                    
                </div>
            )           
        }).bind(this));

        console.log('Part List Props:', this.props);
        return (
            <div className='partResults'>
                <Filter history={this.props.history} filters={this.filters}/>
                <div className='partList'>                    
                    {list}
                </div>
            </div>
        );

    }

}

export default PartList;