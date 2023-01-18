import { useState } from "react";

// import ToDo from "./ToDo";

const Header = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  function addTodo(title) {
    setTodoList(...todoList, title);
    setInputText("");
  }

  return (
    <>
      <div className="header">
        <div>
          <h1 className="heading">My To Do List</h1>
        </div>
        <div>
          <input
            onChange={(e) => setInputText(e.target.value)}
            className="inputTitle"
            type="text"
            placeholder="Title..."
          />
          <button onClick={() => addTodo(inputText)} className="addBtn">
            Add
          </button>
        </div>
      </div>

      <ul id="myUL">
        <li>Hit the gym</li>
        <li className="checked">Pay bills</li>
        <li>Meet George</li>
        <li>Buy eggs</li>
        <li>Read a book</li>
        <li>Organize office</li>
      </ul>
    </>
  );
};

export default Header;
