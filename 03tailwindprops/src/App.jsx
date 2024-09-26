import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [counter, setCount] = useState(15);
  let myObj = {
    username: "kapil",
    age: 21

  }
  let newArr = [1,2,3];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me"/>
      <Card username='kapil sharma btn' btnText="visit me"/>
    </>
  )
}

export default App
