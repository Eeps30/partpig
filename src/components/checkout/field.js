import React, {Component} from 'react';
import states,{abbrState} from '../tools/states';

class Field extends Component{

    render(){

        const {width, label, type, placeholder, name, value, disabled, handleInputChange, handleOnBlur, error, required} = this.props;

        const style={width};

        const statesList = states.map((item,index)=>{ 
            return <option key={index} value={item[1]}>{item[0]}</option>
        });

        let field = '';
        if(type==='select'){
            field=(<select name={name} onChange={handleInputChange} defaultValue={value}>
                        {statesList}  
                    </select>
            );
        }else{
            field = <input onBlur={handleOnBlur} className="form-control" disabled={disabled} onChange={handleInputChange} value={value} name={name} type={type} placeholder={placeholder} required={required}/>;             
        }    

        return (            
            <div className='form-group' style={style}>
                <label>{label}</label>
                {field}   
                <div className="form-control-border"></div> 
                <div className="help-block with-errors">{error}</div>                        
            </div>                                
        )
    }
}


export default Field;