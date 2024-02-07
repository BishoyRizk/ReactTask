import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import StartFrameWork from './StartFrameWork/StartFrameWork'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import NotFound from './NotFound/NotFound'



let routers = createHashRouter([
  {path:'',element:<StartFrameWork/>,children:
  [{index: true,element:<Home/>},
    {path:'About',element:<About/>},
  {path:'Portfolio',element:<Portfolio/>},
  {path:'*',element:<NotFound/>},
  {path:'Contact',element:<Contact/>},
]}
])
export default function App() {
  return <>

<RouterProvider router={routers}></RouterProvider>
  </>
}
