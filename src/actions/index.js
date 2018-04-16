import types from './types';
import axios from 'axios';

export function handleInputChange(event){
    const {name, value} = event.target;
    return {
        type: types.INPUT_CHANGE,
        name,
        value
    }

}

export function defineInput(name){
    return{
        type: types.DEFINE_INPUT,
        name
    };
}

export function formError(error){
    return {
        type: types.FORM_ERROR,
        error
    }
}


