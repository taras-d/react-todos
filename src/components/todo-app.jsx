import React from 'react';
import PropTypes from 'prop-types';

import TodoList from './todo-list';
import TodoAdd from './todo-add';

/**
 * TodoApp presentational component.
 * Renders TodoList and TodoAdd components.
 */

const TodoApp = ({ todos, newTodo, onCheck, onRemove, onTextChange, onAdd }) => {
    return (
        <div>
            <h4>Todos</h4>
            <TodoList items={todos} 
                onCheck={onCheck} onRemove={onRemove}/>
            <TodoAdd text={newTodo} 
                onChange={onTextChange} onAdd={onAdd}/>
        </div>
    );
}

TodoApp.propTypes = {
    todos: PropTypes.array,
    newTodo: PropTypes.string,
    onCheck: PropTypes.func,
    onRemove: PropTypes.func,
    onTextChange: PropTypes.func,
    onAdd: PropTypes.func
};

export default TodoApp;
