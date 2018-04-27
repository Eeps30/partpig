import React, {Component} from 'react';

class CategoryFilter extends Component{

    constructor(props){
        super(props);

        this.state = {
            categories: props.filters['categories'][0]
        }

        this.newFilters = props.filters;
        this.checkElement = this.checkElement.bind(this);
    }

    checkElement(event){
        const array = [...this.state.categories];
        for (let i = 0; i < array.length; i++) {
            if (array[i].text === event.target.value) {
                array[i].checked = !array[i].checked;
            }
        }
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            if (!array[i].checked){
                count++;
            }
        }
        this.setState({
            categories: array
        });

        let all = false;
        if(count===array.length){
            all = true;
        }
        this.newFilters['categories'][0] = array;
        this.newFilters['categories'][1] = all;
        let index = this.props.match.url.indexOf('/filters');
        let url = index === -1 ? this.props.match.url : this.props.match.url.substring(0,index);
        this.props.history.push(url+'/filters/'+JSON.stringify(this.newFilters));
    }

    render(){

        const categoryList = this.state.categories.map((function(item,index){
            return (
                <div className="filterBrand" key={index}>                    
                    <div><input id={item.text} value={item.text} checked = {item.checked} type="checkbox" onChange={this.checkElement}/></div>
                    <div><label htmlFor={item.text}>{item.text}</label></div>
                </div>  
            )
        }).bind(this));

        return (            
            <div>                
                <h2>Categories</h2>
                <div className="filterScroll">
                    {categoryList}
                </div>
            </div>   
        )
    }
}

export default CategoryFilter;