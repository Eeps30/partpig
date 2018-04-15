import React, {Component} from 'react';

class Field extends Component{

    render(){

        const {label,type,placeholder,name, value, handleInputChange} = this.props;

        return (            
            <div className='form-group'>
                <label>{label}</label>
                <input onChange={handleInputChange} value={value} name={name} type={type} placeholder={placeholder}/>
            </div>                                
        )
    }
}


export default Field;