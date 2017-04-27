import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducers';
import { App } from './containers/app';

const getSavedTodos = () => {
    let todos = localStorage.getItem('todos');
    return todos? JSON.parse(todos): [];
}

// Create store
const store = createStore(reducer, { todos: getSavedTodos() });

// Save todos on window close
window.addEventListener('beforeunload', () => 
    localStorage.setItem('todos', JSON.stringify( store.getState().todos )) );

// Render app
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);