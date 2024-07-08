import React, { Children, createContext, useContext, useState } from 'react'

export const AuthContext = createContext()
const Authprovider = ({children}) => {
 const initalAuthUser = localStorage.getItem("users")
 const [authUser,setAuthUser]=useState(
    initalAuthUser? JSON.parse(initalAuthUser): undefined
 )
 return(
    <AuthContext.Provider value={[authUser,setAuthUser]} >
        {children}
    </AuthContext.Provider>
 )
}

export const useAuth=()=>useContext(AuthContext)

export default Authprovider
