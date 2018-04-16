import React, {Component} from 'react';

class Field extends Component{

    render(){

        const {width,label,type,placeholder,name, value, handleInputChange} = this.props;

        const style={width};
        return (            
            <div className='form-group' style={style}>
                <label>{label}</label>
                <input onChange={handleInputChange} value={value} name={name} type={type} placeholder={placeholder}/>
            </div>                                
        )
    }
}


export default Field;