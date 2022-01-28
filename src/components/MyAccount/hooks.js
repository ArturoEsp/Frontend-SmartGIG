import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { GET_MY_MESSAGE } from '../../graphql/Query/mensaje.query'
 
export const useMyMessages = () => {
    const [mensajes, setMensajes] = useState([])

    const { data, loading: loadingMensajes, error: errorMensajes } = useQuery(GET_MY_MESSAGE, {
        fetchPolicy: 'no-cache'
    })
    
    useEffect(() => {
      if (data) setMensajes(data.getMyMessages)
    }, [data])

    return [mensajes, loadingMensajes, errorMensajes]
    
}