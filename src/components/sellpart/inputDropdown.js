import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleInputChange} from '../../actions';


class InputDropdown extends Component {

    dropdownOptions

    render(){   
        const {className, label, handleInputChange, value, name, type, placeholder} = this.props      
        return (
            <div className={className}>
                <label htmlFor="">{label}</label>
                <select onChange={handleInputChange} value={value} name={name} type={type} placeholder={placeholder}>
                    <option value="1">1</option>
                </select>
            </div>
        )
    }
}

export default connect(null, {handleInputChange})(InputDropdown);




<label htmlFor="part_condition">Condition<a className="required">*</a></label>
<select onChange={this.handleInputChange} value={part_condition} name="part_condition" type="text">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>

</select>
