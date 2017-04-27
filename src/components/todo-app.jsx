import React from 'react';
import PropTypes from 'prop-types';

import TodoList from './todo-list';
import TodoAdd from './todo-add';

/**
 * TodoApp component renders TodoList and TodoAdd components
 */

const TodoApp = ({ todos, onCheck, onRemove, onAdd }) => {
    return (
        <div>
            <h4>Todos</h4>
            <TodoList items={todos} onCheck={onCheck} onRemove={onRemove}/>
            <TodoAdd onAdd={onAdd}/>
        </div>
    );
}

TodoApp.propTypes = {
    todos: PropTypes.array,
    onCheck: PropTypes.func,
    onRemove: PropTypes.func,
    onAdd: PropTypes.func
};

export default TodoApp;
