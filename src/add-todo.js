import React, { Component } from 'react';

export default class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({ content: e.target.value })
    }

    handleSubmit = (e) => {
       this.props.addTodo(this.state);
       this.setState({ content: '' })
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input type='text' onChange={ this.handleChange } value={this.state.content } />
                    <button type='submit'>add</button>
                </form>
            </div>
        )
    }
}