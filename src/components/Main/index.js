import React from 'react'
import EscribirMensaje from '../EscribirMensaje'
import { Toaster } from 'react-hot-toast'

import './styles.css'
import MostrarMensaje from '../MostrarMensaje';

const Main = () => {
  return (
      <div className='c__main'>
        <Toaster />
        <EscribirMensaje />
        <MostrarMensaje />
      </div>
  )
};

export default Main
