import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  
  const handleClick = () => {
    setUsuario('Milo')
  }

  const [usuario, setUsuario] = useState(null)

  const enter = (e) => {
    if (e.key === 'Enter') {
      setUsuario(e.target.value)
    }
  }

  return (
    <>
      <section>
        <h2>Mi nombre es: {usuario}</h2>
        <input type="text" placeholder='Ingresa tu nombre' onKeyDown={enter}/>
        <button onClick={handleClick}>Valor por defecto</button>
        
      </section>
    </>
  )
}

export default App
