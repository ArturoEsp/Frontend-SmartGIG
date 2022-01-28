import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import Login from './Login';
import { MisMensajes } from './MisMensajes';

import './styles.css'

const MyAccount = () => {

    const [user, setUser] = useState(null)
    
    useEffect(() => {
        if (user) {
            localStorage.setItem('token', user.token)
        }
    }, [user])

    const logout = () => {
        setUser(null)
        localStorage.removeItem('token')
    }
    

    return (
        <Popup
            trigger={<button className="button">{user ? 'Mi cuenta' : 'Iniciar sesión'}</button>}
            modal
            nested
            className='modal-MyAccount'
        >
            {
                user ? <MisMensajes logout={logout} /> : 
                <Login onLogin={setUser} />
            }
        </Popup>
    )
};

export default MyAccount
