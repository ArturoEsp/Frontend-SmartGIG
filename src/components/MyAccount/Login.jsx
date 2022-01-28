import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import toast from 'react-hot-toast'

import { useMutation } from '@apollo/client'
import { LOGIN } from '../../graphql/Mutation/usuario.mutation'
 
const Login = ({ onLogin }) => {

    const [login] = useMutation(LOGIN, {
        onCompleted: ({ login }) => {
            if (login.token) {
                onLogin(login)
                toast.success('¡Bienvenido de vuelta!')
            }
        },
        onError: (error) => {
            toast.error(`FATAL ERROR: ${error.message}`)
        }
    })

    const handleSubmit = (values) => {
        if (values.email === '') return toast.error('Ingresa tu correo.')
        if (values.password === '') return toast.error('Ingresa tu contraseña.')

        login({ variables: values })
    } 

    return (
        <div className="c__login">
            <div className="title">
                Iniciar sesión
            </div>
            <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
                <Form>
                    <Field type='text' placeholder='Ingresa tu email' name='email' />
                    <Field type='password' placeholder='Ingresa tu contraseña' name='password' />
                    <button type='submit' className='primary'>Ingresar</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Login
