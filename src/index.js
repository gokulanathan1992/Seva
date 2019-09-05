import React from 'react';
import ReactDom from 'react-dom';
import App from './Components/App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import allReducers from './Reducers';
import './Styles/index.less';

const store = createStore(allReducers, applyMiddleware(logger, thunk));

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('app')
);