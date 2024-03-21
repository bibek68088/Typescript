import { useState } from "react"

interface item {
    id: number,
    text: string,
    completed: boolean,
}

const ToDoList: React.FC = () => {
    const [todos, setTodos] = useState<item[]>([
        {id: 1, text: "Learn typescript ", completed: false},
        {id: 2, text: "Buld a todo list ", completed: false},
    ])
    /** For the completion of a todo task */
    const handleToggle = (id: number) => {
        setTodos (
            todos.map((todo) => {
                if(todo.id === id)
                return {...todo, completed: !todo.completed}
            return todo;
            })
        )
    }

    /** For adding todo task in the above list */
    const [input, setInput] = useState<string>('');

    /** handle the Add button upon clicking */
    const handleClick =  () =>{
        const newTodo: item = { id: Date.now(), text: input, completed: false}
        setTodos([...todos, newTodo])
    }

  return (
    <div className="main-container">
        <h1>To Do List</h1>
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.id} 
                    onClick={() => handleToggle(todo.id)}
                    style={{textDecoration: todo.completed ? "line-through": "none"}}
                >{todo.text}</li>
            ))}
        </ul>
        <input
            type="text"
            placeholder="Add to-do item "
            onChange={(e) => setInput(e.currentTarget.value)}
        />
        <button 
            type="submit"
            onClick={handleClick}
        >Add</button>
    </div>
  )
}

export default ToDoList