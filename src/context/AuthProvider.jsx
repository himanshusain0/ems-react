import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        const storedEmployees = localStorage.getItem("employees")
        
        if (!storedEmployees) {
            setLocalStorage()
            const { employees } = getLocalStorage()
            setUserData(employees || [])
        } else {
            const employees = JSON.parse(storedEmployees)
            setUserData(employees)
        }
    }, [])

    useEffect(() => {
        if (userData.length > 0) {
            localStorage.setItem("employees", JSON.stringify(userData))
        }
    }, [userData])

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider