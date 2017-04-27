import React from 'react';
import PropTypes from 'prop-types';

/**
 * Todo component renders checkbox, label and remove button
 */

const Todo = ({ checked, text, date, onCheck, onRemove }) => {
    return (
        <div className={'todo' + (checked? ' checked': '')} title={date}>
            <label>
                <input type="checkbox" checked={checked} onChange={e => onCheck(e.target.checked)}/>
                {text}
            </label>
            <a onClick={e => onRemove()}>[del]</a>
        </div>
    );
}

Todo.propTypes = {
    checked: PropTypes.bool,
    text: PropTypes.string,
    date: PropTypes.any,
    onCheck: PropTypes.func,
    onRemove: PropTypes.func
};

export default Todo;