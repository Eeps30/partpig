import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import types from "./actions/types";
import rootReducer from './reducers';
import {createStore, applyMiddleware} from "redux";


import App from './components/app/app';

const store = createStore(rootReducer, {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
