import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, parsePath, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import { About } from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { User } from './components/User.jsx'
import { Github, gitHubLoaderInfo } from './components/Github.jsx'


// const router = createBrowserRouter([{
//   path: '/',
//   element: <App/>,
//   children: [
//     {path:'',element:<Home/>},{path:'about',element:<About/>},{path:'contact',element:<Contact/>}
//   ]


// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route 
      loader={gitHubLoaderInfo}
      path='github' element={<Github/>}/>
  
    </Route>
  )
)

createRoot(document.getElementById('root')).render(

   
<RouterProvider router={router}/>

 

)
