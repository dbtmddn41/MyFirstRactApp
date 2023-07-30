import { useState } from "react";

function ToDoApp() {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "")
      return
      setToDos((prevArray) => [toDo, ...prevArray]);
      setToDo("");
  }
  return (
    <div>
      <h1>My TO Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="나의 할 일은?" />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
    </div>
  )
}

export default ToDoApp;
