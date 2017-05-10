import { combineReducers } from 'redux';

import { TODO_ADD, TODO_CHECK, TODO_REMOVE } from './actions';

const reducer = (state = [], action) => {

    switch (action.type) {

        case TODO_ADD: {
            return [...state, action.payload];
        }

        case TODO_CHECK: {
            let { id, checked } = action.payload;
            return state.map(item => {
                if (item.id === id) {
                    return Object.assign({}, item, { checked });
                }
                return item;
            });
        }

        case TODO_REMOVE: {
            let id = action.payload;
            return state.filter(item => item.id !== id);
        }

        default:
            return state;
    }

}

export { reducer };