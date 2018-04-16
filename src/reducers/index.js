import {combineReducers} from 'redux';
import formReducer from './form_reducer';

export default combineReducers({
    form: formReducer
});