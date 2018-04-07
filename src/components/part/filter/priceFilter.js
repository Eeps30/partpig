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
   
    componentDidMount(){
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

    filterPrices(values){        
        let valArray = values.split(',');
        const min = parseInt(valArray[0]);
        const max = parseInt(valArray[1]);
        this.newFilters['prices'][1] = [min,max];
        this.props.history.push('/partresults/'+JSON.stringify(this.newFilters));
    }

    render(){              
        
        return (            
            <div>                
                <h2>Price</h2>
                <hr/>
                <br/>
                <input type="text" id="slider" />                               
            </div>  
        )
    }
}

export default PriceFilter;