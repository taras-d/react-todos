import { connect } from 'react-redux';

import TodoApp from '../components/todo-app';
import { todoAdd, todoCheck, todoRemove, todoTextChange } from '../actions';

/**
 * App container component.
 * Connects TodoApp component with Redux store.
 */

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        newTodo: state.newTodo
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch( todoAdd(text) );
            dispatch( todoTextChange('') );
        },
        onCheck: (id, checked) => {
            dispatch( todoCheck(id, checked) );
        },
        onRemove: (id) => {
            dispatch( todoRemove(id) );
        },
        onTextChange: (text) => {
            dispatch( todoTextChange(text) );
        },
    }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(TodoApp);