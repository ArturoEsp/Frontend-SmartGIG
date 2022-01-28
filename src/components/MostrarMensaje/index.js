import React from 'react'
import { useMessageRandom } from './hooks'
import './styles.css'

const MostrarMensaje = () => {

    const [mensaje, loadingMensaje, errorMensaje, refetch] = useMessageRandom()

    const handleClick = () => refetch()

    return (
        <div className="c__mostrarMensaje box-container">
            <div className="title">
                <h2>Mensaje aleatorio: </h2>
            </div>
            <div className="content">
                <div className="show-message">
                    {
                        loadingMensaje ? <span className="loading">Cargando...</span> : <h2>{mensaje?.mensaje ?? ''}</h2>
                    }
                </div>
                <button className='primary' onClick={handleClick}>Generar mensaje</button>
            </div>
        </div>
    )
}

export default MostrarMensaje
