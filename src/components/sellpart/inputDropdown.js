import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleInputChange} from '../../actions';


class InputDropdown extends Component {
    

    render(){   
        const {className, label, handleInputChange, value, name, type, placeholder, options} = this.props   
        const dropDownOptions = this.props.options.map((option,index) => {
            return <option key={index} {...option} value={option.value}>{option.name}</option>
        });
 
        return (
            <div className={className}>
                <label htmlFor="">{label}</label>
                <select onChange={handleInputChange} value={value} name={name} type={type} placeholder={placeholder}>
                    {dropDownOptions}        
                </select>
            </div>
        )
    }
}

export default connect(null, {handleInputChange})(InputDropdown);
