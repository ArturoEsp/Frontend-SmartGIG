import { gql } from "@apollo/client"

export const GET_RANDOM_MESSAGE = gql`
    query getMessageRandom {
        getMessageRandom {
            mensaje
        }
    }
`

export const GET_MY_MESSAGE = gql`
    query getMyMessages {
        getMyMessages {
            _id
            mensaje
        }
    }
`