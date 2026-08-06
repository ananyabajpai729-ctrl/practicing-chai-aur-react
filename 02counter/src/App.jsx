import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(10);
  const addValue = () => {
    if(counter < 20){
      counter += 1;
      setCounter(counter);
    }
  }
  const removeValue = () => {
    if(counter > 0){
      counter -= 1;
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick = {addValue}>add value</button>
      <br/>
      <button
      onClick = {removeValue}>remove value</button>
    </>
  )
}

export default App
