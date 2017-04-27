import React from 'react';
import PropTypes from 'prop-types';

/**
 * TodoAdd component renders input and add button
 */

class TodoAdd extends React.Component {

    render() {
        return (
            <div className="todo-add">
                <form onSubmit={e => {e.preventDefault(); this.submit()}}>
                    <input type="text" placeholder="..." ref={i => this.input = i}/>
                    <a onClick={() => this.submit()}>[add]</a>
                </form>
            </div>
        );
    }

    submit() {
        let input = this.input;
        if (input && input.value) {
            this.props.onAdd(input.value);
            input.value = '';
        }
    }

}

TodoAdd.propTypes = {
    onAdd: PropTypes.func
};

export default TodoAdd;