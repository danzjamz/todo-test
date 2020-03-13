import React from 'react';

const Todos = ({todo, deleteTodo}) => {

    let done = todo.done;

    return (
        <div className='todo-item' key={ todo.id }>
            <span >{ todo.title }</span>
            <button onClick={ () => deleteTodo(todo.id) }>Delete</button>
        </div>
    )
}

export default Todos;