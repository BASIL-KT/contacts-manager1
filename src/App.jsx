import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import View from './pages/View'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Edit from './pages/Edit'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/'element={<Landing/>}/>
        <Route path='/view'element={<View/>}/>
        <Route path='/edit'element={<Edit/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
