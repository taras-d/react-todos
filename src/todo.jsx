import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ checked, text, date, onCheck, onRemove }) => {
    return (
        <div className={'todo' + (checked? ' checked': '')} title={date}>
            <label>
                <input type="checkbox" checked={checked} onChange={onCheck}/>
                {text}
            </label>
            <a onClick={onRemove}>[del]</a>
        </div>
    );
}

Todo.defaultProps = {
    checked: false,
    text: '',
    date: '',
    onCheck: e => {},
    onRemove: e => {}
};

Todo.propTypes = {
    checked: PropTypes.bool,
    text: PropTypes.string,
    date: PropTypes.any,
    onCheck: PropTypes.func,
    onRemove: PropTypes.func
};

export default Todo;