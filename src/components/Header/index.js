import React from 'react'
import SVG from '../../assets/svg/logo-smartgig-white.svg'
import MyAccount from '../MyAccount'
import './styles.css'

const Header = () => {

    return(
        <div className="c__header">
            <div className="content">
                <div className="logo">
                    <img src={SVG} alt="Logotipo" />
                </div>
                <div className="title">
                    <h2>¡Bienvenido Usuario!</h2>
                </div>
                <div className="login">
                    <MyAccount />
                </div>
            </div>
        </div>
    )
}

export default Header