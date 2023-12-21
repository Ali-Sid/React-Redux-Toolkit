import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../features/todo/todoSlice";

function AddToDo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addToDo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Add a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
}

export default AddToDo;
