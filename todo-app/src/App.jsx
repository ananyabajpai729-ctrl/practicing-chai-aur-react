import { useState, useEffect} from 'react'
import Navbar from './Components/Navbar.jsx'
import Todos from './Components/Todos.jsx'
import AddTodo from './Components/AddTodo.jsx'
import Footer from './Components/Footer.jsx'
import About from './Components/About.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from 'react-router-dom';
import './App.css'

function App() {
  let initTodo;
  if(localStorage.getItem("todos")=== null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
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

  const [todos, setTodos] = useState(initTodo);
  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return(
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path = '/' element={
          <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
          </>
        } />
        <Route exact path = '/about' element = {<About/>} />
      </Routes>
      
      <Footer />
      </Router>
    </>
  )
}

export default App
