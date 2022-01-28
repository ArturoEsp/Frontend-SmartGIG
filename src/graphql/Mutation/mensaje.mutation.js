import { gql } from "@apollo/client"

export const CREATE_MESSAGE = gql`
    mutation createMessage($mensaje: String) {
        createMessage(mensaje: $mensaje)
    }
`

export const EDIT_MESSAGE = gql`
    mutation editMensaje($_id: ID!, $mensaje: String) {
        editMensaje(_id: $_id, mensaje: $mensaje)
    }
`