import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
// import Login from './Login'
// import SignUp from './SignUp'
// import Home from './Home'
// import Dashboard from './Dashboard'
import {Outlet} from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Outlet/>
        
      </div>

      
    </>
  )
}

export default App
