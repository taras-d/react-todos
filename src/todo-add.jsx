import React from 'react';
import PropTypes from 'prop-types';

const TodoAdd = ({ text, onChange, onAdd }) => {
    return (
        <div className="todo-add">
            <input type="text" value={text} onChange={onChange} 
                onKeyUp={e => e.keyCode === 13 && onAdd(e)}/>
            <a onClick={onAdd}>[add]</a>
        </div>
    );
}

TodoAdd.defaultProps = {
    text: '',
    onChange: e => {},
    onAdd: e => {}
};

TodoAdd.propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func,
    onAdd: PropTypes.func
};

export default TodoAdd;