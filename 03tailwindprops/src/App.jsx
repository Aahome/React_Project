import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Aziz'
    age: '1000'
    address: {
      city: 'Batam'
      state: 'Riau'
      country: 'Indonesia'
    }
  }
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="aziz" myArr={[1,2,3]}/>
      <Card username="Ahmd" post="Staff Engg."/>
      <Card />
    </>
  )
}

export default App
