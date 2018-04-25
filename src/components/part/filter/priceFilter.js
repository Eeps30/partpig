import React, {Component} from 'react';
import '../../tools/rSlider.css';
import '../../tools/rSlider.js';
import { Redirect } from 'react-router';

class PriceFilter extends Component{

    constructor(props){
        super(props);
       
        this.state = {
            prices: props.filters['prices'],
            redirect: false
        }
        this.newFilters = props.filters;
        this.filterPrices = this.filterPrices.bind(this);
    }
      

    componentDidUpdate(){
        if(this.props.update){
            const slider = new rSlider({
                target: '#slider',
                values: this.state.prices[0],
                range: true,
                tooltip: true,
                scale: true,
                labels: false,
                set: this.state.prices[1],
                onChange: this.filterPrices
            });  
        }
    }

    filterPrices(values){     
        let sliderElem = document.getElementsByClassName("rs-container")[0]
        //Check if the element is visible
        if(sliderElem && sliderElem.offsetParent !== null){   
            let valArray = values.split(',');
            const min = parseInt(valArray[0]);
            const max = parseInt(valArray[1]);
            this.newFilters['prices'][1] = [min,max];
            let index = this.props.match.url.indexOf('/filters');
            let url = index === -1 ? this.props.match.url : this.props.match.url.substring(0,index);
            this.props.history.push(url+'/filters/'+JSON.stringify(this.newFilters));
        }
    }

    render(){            
        
        return (            
            <div id='priceFilterDiv'>                
                <h2 className='priceFilterH2'>Price</h2>
                <input type="text" id="slider" />                               
            </div>  
        )
    }
}

export default PriceFilter;