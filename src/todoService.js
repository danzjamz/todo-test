import React from 'react';

export default function GetTodos() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch('https://danzjamz-todo-api.herokuapp.com/todos', requestOptions)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
        });
}

export function PostTodo(todo) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: todo, done: false })
    }

    return fetch(`https://danzjamz-todo-api.herokuapp.com/todo`, requestOptions)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
        });
}

export function PutTodo(id, done) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done: done })
    }

    return fetch(`https://danzjamz-todo-api.herokuapp.com/todo/${ id }`, requestOptions)
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

    return fetch(`https://danzjamz-todo-api.herokuapp.com/todo/${ id }`, requestOptions)
        .then(res => console.log(res))
        .catch(err => {
            console.log(err);
        });
}