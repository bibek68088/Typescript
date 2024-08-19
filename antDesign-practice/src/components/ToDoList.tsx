import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface Todo {
  text: string;
  completed: boolean;
  date: string;
}

const ToDoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      console.log("Loaded todos from localStorage:", savedTodos);
      if (savedTodos) {
        const parsedTodos = JSON.parse(savedTodos);
        console.log("Parsed todos:", parsedTodos);
        setTodos(parsedTodos);
      }
    } catch (error) {
      console.error("Error loading todos from localStorage:", error);
    }
  }, []);

  // Log when todos state is updated
  useEffect(() => {
    console.log("Todos state updated:", todos);
  }, [todos]);

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      console.log("Loaded todos from localStorage:", savedTodos);
      if (savedTodos) {
        const parsedTodos = JSON.parse(savedTodos);
        console.log("Parsed todos:", parsedTodos);
        setTodos(parsedTodos);
        console.log("Setting todos state:", parsedTodos);
      }
    } catch (error) {
      console.error("Error loading todos from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    try {
      if (todos.length > 0) {
        console.log("Saving non-empty todos to localStorage:", JSON.stringify(todos));
        localStorage.setItem("todos", JSON.stringify(todos));
      } else {
        console.log("Todos is empty, not saving to localStorage");
      }
    } catch (error) {
      console.error("Error saving todos to localStorage:", error);
    }
  }, [todos]);

  const onAdd = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim().length === 0) {
      message.warning("Task cannot be empty!!!");
      return;
    }
    const newTodo: Todo = {
      text: inputValue,
      completed: false,
      date: new Date().toLocaleString(),
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setInputValue("");
    message.success("Task added successfully!");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (index: number) => {
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
    message.success("Task deleted successfully!");
  };

  const toggleComplete = (index: number) => {
    setTodos(prevTodos => prevTodos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  console.log("Current todos state before render:", todos);

  return (
    <div className="" id="todolist">
      <div className="flex flex-col justify-center items-center my-10">
        <div className="my-4">
          <h2 className="text-2xl font-mono">Lists</h2>
        </div>
        <div className="border-4 w-[500px] h-auto rounded-lg shadow-xl bg-yellow-200">
          <Form className="my-10 p-6 mx-auto">
            <div className="flex justify-center items-center gap-4 my-4">
              <Input
                type="text"
                placeholder="Feeling lonely!!! Add a task to get engaged..."
                className="border-2 shadow-xl font-mono"
                value={inputValue}
                onChange={handleChange}
              />

              <Button
                onClick={onAdd}
                className="flex justify-end items-center border-0 drop-shadow-xl w-24 mx-4"
                icon={
                  <PlusOutlined className="bg-yellow-300 p-4 text-black rounded-lg" />
                }
              />
            </div>
            <div>
              <h2 className="font-mono text-2xl mt-20 font-semibold">To Do Lists</h2>
              {todos.length === 0 ? (
                <p>No todos found. Add some tasks!</p>
              ) : (
                <ul className="my-6">
                  {todos.map((todo, index) => (
                    <li className="flex justify-between items-center gap-4 my-4" key={index}>
                      <div>
                        <Input
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => toggleComplete(index)}
                          className="flex items-center h-6 w-4"
                        />
                      </div>
                      <h2
                        className="text-lg font-mono"
                        style={{
                          textDecoration: todo.completed ? "line-through" : "none",
                        }}
                      >
                        {todo.text}
                      </h2>
                      <p className="text-teal-700">{todo.date}</p>
                      <Button
                        className="items-center bg-red-500"
                        icon={<DeleteOutlined className="text-white" />}
                        onClick={() => handleDelete(index)}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;