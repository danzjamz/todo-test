import React from 'react';

export default function GetTodos() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch('http://127.0.0.1:8200/todos', requestOptions)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
        });
}

export function DeleteTodo(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }

    return fetch(`http://127.0.0.1:8200/todo/${ id }`, requestOptions)
        .then(res => console.log(res))
        .catch(err => {
            console.log(err);
        });
}