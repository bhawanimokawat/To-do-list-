 import { useState } from "react";
import Navbar from "./components/Navbar";
 function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

   
  const handleEdit = (index) => {
  setTodo(todos[index].todo)
  handleDelete(index)
}
   
  const handleDelete = (index) => {
  const newTodos = todos.filter((_, i) => i !== index)
  setTodos(newTodos)
}
  const handleAdd =()=>{
  setTodos([... todos, {todo, iscompleted: false}])
  setTodo("")
  }

 const handleChange =(e)=>{
  setTodo(e.target.value)
 }



  return(
    <>
    <Navbar/>
    <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
      <div className="addtodo">
        <h2 className="text-2xl font-bold">Add a Todo</h2>
        <input onChange={handleChange} value={todo} className= "bg-amber-50 font-bold cursor-pointer p-1 rounded-md w-1/2"   type="text" />
        <button onClick={handleAdd}      className= "bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md hover:font-bold cursor-pointer mx-7">ADD</button>
      </div>
      <h2 className="text-xl font-bold">Your Todos</h2>
     <div className="todos mt-4">
  {todos.map((item, index) => {
    return (
      <div key={index} className="todo flex justify-between items-center bg-white p-3 rounded-lg shadow-md my-2">
        <div className="text font-semibold">{item.todo}</div>

        <div className="buttons">
          <button
            onClick={() => handleEdit(index)}
            className="bg-blue-500 hover:bg-blue-700 p-2 text-sm text-white rounded-md mx-1"
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(index)}
            className="bg-red-500 hover:bg-red-700 p-2 text-sm text-white rounded-md mx-1"
          >
            Delete
          </button>
        </div>
      </div>
    )
  })}
</div>
    </div>
    
    
    </>
  )
  
 }
 export default App