import { ApolloClient, InMemoryCache } from "@apollo/client"
import { setContext } from "apollo-link-context"
import { createUploadLink } from "apollo-upload-client"

const { REACT_APP_NODE_ENV, REACT_APP_API_DEV, REACT_APP_API_PROD } = process.env

const uri = REACT_APP_NODE_ENV === 'production' ? REACT_APP_API_PROD : REACT_APP_API_DEV

const httpLink = createUploadLink({ uri })


const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('token')
    return {
        headers:{
            ...headers,
            authorization: token    
        }
    }
}) 

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
})