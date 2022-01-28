import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_RANDOM_MESSAGE } from "../../graphql/Query/mensaje.query"

export const useMessageRandom = () => {
    const [mensaje, setMensaje] = useState({})

    const { data, loading: loadingMensaje, error: errorMensaje, refetch } = useQuery(GET_RANDOM_MESSAGE)

    useEffect(() => {
        if (data) setMensaje(data.getMessageRandom)
    }, [data])

    return [mensaje, loadingMensaje, errorMensaje, refetch]
    
}