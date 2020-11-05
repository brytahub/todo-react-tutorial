import React, {useState} from "react"
import "./app.css"

function App () {
    const [newTodo, setNewTodo] = useState("")
    const [todos, setTodos] = useState([
        {id: 1, name: "John", completed: true},
        {id: 2, name: "Paul", completed: false},
        {id: 3, name: "Peter", completed: true},
    ])

    function handleSubmit(e) {
        e.preventDefault()
        const todoToAdd = {id: new Date().getTime(), name: newTodo, completed: false}
        setTodos([...todos, todoToAdd])
        setNewTodo("")
    }

    function handleDeleteTodo(tdId) {
        const filteredTodos = todos.filter(todo => todo.id !== tdId)
        // const filteredTodos = todos.filter(function(todo) {
        //     return todo.id !== tdId
        // })
        setTodos(filteredTodos)
    }
    function toggleComplete(tdId) {
        const toggledTodos = todos.map(todo => todo.id === tdId ? {...todo, completed: !todo.completed} : todo)
        setTodos(toggledTodos)
    }

    return (
        <div className="container">
            <div className="todo-container">
                <div className="todo-title">Todo List ({todos.length})</div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input className="add-todo" type="text" value={newTodo}
                        onChange= {(e) => setNewTodo(e.target.value)}
                     />
                </form>
                <div className="todos">
                    {todos.map((todo) => (
                        <div className="todo" key={todo.id}>
                            <button 
                                className = {`todo-name ${todo.completed ? "todo-completed" : "todo-incomplete"}`}
                                onClick = {() => toggleComplete(todo.id)}
                                
                            >
                            {todo.name}
                            </button>
                            <button onClick = {() => handleDeleteTodo(todo.id)}>Delete Todo</button>
                        </div>
                    ))}
            </div>
            </div>
            
        </div>
    )
}

export default App;