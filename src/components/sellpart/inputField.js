import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleInputChange} from '../../actions';


class InputField extends Component {

    render(){   
        const {className, label, handleInputChange, value, name, type, placeholder} = this.props      
        return (
            <div className={className}>
                <label htmlFor="">{label}</label>
                <input onChange={handleInputChange} value={value} name={name} type={type} placeholder={placeholder}/>
            </div>
        )
    }
}

export default connect(null, {handleInputChange})(InputField);
