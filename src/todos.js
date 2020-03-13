import React, { Component } from 'react';
import { PutTodo } from './todoService';

// const Todos = ({todo, deleteTodo}) => {
export default class Todos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            done: this.props.todo.done
        }
    }

    toggleDone = (id) => {
        PutTodo(id, !this.state.done)
            .then(res => {
                this.setState({ done: res.done })
            });
    }

    render() {
        return (
            <div className='todo-item'>
                <div className='todo'>
                    <input type='checkbox' checked={ this.state.done } onChange={ () => this.toggleDone(this.props.todo.id) } />
                    <p className={ this.state.done ? 'done' : null }>{ this.props.todo.title }</p>
                </div>
                <button onClick={ () => this.props.deleteTodo(this.props.todo.id) }>Delete</button>
            </div>
        )
    }
}
