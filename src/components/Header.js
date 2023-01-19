import { useState } from "react";
import "../../style.css";
// import ToDo from "./ToDo";

const Header = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addTodo() {
    if (inputText) {
      setTodoList([...todoList, inputText]);
      setInputText("");
    }
  }

  function deleteTodo(index) {
    const updatedTodo = todoList.filter((todo, id) => {
      return id != index;
    });

    setTodoList([...updatedTodo]);
  }

  const styleLi = {
    textDecoration: "dashed",
    backgroundColor: "gray",
  };

  return (
    <div className="mainDiv">
      <div className="header">
        <div>
          <h1 className="heading">My To Do List</h1>
        </div>
        <div className="inputDiv">
          <input
            onChange={(e) => setInputText(e.target.value)}
            className="inputTitle"
            type="text"
            placeholder="Title..."
          />
          <button onClick={addTodo} className="addBtn">
            Add
          </button>
        </div>
      </div>

      <div className="innerDiv">
        <ul className="lists">
          {todoList.map((todo, index) => (
            <div key={index} className="listDiv">
              <li
                style={{ display: "flex", margin: "0px 10px" }}
                className="listItem"
              >
                {todo}
              </li>
              <button onClick={() => deleteTodo(index)} className="deleteBtn">
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
