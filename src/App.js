import React from 'react';
import TodoItem from './components/TodoItem'
import todoData from './data/TodoData'
import Login from './components/Login'

import './App.css';

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            todos: todoData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500);
    }

    handleChange (id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            });
            console.log(todoData);
            return {
                todos: updatedTodos
            }
        })
    }



    render () {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>);
        return (
            <div>
                <div className="todo-list">
                    {todoItems}
                </div>
                <Login isLoggedIn={true}/>
            </div>
        )
    }
}

export default App;




