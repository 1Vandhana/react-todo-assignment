//////-----State Management---////
import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // 1 TASK FOR ADD
  const handleAdd = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id:Date.now(),
      title: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };
// 2. TOGGLE COMPLETE
  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  //3.TASK DELETE FROM THE LIST
  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  // EDIT TASK FOR TODOLIST
  const handleEdit = (id, newTitle) => {
    const editedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setTodos(editedTodos);
  };
  return (
    <div className="app-container">
      <Header />

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add-btn" onClick={handleAdd}>Add</button>
      </div>
      <ToDoList todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
