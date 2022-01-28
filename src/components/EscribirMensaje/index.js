import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import toast from 'react-hot-toast'


import { useMutation } from '@apollo/client'
import { CREATE_MESSAGE } from '../../graphql/Mutation/mensaje.mutation'

import './styles.css'

const EscribirMensaje = () => {

    const [initialValues, setInitialValues] = useState({ mensaje: 'Hola...' })

    const [createMessage] = useMutation(CREATE_MESSAGE, {
        onCompleted: ({createMessage}) => {
            if (createMessage) {
                return toast.success('¡Mensaje enviado al backend!')
            }
        },
        onError: (error) => {
            toast.error(`FATAL ERROR: ${error.message}`)
        }
    })

    const handleSubmit = (values) => {
        if (values.mensaje === '') return toast.error('Ingresa un mensaje más largo...')
        createMessage({ variables: values })
    }

  return (
      <div className="c__escribirMensaje box-container">
        <div className="title">
            <h2>Escribe un mensaje anónimo: </h2>
        </div>
        <div className="content">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field as="textarea" name='mensaje' />
                    <button type='submit' className='primary'>Enviar</button>
                </Form>
            </Formik>
        </div>
      </div>
  )
}

export default EscribirMensaje