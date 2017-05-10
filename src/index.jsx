import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducers';
import { App } from './containers/app';

const getInitialState = () => {
    let todos = localStorage.getItem('todos');
    return todos? JSON.parse(todos): [];
}

// Create store
const store = createStore(
    reducer,
    getInitialState(),
    // Enable DevTools extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Save todos on window close
window.addEventListener('beforeunload', () => 
    localStorage.setItem('todos', JSON.stringify( store.getState() )) );

// Render app
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);