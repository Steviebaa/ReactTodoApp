import React from 'react'
import Tilt from 'react-tilt'

const Todo = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <Tilt className="Tilt" options={{ max : 0 , scale: 1.01}} >
                    <div className="collection-item Tilt-inner custom-item" onClick={() => {deleteTodo(todo.id)}} key={todo.id}>
                        <span>{todo.content}</span>
                    </div>
                </Tilt>
            )
        })
    ) : (
            <p className="center">You have no todos left!</p>
    )

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
};

export default Todo;