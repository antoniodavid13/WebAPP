import { useState } from 'react'
import camiloImagen from './assets/camilo.gif'
import Logo from './assets/logo.png'
import './App.css'
import Form from "./componentes/botones.jsx"

function App() {

  return (
    <>
      <div className='container-sm text-center'>
            <img src={Logo} alt='Foto de Camilo' className='logo-creativo'/>
        <div> 
            <img src={camiloImagen} className="text-center  rounded-circle  camilo-imagen" alt="Vite logo" />
        </div>
        <Form/>

      </div>
    </>
  )
}

export default App
