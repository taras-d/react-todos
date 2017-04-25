import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './todo-list';
import TodoAdd from './todo-add';

class App extends React.Component {

    constructor() {

        super();

        this.state = { 
            items: this.getItemsFromLocalStorage(),
            newTodo: '' 
        };

        this.onCheck = this.onCheck.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onTextChange = this.onTextChange.bind(this);

        window.addEventListener('beforeunload', 
            () => this.saveItemsToLocalStorage() );
    }

    render() {
        let {items, newTodo} = this.state;
        return (
            <div>
                <h4>Todos</h4>
                <TodoList items={items} 
                    onCheck={this.onCheck} onRemove={this.onRemove}/>
                <TodoAdd text={newTodo} 
                    onChange={this.onTextChange} onAdd={this.onAdd}/>
            </div>
        );
    }

    onCheck(id, checked) {
        this.setState({
            items: this.state.items.map(i => {
                if (i.id === id) {
                    return Object.assign({}, i, { checked: checked });
                }
                return i;
            })
        });
    }

    onRemove(id) {
        this.setState({
            items: this.state.items.filter(i => i.id !== id)
        });
    }

    onAdd(event) {

        let state = this.state;
        if (!state.newTodo) {
            return;
        }
        
        let date = new Date();

        this.setState({
            items: [
                ...state.items,
                { 
                    id: date.getTime(),
                    checked: false,
                    text: state.newTodo,
                    date: date
                } 
            ],
            newTodo: ''
        });
    }

    onTextChange(event) {
        this.setState({ newTodo: event.target.value });
    }

    getItemsFromLocalStorage() {
        let items = localStorage.getItem('todos');
        return items? JSON.parse(items): [];
    }

    saveItemsToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.state.items));
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));