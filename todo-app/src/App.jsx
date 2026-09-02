import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Todos from './Components/Todos.jsx'
import AddTodo from './Components/AddTodo.jsx'
import Footer from './Components/Footer.jsx'
import './App.css'

function App() {
  function onDelete(todo){
    console.log("You are onDelete", todo);
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }))
  }

  const addTodo = (title, desc) =>{
    let sno = todos.length + 1;
    let newTodo = {
      sno: sno,
      title : title,
      description: desc
    }
    setTodos([...todos, newTodo]);
    console.log("I am adding this todo", newTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno:1,
      title : "Study frontend",
      description: "Study react from Code with Harry channel and make todo list app as practice"
    },
    {
      sno:2,
      title : "Study backend",
      description: "Study javascript backend from chai aur code"
    },
    {
      sno:3,
      title : "Practice DSA",
      description: "Revise graph and try to solve new problems"
    },
    {
      sno:4,
      title : "Watch Polity Lectures",
      description: "Finish Polity subject in PW batch, revise notes and practice DPP"
    },
    {
      sno:5,
      title : "Chant",
      description: "Chant Hari Nama with full devotion"
    }
  ])
  return(
    <>
      <Navbar />
      <AddTodo addTodo = {addTodo}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer />
    </>
  )
}

export default App
