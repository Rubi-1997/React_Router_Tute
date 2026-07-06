import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import Dashboard from './Dashboard'
import { RouterProvider,createBrowserRouter } from 'react-router'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"",
      element:<Home/>
    },
{
      path:"/login",
      element:<Login/>
    },
{
      path:"/SignUp",
      element:<SignUp/>
    },
{
      path:"/Dashboard",
      element:<Dashboard/>
    },

  ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
