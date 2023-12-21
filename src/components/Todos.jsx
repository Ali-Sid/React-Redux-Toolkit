import { useDispatch, useSelector } from "react-redux"
import { removeToDo } from "../features/todo/todoSlice"


function ToDos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
    <div>My Todos</div>
    {todos.map((todo) => (
        <li key={todo.id}>{todo.text} <button onClick={() => dispatch(removeToDo(todo.id))}>X</button></li>
    ))}
    </>
  )
}

export default ToDos