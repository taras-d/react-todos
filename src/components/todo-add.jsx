import React from 'react';
import PropTypes from 'prop-types';

/**
 * TodoAdd presentational component.
 * Renders input and add button.
 */

const TodoAdd = ({ text, onChange, onAdd }) => {
    return (
        <div className="todo-add">
            <input type="text" value={text} placeholder="..."
                onChange={e => onChange(e.target.value)} 
                onKeyUp={e => e.keyCode === 13 && text && onAdd(text)}/>
            <a onClick={e => text && onAdd(text)}>[add]</a>
        </div>
    );
}

TodoAdd.propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func,
    onAdd: PropTypes.func
};

export default TodoAdd;