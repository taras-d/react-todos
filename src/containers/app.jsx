import { connect } from 'react-redux';

import TodoApp from '../components/todo-app';
import { todoAdd, todoCheck, todoRemove } from '../actions';

/**
 * App component connects TodoApp component with Redux store.
 */

const mapStateToProps = (state) => {
    return { todos: state };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch( todoAdd(text) );
        },
        onCheck: (id, checked) => {
            dispatch( todoCheck(id, checked) );
        },
        onRemove: (id) => {
            dispatch( todoRemove(id) );
        }
    }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(TodoApp);