import React from 'react'
import './assets/css/style.css'
import Page from './page/Page'
import Projects from './page/Projects'
import Contact from './page/contact'
import NavBar from './Components/NavBar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import WebLayout from './layouts/WebLayout'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<WebLayout/>}>
      <Route path='/' element={<Page/>} />
      <Route path='project' element={<Projects/>}/>
      <Route path='contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
