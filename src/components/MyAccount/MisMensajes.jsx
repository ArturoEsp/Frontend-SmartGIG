import React, { useState } from 'react';
import { useMyMessages } from './hooks'
import { EDIT_MESSAGE } from '../../graphql/Mutation/mensaje.mutation'

import './styles.css'
import { useMutation } from '@apollo/client';
import toast from 'react-hot-toast';

export const MisMensajes = ({ logout }) => {
    const [mensajes, loadingMensajes, errorMensajes] = useMyMessages()

    const handleLogout = () => logout(null)

    return (
        <div className='c__misMensajes'>
            <div className="title">
                Mis mensajes enviados: (Puedes editarlos en tiempo real)
                
            </div>
            <div className="wrapper">
                {
                    loadingMensajes ? <span>Cargando...</span> :
                        mensajes.map(e => (<Mensaje mensaje={e} />))
                }
            </div>
            <div className="close">
                <button className='primary' onClick={handleLogout}>Cerrar sesión</button>
            </div>
        </div>
    )
}

const Mensaje = ({ mensaje }) => {
    const [message, setMessage] = useState(mensaje.mensaje)
    let timeout = null

    const [editMensaje] = useMutation(EDIT_MESSAGE, {
        onCompleted: ({ editMensaje }) => {
            if (editMensaje) {
                console.log('Se actualizo el mensaje!')
            }
        },
        onError: (error) => {
            toast.error(`FATAL ERROR: ${error.message}`)
        }
    })

    const handleChange = (e) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            editMensaje({ variables: { _id: mensaje._id, mensaje: e.target.value } })
            clearTimeout(timeout)
        }, 1000)
    }

    return (
        <div className="c__mensaje">
            <input type="text" onKeyUp={handleChange} value={message} onChange={e => (setMessage(e.target.value))} />
        </div>
    )
}