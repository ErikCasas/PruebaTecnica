import { useContext } from 'react'
import { AuthContext } from './AuthProvider'

//este es un pequeño hook personal para acceder con menos codigo al estado
const useAuth = () => {
    return useContext(AuthContext)     
}

export default useAuth