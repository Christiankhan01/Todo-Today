import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from './EditTodo';

const ListTodos = ({ allTodos, setTodosChange }) => {

    //won't re-render the state, will continue to render an empty ... 
    //... array after state updated, must use useEffect for ...
    //... re-rendering state after state update/change. 
    const [todos, setTodos] = useState([]);
    //Delete todo function 

    async function deleteTodo(id) {
        try {
            await fetch(`/dashboard/todos/${id}`, {
                method: "DELETE",
                headers: { token: localStorage.token }
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    //Keeping watch for todos to change... 
    //... and if it does change ...
    //... setTodos to all todos ...
    //... with setTodos(allTodos). 
    useEffect(() => {
        setTodos(allTodos);
    }, [allTodos]);

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    { todos.length !== 0 &&
                        todos[0].todo_id != null &&
                        todos.map(todo => (
                            <tr key={ todo.todo_id }>
                                <td>{ todo.description }</td>
                                <td><EditTodo todo={ todo } setTodosChange={ setTodosChange } /></td>
                                <td><button className="btn btn-danger" onClick={ () => deleteTodo(todo.todo_id) }>Delete</button></td>
                            </tr>
                        )) }
                </tbody>
            </table>
        </Fragment >
    )
}

export default ListTodos;
