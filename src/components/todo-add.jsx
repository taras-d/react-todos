import React from 'react';
import PropTypes from 'prop-types';

/**
 * TodoAdd component renders input and add button
 */

class TodoAdd extends React.Component {

    render() {
        return (
            <div className="todo-add">
                <form onSubmit={e => this.submit()}>
                    <input type="text" placeholder="..." ref={i => this.input = i}/>
                    <a onClick={e => this.submit()}>[add]</a>
                </form>
            </div>
        );
    }

    submit() {
        let value = this.input.value;
        if (value && value.trim()) {
            this.props.onAdd(value);
            this.input.value = '';
        }
    }
}

TodoAdd.propTypes = {
    onAdd: PropTypes.func
};

export default TodoAdd;