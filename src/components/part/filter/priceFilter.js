import React, {Component} from 'react';
import '../../tools/rSlider.css'
import '../../tools/rSlider.js'

class PriceFilter extends Component{

    constructor(props){
        super(props);
       
        this.state = {
            prices: props.prices
        }

        this.filterPrices = this.filterPrices.bind(this);
    }
   
    componentDidMount(){

        var mySlider = new rSlider({
            target: '#slider',
            values: this.state.prices[0],
            range: true,
            tooltip: true,
            scale: true,
            labels: true,
            set: this.state.prices[1],
            onChange: this.filterPrices
        });

        

    }

    filterPrices(values){
        this.props.filterMethod(values);
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