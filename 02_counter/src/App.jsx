import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(15)
// let counter = 15
const addValue = () =>{
  //  console.log("value added" , Math.random());
  if(counter<20){
    setCounter(counter+1);
  }
  console.log("Clicked" , counter);

}
const removeVal = () =>{
 if(counter>0){
   setCounter(counter-1);
 }
}
  return (
    <>
      <h1>React Day 3| learning dev</h1>
      <h2>Counter value: {counter} </h2>
      <button 
      onClick= {addValue} >Add Value :{counter}</button>
      <br/>
      <button
      onClick={removeVal}>Remove Value: {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
