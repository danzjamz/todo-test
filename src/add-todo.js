import React, { Component } from 'react';

export default class AddTodo extends Component {
    state = {
        todo: ''
    }

    handleChange = (e) => {
        this.setState({ todo: e.target.value })
    }

    handleSubmit = (e) => {
       this.props.addTodo(this.state);
       this.setState({ todo: '' })
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form className='add-todo' onSubmit={ this.handleSubmit }>
                    <input type='text' onChange={ this.handleChange } value={this.state.content } />
                    <button type='submit'>add</button>
                </form>
            </div>
        )
    }
}