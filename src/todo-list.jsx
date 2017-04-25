import React from 'react';
import PropTypes from 'prop-types';

import Todo from './todo';

const TodoList = ({ items, onCheck, onRemove }) => {

    let todos;

    if (items.length > 0) {
        todos = items.map(i => {
            return <Todo 
                key={i.id} 
                checked={i.checked} 
                text={i.text} 
                date={i.date} 
                onCheck={e => onCheck(i.id, e.target.checked)}
                onRemove={e => onRemove(i.id)}
            />
        });
    } else {
        todos = <span className="empty">no todos</span>;
    }

    return <div className="todo-list">{todos}</div>;
}

TodoList.defaultProps = {
    items: [],
    onCheck: (id, checked) => {},
    onRemove: id => {}
};

TodoList.propTypes = {
    items: PropTypes.array,
    onCheck: PropTypes.func,
    onRemove: PropTypes.func
};

export default TodoList;