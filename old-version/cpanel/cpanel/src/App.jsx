import { useState } from 'react'
import Login from './pages/login'
import Form from "./pages/form"
import Base from "./pages/base"
import {Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/base' element={<Base/>} />
      </Routes>
    </>
  )
}

export default App
